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
        <div className="bg-white">
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
                        <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.title}</h3>
                            <p className="text-base text-shpe-orange font-semibold mb-1">{contact.name}</p>
                            <p className="text-sm text-gray-500 mb-1">Pronouns: {contact.pronouns}</p>
                            <p className="text-sm text-gray-500 mb-1">Year: {contact.year}</p>
                            <p className="text-sm text-gray-500 mb-1">Major/Minor: {contact.major}</p>
                            <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-shpe-blue break-words mb-1 block">
                                {contact.email}
                            </a>
                            <p className="text-xs text-gray-400 mt-2">{contact.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}