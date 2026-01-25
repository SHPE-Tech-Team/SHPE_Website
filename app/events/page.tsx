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
        <div className="bg-white">
            {/* Header */}
            <PageHeader
                title="Upcoming Events"
                description="Stay up to date with our latest workshops, socials, and general meetings."
                bgColorClass="bg-gray-50"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((event, index) => (
                            <EventCard key={index} event={event} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-500">No upcoming events at the moment. Check back soon!</p>
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
                            className="text-shpe-blue hover:text-shpe-orange font-medium mt-2 inline-block transition-colors"
                        >
                            Add to Google Calendar &rarr;
                        </a>
                    </div>
                    <div className="w-full h-[500px] md:h-[800px] bg-gray-50 rounded-2xl overflow-hidden">
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