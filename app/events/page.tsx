export default function Events() {
    const events = [
        {
            title: "General Body Meeting",
            date: "Tuesdays, 7:00 PM",
            location: "ECEB 1002",
            badge: "Weekly"
        },
        {
            title: "Study Tables",
            date: "Wednesdays, 6:00 PM",
            location: "Grainger Library",
            badge: "Academic"
        },
        {
            title: "Corporate Info Session",
            date: "Oct 15, 6:00 PM",
            location: "Siebel Center",
            badge: "Professional"
        },
    ];

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
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300">
                            <div className="bg-shpe-blue h-2"></div>
                            <div className="p-8">
                                <div className="inline-block px-3 py-1 bg-blue-50 text-shpe-blue text-xs font-semibold rounded-full mb-4">
                                    {event.badge}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                <div className="text-gray-600 space-y-2">
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
                                        {event.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar Embedding Placeholder */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Calendar</h2>
                    <div className="bg-white rounded-2xl shadow-sm p-4 h-[600px] flex items-center justify-center border border-gray-200">
                        <p className="text-gray-500">Google Calendar Embedding Area</p>
                    </div>
                </div>
            </div>
        </div>
    );
}