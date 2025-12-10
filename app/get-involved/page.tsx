"use client";

import { useState } from "react";
import Link from "next/link";

const committees = [
    {
        title: "New Member Roundtable",
        shortDescription: "Develop your leadership skills and deepen your connection to the SHPE familia in this microcosm of the chapter.",
        fullDescription: "The Roundtable (RT) was created in the 1993-94 year in order to develop new SHPE members into leaders of the organization. The RT works by creating a microcosm of the chapter. It is composed of mainly freshman but is open to any new members. The committee then elects its own e-board. Throughout the school year, members of the RT, elected or not, think of and plan multiple events focused around SHPE's core values (Familia, Service, Education, and Resilience). The planning and execution of these events serve to deepen the connection our new members have with our chapter and the SHPE community.",
        contact: "Krystal Hernandez",
        email: "shpe.uiuc.vp.internal@gmail.com",
        meeting: "Sundays 4-5pm Noyes 157"
    },
    {
        title: "External Team",
        shortDescription: "Build corporate connections and organize professional development events for the chapter.",
        fullDescription: "The External Team aims to create corporate connections and provide meaningful workshops and events to our chapter members so that they can enhance themselves professionally and personally. With External Team, our chapter builds lasting connections with companies and also helps our members get noticed in professional settings.",
        contact: "Alberto Pabon-Castejon",
        email: "exec.shpe.uiuc@gmail.com",
        meeting: "Mondays 5-6pm Engineering hall 112"
    },
    {
        title: "Treasurer's Committee",
        shortDescription: "Manage funds and organize exciting fundraisers to support SHPE|UIUC endeavors.",
        fullDescription: "The Treasurer's Cabinet is dedicated to generating funds within the University. We plan and execute all kinds of fundraisers from selling tamales on the quad to working a concession stand at ILLINI basketball home games. The funds generated from our sales go towards various SHPE|UIUC endeavors. Some fundraisers will have their proceeds donated to a charity and some will be kept to fund SHPE|UIUC. We use the funds to purchase equipment for the office or necessities for other teams.",
        contact: "Ceejay Costes Araña",
        email: "treasurer.shpe.uiuc@gmail.com",
        meeting: "Wednesdays 6-7pm Everitt 2101"
    },
    {
        title: "Technical Projects",
        shortDescription: "Gain hands-on engineering experience by working on real-world problems and projects.",
        fullDescription: "SHPE's Technical Projects Team was founded with the purpose of exposing our Engineers to real-world problems and projects. Each year SHPE's Technical Projects Committee takes on on multiple projects ranging from robots for the Midwestern Robotics Design Competition (MRDC) to smaller including for the Engineering Open House (EOH) exhibits. The projects will be displayed in the Engineering Open House at the University of Illinois.",
        contact: "Juan Fragoso",
        email: "shpe.uiuc.technicalchair@gmail.com",
        meeting: "Sundays 2-4pm ECE OpenLab"
    },
    {
        title: "MemberSHPE",
        shortDescription: "Plan social events and foster a strong sense of familia through the KinSHPE program.",
        fullDescription: "The MemberSHPE Committee was established in 2016 to provide the chapter with social events and more ways to get involved with the organization. In 2018, the KinSHPE Program was created by the committee to encourage mentorship and friendly competition between our members. Restructured in 2020, the KinSHPE Program has evolved to now feature four 'houses' that members are sorted into to support and create the sense of familia while adding in fun and competition.",
        contact: "Isaac Gomez-Ibarra & Litzy Melchor",
        email: "shpe.uiuc.membership@gmail.com",
        meeting: "Tuesday 7-8pm Loomis 136"
    },
    {
        title: "High School Outreach",
        shortDescription: "Inspire the next generation of innovators by promoting STEM awareness in the community.",
        fullDescription: "SHPE's mission is to empower the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development. Through the programs that the Outreach Team organizes, SHPE will inspire the next generation of innovators this country needs! SHPE|UIUC aims to motivate minority students to pursue a higher education and increase the quantity of minorities in STEM fields.",
        contact: "Yasmine Rios",
        email: "shpe.uiuc.outreach@gmail.com",
        meeting: "Wednesdays 7-8pm Everitt 2101"
    },
    {
        title: "Community Service",
        shortDescription: "Give back and better the Hispanic community through service and STEM outreach.",
        fullDescription: "Our Community Service Team is a great way to not only get involved in SHPE but strive towards our goal of bettering the hispanic community. SHPE strives to change lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development. SHPE|UIUC Community Service accomplishes this through the variety of programs it hosts at all pre-college levels.",
        contact: "Alexis Villalobos",
        email: "shpe.uiuc.service@gmail.com",
        meeting: "Sundays 7-8pm NHB 2070"
    },
    {
        title: "Graduate Ambassadors",
        shortDescription: "Explore graduate school opportunities and connect with current grad students.",
        fullDescription: "Our Graduate Ambassadors Team is here to discuss Graduate School Opportunities! From getting to meet other grad students to learning more about your own interest in graduate school and how to get there, SHPE Graduate Ambassadors is here to help members learn more about a higher education.",
        contact: "Juan Rojas",
        email: "shpe.uiuc.ga@gmail.com",
        meeting: "Tuesdays 6-7pm Everitt 2101"
    },
    {
        title: "Alumni Relations",
        shortDescription: "Network with alumni and help preserve the rich history of our chapter.",
        fullDescription: "The Alumni Relations Committee was established in 2023 to create events and network opportunities with alumni. It focuses on alumni engagement as well as connecting current members with alumni. In 2024, historical aspect of the Alumni Relations Committee was added to expand the historical records and ensure that current members are knowledge of the chapter's history. Members of this committee will focus on strength our connection to our alumni with events, promotional material, interviews and research into the past.",
        contact: "Emily Alvarado",
        email: "alumni.shpe.uiuc@gmail.com",
        meeting: "Contact for details"
    }
];

export default function GetInvolved() {
    const [selected, setSelected] = useState<typeof committees[0] | null>(null);

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-shpe-blue sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Get Involved with</span>{' '}
                                    <span className="block text-shpe-orange xl:inline">SHPE UIUC</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Join the familia and kickstart your professional journey. Click on a committee below to learn more about how you can participate and grow.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/get_involed.JPG"
                        alt="SHPE Members getting involved"
                    />
                </div>
            </div>

            {/* Committees Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {committees.map((committee, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(committee)}
                            className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden cursor-pointer"
                        >
                            {/* Decorative top accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shpe-blue to-shpe-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-shpe-orange tracking-wider uppercase mb-2">Committee</h3>
                                <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-shpe-blue transition-colors">{committee.title}</h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                                {committee.shortDescription}
                            </p>


                            {/* Actions */}
                            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-shpe-blue font-bold group-hover:text-shpe-orange transition-colors flex items-center">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelected(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-shpe-blue mb-4">{selected.title}</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{selected.fullDescription}</p>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contact & Meeting Details</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-shpe-orange mt-0.5 mr-3 flex-shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-gray-900">{selected.contact}</p>
                                            <a href={`mailto:${selected.email}`} className="text-shpe-blue hover:underline text-sm">{selected.email}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-shpe-orange mt-0.5 mr-3 flex-shrink-0">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-gray-700">{selected.meeting}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-b-2xl border-t border-gray-100 text-center">
                            <button
                                onClick={() => setSelected(null)}
                                className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Ready to Join Banner */}
            <div className="bg-shpe-blue py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">Have questions?</h2>
                        <p className="text-white/90">Reach out to our executive board or come to our next general meeting.</p>
                    </div>
                    <Link href="/contact" className="bg-white text-shpe-orange px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-sm">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}