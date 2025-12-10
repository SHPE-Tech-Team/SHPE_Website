export default function Contact() {
    const contacts = [
        { title: "General Inquiries", role: "Executive Board", email: "exec.shpe.uiuc@gmail.com" },
        { title: "On-Campus Affairs", role: "VP Internal", email: "shpe.uiuc.vp.internal@gmail.com" },
        { title: "Financial Affairs", role: "Treasurer", email: "treasurer.shpe.uiuc@gmail.com" },
        { title: "Membership & Socials", role: "Membership Director", email: "shpe.uiuc.membership@gmail.com" },
        { title: "Technical Projects", role: "Technical Chair", email: "shpe.uiuc.technicalchair@gmail.com" },
        { title: "Office Admin", role: "Secretary", email: "shpe.uiuc.secretary@gmail.com" },
        { title: "Graduate/Research", role: "Graduate Ambassador", email: "shpe.uiuc.ga@gmail.com" },
        { title: "Alumni Relations", role: "Alumni Director", email: "student.advisor.shpe.uiuc@gmail.com" },
        { title: "Community Service", role: "Service Director", email: "shpe.uiuc.service@gmail.com" },
        { title: "High School Outreach", role: "Outreach Director", email: "shpe.uiuc.outreach@gmail.com" },
        { title: "Marketing & Media", role: "Marketing Director", email: "shpe.uiuc.marketing@gmail.com" },
        { title: "Academic Affairs", role: "Academic Director", email: "shpe.uiuc.academic@gmail.com" },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Contact Us
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Have a question? Reach out to the appropriate board member below.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">{contact.title}</h3>
                            <p className="text-sm text-shpe-orange font-medium mb-4">{contact.role}</p>
                            <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-shpe-blue break-words">
                                {contact.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}