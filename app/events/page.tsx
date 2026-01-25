import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { Event, parseEventDate } from "../lib/eventUtils";
import EventCard from "../components/EventCard";
import PageHeader from "../components/PageHeader";

export const revalidate = 60;

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
        </div>
    );
}