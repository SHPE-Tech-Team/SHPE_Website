import Link from "next/link";

export default function GetInvolved() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Get Involved
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Join the familia and kickstart your professional journey with SHPE UIUC.
                    </p>
                </div>
            </div>

            {/* Membership Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Member</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Membership is open to all students at UIUC. By joining SHPE, you gain access to a national network of professionals, exclusive job opportunities, scholarships, and a community that feels like home.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Access to National Convention",
                                "Exclusive Company Info Sessions",
                                "Mentorship Programs",
                                "Leadership Opportunities",
                                "Academic Support & Study Tables"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <svg className="h-6 w-6 text-shpe-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-block bg-shpe-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-shpe-blue-light transition-colors">
                            Sign Up for Membership
                        </a>
                    </div>
                    <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                        {/* Placeholder for an image */}
                        <p className="text-gray-400 font-medium">Community Photo Placeholder</p>
                    </div>
                </div>
            </div>

            {/* Committees Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Join a Committee</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Technical Committee", desc: "Build projects, host workshops, and develop your technical skills." },
                            { title: "Mentorship Committee", desc: "Guide underclassmen or find a mentor to help navigate college life." },
                            { title: "Social Committee", desc: "Plan events that bring the membership together and build lasting bonds." },
                            { title: "Outreach Committee", desc: "Inspire K-12 students to pursue STEM careers through local school visits." },
                            { title: "Marketing Committee", desc: "Manage our social media presence and design merchandise." },
                            { title: "Corporate Committee", desc: "Liaise with company representatives and organize career fairs." },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-shpe-blue mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ready to Join Banner */}
            <div className="bg-shpe-orange py-12">
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