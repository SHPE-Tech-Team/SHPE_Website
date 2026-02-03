import PageHeader from "../components/PageHeader";

export const revalidate = 60;

export default async function Events() {
    const calendarId = "c8d37c46f4c51dacdb27fa71cc2321c685de61e4868c3c4ac7a763ed968f7df3@group.calendar.google.com";

    return (
        <div className="bg-white min-h-screen">
            {/* Calendar Header */}
            <div className="relative bg-shpe-blue overflow-hidden pt-32 pb-20">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-shpe-orange/20 rounded-full blur-3xl"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Events <span className="text-shpe-orange">Calendar</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                        Don't miss out on what's happening in our familia.
                    </p>
                </div>
            </div>

            {/* Google Calendar Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20 relative z-20">
                <div className="bg-white rounded-3xl p-4 sm:p-8 border border-gray-100 shadow-xl">
                    <div className="text-center mb-8">
                        <a
                            href={`https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(calendarId)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-shpe-blue font-bold hover:bg-shpe-blue hover:text-white transition-all duration-300"
                        >
                            Add to Google Calendar
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