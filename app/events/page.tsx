import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import * as chrono from 'chrono-node';

export const revalidate = 60;

interface Event {
    title: string;
    slug: string;
    date: string;
    location: string;
    description: string;
    image: string;
    rsvpLink: string;
    badge: string;
}

const parseEventDate = (event: Event): { date: Date, endDate?: Date, isWeekly: boolean, isMonthly: boolean } | null => {
    try {
        // Pre-process string to help chrono with quirks like "Sundays" -> "Sunday"
        let dateStr = event.date;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        days.forEach(day => {
            const regex = new RegExp(`${day}s`, 'gi');
            dateStr = dateStr.replace(regex, day);
        });

        // Use chrono to parse natural language date
        // forwardDate: true ensures we get the next occurrence for things like "Sunday"
        const parsedResults = chrono.parse(dateStr, new Date(), { forwardDate: true });

        if (parsedResults.length > 0) {
            const result = parsedResults[0];
            const resultDate = result.start.date();
            let resultEndDate = result.end ? result.end.date() : undefined;

            // If no end date but we have a start time, maybe default to 1 hour? 
            // Existing logic didn't explicit default unless in Google URL.
            // But if chrono didn't find an end time, result.end is null.

            // Handle logical badges
            const isWeekly = event.badge === 'Weekly';
            // Handle "Monthly" and the known typo "Monthy"
            const isMonthly = event.badge === 'Monthly' || event.badge === 'Monthy';

            return {
                date: resultDate,
                endDate: resultEndDate,
                isWeekly,
                isMonthly
            };
        }

        // Fallback for strict dates that might not be picked up if formatted weirdly, 
        // though chrono is very good. 
        // If chrono fails, return null which hides the event (safety).
        return null;

    } catch (e) {
        console.error("Date parse error", e);
        return null;
    }
};

const getGoogleCalendarUrl = (event: Event) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(event.location || "");
    const text = encodeURIComponent(event.title || "");
    let dates = "";
    let recur = "";

    const parsed = parseEventDate(event);
    if (parsed) {
        const startDate = parsed.date;
        const endDate = parsed.endDate || new Date(startDate.getTime() + 60 * 60 * 1000);

        // Format as YYYYMMDDTHHmmss using local components (preserves "face value" of the parsed time)
        const format = (d: Date) => {
            const pad = (n: number) => n.toString().padStart(2, '0');
            return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
        };

        dates = `&dates=${format(startDate)}/${format(endDate)}`;

        if (parsed.isWeekly) {
            recur = "&recur=RRULE:FREQ=WEEKLY";
        } else if (parsed.isMonthly) {
            recur = "&recur=RRULE:FREQ=MONTHLY";
        }
    }

    // Force America/Chicago timezone so the "face value" time is interpreted correctly
    return `${baseUrl}&text=${text}&details=${details}&location=${location}${dates}${recur}&ctz=America/Chicago`;
};

export default async function Events() {
    const events = await client.fetch<Event[]>(EVENTS_QUERY);

    // Filter and Sort Events
    const now = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const upcomingEvents = events
        .filter(event => {
            const parsed = parseEventDate(event);
            if (!parsed) return true;
            if (parsed.isWeekly || parsed.isMonthly) return true; // Always show recurring
            return parsed.date > yesterday;
        })
        .sort((a, b) => {
            const parsedA = parseEventDate(a);
            const parsedB = parseEventDate(b);
            const dateA = parsedA?.date;
            const dateB = parsedB?.date;

            if (!dateA || !dateB) return 0;
            return dateA.getTime() - dateB.getTime();
        });

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Upcoming Events
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Stay up to date with our latest workshops, socials, and general meetings.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300 flex flex-col">
                                <div className="bg-shpe-blue h-2"></div>
                                <div className="p-4 sm:p-8 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2 sm:mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${event.badge === 'Academic' ? 'bg-green-100 text-green-800' :
                                            event.badge === 'Professional' ? 'bg-purple-100 text-purple-800' :
                                                event.badge === 'Social' ? 'bg-pink-100 text-pink-800' :
                                                    event.badge === 'Monthly' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-blue-50 text-shpe-blue'
                                            }`}>
                                            {event.badge || 'General'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{event.title}</h3>

                                    <div className="text-gray-600 space-y-1 sm:space-y-2 mb-3 sm:mb-4 flex-1 text-sm sm:text-base">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {event.date}
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 mr-3 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location || 'TBD'}
                                        </div>
                                    </div>

                                    <div className="flex flex-row gap-2 sm:flex-col sm:space-y-3 sm:gap-0 mt-3 sm:mt-4">
                                        {event.rsvpLink && (
                                            <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="flex-1 block w-full text-center bg-shpe-blue hover:bg-blue-700 text-white font-bold py-2 px-2 sm:px-4 rounded-full sm:rounded-2xl transition-colors text-sm sm:text-base shadow-sm">
                                                RSVP
                                            </a>
                                        )}
                                        <a
                                            href={getGoogleCalendarUrl(event)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 block w-full text-center bg-blue-50 hover:bg-blue-100 text-shpe-blue font-bold py-2 px-2 sm:px-4 rounded-full sm:rounded-2xl transition-colors text-sm sm:text-base border border-transparent"
                                        >
                                            + Calendar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-500">No upcoming events at the moment. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Calendar Embedding Placeholder */}
            {/* <div className="bg-gray-50 py-16 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Calendar</h2>
                    <div className="bg-white rounded-2xl shadow-sm p-4 h-[600px] flex items-center justify-center border border-gray-200">
                        <iframe src="https://calendar.google.com/calendar/embed?src=shpe.uiuc%40gmail.com&ctz=America%2FChicago" style={{ border: 0 }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
                    </div>
                </div>
            </div> */}
        </div>
    );
}