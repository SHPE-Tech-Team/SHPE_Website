import Link from "next/link";

export default function Resources() {
    const resources = [
        {
            category: "Academic Support",
            items: [
                {
                    name: "CARE Tutoring",
                    description: "Get free tutoring for engineering courses, study halls, and academic mentoring.",
                    url: "https://care.grainger.illinois.edu/tutoring",
                    icon: (
                        <svg className="w-8 h-8 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    )
                },
                {
                    name: "Writer's Workshop",
                    description: "Receive feedback on your writing from essays to personal statements.",
                    url: "https://writersworkshop.illinois.edu/",
                    icon: (
                        <svg className="w-8 h-8 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    )
                },
                {
                    name: "Course Explorer",
                    description: "Browse course offerings, schedules, and general education requirements.",
                    url: "https://courses.illinois.edu/",
                    icon: (
                        <svg className="w-8 h-8 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    )
                },
            ]
        },
        {
            category: "Professional & Student Services",
            items: [
                {
                    name: "ECS (Engineering Career Services)",
                    description: "Career advice, resume reviews, and job search resources for engineering students.",
                    url: "https://ecs.grainger.illinois.edu/",
                    icon: (
                        <svg className="w-8 h-8 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    )
                },
                {
                    name: "Morrill Engineering Program (MEP)",
                    description: "Support for underrepresented minority students in engineering through mentoring and workshops.",
                    url: "https://mep.grainger.illinois.edu/",
                    icon: (
                        <svg className="w-8 h-8 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    )
                },
                {
                    name: "SHPE National",
                    description: "The official website for the Society of Hispanic Professional Engineers.",
                    url: "https://shpe.org/",
                    icon: (
                        <svg className="w-8 h-8 text-shpe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )
                },
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-blue-100 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Member Resources
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Tools and services to support your academic and professional success at UIUC.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-20">
                    {resources.map((section, index) => (
                        <div key={index}>
                            <div className="flex items-center mb-10">
                                <div className="h-10 w-2 bg-shpe-orange rounded-full mr-4"></div>
                                <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, itemIndex) => (
                                    <a
                                        key={itemIndex}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                                    >
                                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-shpe-blue transition-colors mb-3">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="mt-6 flex items-center text-shpe-orange font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                            Visit Website
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
