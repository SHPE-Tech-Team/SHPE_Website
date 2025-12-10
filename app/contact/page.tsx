"use client";

export default function Contact() {
    const contacts = [
        {
            title: "President",
            name: "Gerardo Paramo",
            pronouns: "He/Him",
            year: "Senior",
            major: "Bioengineering, Minor in Chemistry",
            email: "gparamo2@illinois.edu",
            note: "Reach out to me on Slack"
        },
        {
            title: "External Vice President",
            name: "Alberto Pabon-Castejon",
            pronouns: "He/Him",
            year: "Junior",
            major: "Computer Science; T&M",
            email: "exec.shpe.uiuc@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Internal Vice President",
            name: "Krystal Hernandez",
            pronouns: "She/Her",
            year: "Junior",
            major: "Materials Science & Engineering",
            email: "shpe.uiuc.vp.internal@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Secretary",
            name: "Ana Franco",
            pronouns: "She/Her",
            year: "Junior",
            major: "Civil Engineering w/ a Minor in Spanish",
            email: "shpe.uiuc.secretary@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Treasurer",
            name: "Ceejay Costes Araña",
            pronouns: "He/Him/His",
            year: "Junior",
            major: "Chemical Engineering",
            email: "treasurer.shpe.uiuc@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Publicity",
            name: "Maria Maldonado",
            pronouns: "She/Her",
            year: "Junior",
            major: "Behavioral Neuroscience Psychology, minor in Child Health & Well-Being",
            email: "shpe.uiuc.marketing@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Academic Affairs",
            name: "Isaac Izaguirre",
            pronouns: "He/Him",
            year: "Junior",
            major: "Civil Engineering",
            email: "shpe.uiuc.academic@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Technical Projects",
            name: "Juan Fragoso",
            pronouns: "He/Him",
            year: "Senior",
            major: "Mechanical Engineering",
            email: "shpe.uiuc.technicalchair@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "MemberSHPE",
            name: "Isaac Gomez-Ibarra & Litzy Melchor",
            pronouns: "He/Him, She/Her",
            year: "Junior, Junior",
            major: "Civil Engineering, Accountancy+DS",
            email: "shpe.uiuc.membership@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Community Service",
            name: "Alexis Villalobos",
            pronouns: "He/Him",
            year: "Junior",
            major: "Systems Engineering & Design, Minor in Electrical Engineering",
            email: "shpe.uiuc.service@gmail.com",
            note: "Reach out to me on Slack or LinkedIn"
        },
        {
            title: "High School Outreach",
            name: "Yasmine Rios",
            pronouns: "She/Her",
            year: "Senior",
            major: "Chemical Engineering",
            email: "shpe.uiuc.outreach@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Graduate Ambassador",
            name: "Juan Rojas",
            pronouns: "He/Him",
            year: "3rd year PHD",
            major: "Chemical Engineering",
            email: "shpe.uiuc.ga@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Alumni Relations Chair",
            name: "Emily Alvarado",
            pronouns: "She/Her",
            year: "Junior",
            major: "Chemistry",
            email: "alumni.shpe.uiuc@gmail.com",
            note: "Reach out to me on Slack"
        },
        {
            title: "Student Advisor",
            name: "Luis Daniel Castro",
            pronouns: "He/Him/His",
            year: "Senior",
            major: "Civil Engineering",
            email: "student.advisor.shpe.uiuc@gmail.com",
            note: "Reach out to me on Slack"
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/contact.JPG"
                        alt="SHPE UIUC Contact"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl text-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-200 drop-shadow-md">
                        Have a question? Reach out to the appropriate board member below.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            {/* Decorative top accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shpe-blue to-shpe-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                            {/* Header */}
                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-shpe-orange tracking-wider uppercase mb-2">{contact.title}</h3>
                                <h2 className="text-2xl font-extrabold text-gray-900">{contact.name}</h2>
                                <p className="text-sm text-gray-400 font-medium mt-1">{contact.pronouns}</p>
                            </div>

                            {/* Details */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-shpe-blue mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-0.5">Year</span>
                                        <span className="text-gray-700 font-medium">{contact.year}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-shpe-blue mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-0.5">Major</span>
                                        <span className="text-gray-700 font-medium">{contact.major}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-6 border-t border-gray-100">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center text-shpe-blue font-bold group-hover:text-shpe-orange transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="truncate">{contact.email}</span>
                                </a>
                                <p className="text-xs text-gray-400 mt-4 italic flex items-center">
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {contact.note}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}