import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY, CALENDAR_ID_QUERY } from "@/sanity/lib/queries";
import { Event, parseEventDate } from "../lib/eventUtils";
import EventCard from "../components/EventCard";
import PageHeader from "../components/PageHeader";

export const revalidate = 60;

export default async function Events() {
    const events = await client.fetch<Event[]>(EVENTS_QUERY);
    const calendarId = await client.fetch<string>(CALENDAR_ID_QUERY) || "technicalchairshpeuiuc@gmail.com";

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
        <div className="bg-white min-h-screen">
            {/* Custom Vibrant Header */}
            <div className="relative bg-shpe-blue overflow-hidden pt-32 pb-20">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-shpe-orange/20 rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Upcoming <span className="text-shpe-orange">Events</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                        Don't miss out on what's happening in our familia.
                    </p>
                </div>
            </div>

            {/* Featured Events Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((event, index) => (
                            <EventCard key={index} event={event} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-white rounded-3xl shadow-lg border border-gray-100">
                            <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
                                <svg className="w-12 h-12 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
                            <p className="text-gray-500">Check back soon for new announcements!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Google Calendar Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white rounded-3xl p-4 sm:p-8 border border-gray-100 shadow-xl">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Full Calendar</h2>
                        <a
                            href={`https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(calendarId)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-shpe-blue font-bold hover:bg-shpe-blue hover:text-white transition-all duration-300"
                        >
                            Open in Google Calendar
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                    <div className="w-full h-[500px] md:h-[800px] bg-gray-50 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
                        <iframe
                            src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=${encodeURIComponent(calendarId)}&color=%23D50000`}
                            style={{ border: 0 }}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            title="SHPE UIUC Calendar"
                            className="hidden md:block"
                        ></iframe>
                        <iframe
                            src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&src=${encodeURIComponent(calendarId)}&color=%23D50000&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0`}
                            style={{ border: 0 }}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            title="SHPE UIUC Calendar Mobile"
                            className="md:hidden"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}