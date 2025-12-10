export default function Sponsors() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gray-900 text-white py-24 sm:py-32">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/gbm.JPG"
                        alt="SHPE UIUC GBM"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Decorative elements (adjust z-index or opacity if needed, or remove if they clash) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
                    <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-shpe-orange blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 tracking-tight drop-shadow-lg">
                        Partner with SHPE UIUC
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-200 mb-10 drop-shadow-md">
                        Connect with top engineering talent and support the next generation of Hispanic STEM leaders.
                    </p>
                    <a href="mailto:exec.shpe.uiuc@gmail.com" className="inline-block bg-shpe-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Become a Sponsor
                    </a>
                </div>
            </div>

            {/* Why Sponsor Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Sponsor Us?</h2>
                        <p className="mt-4 text-xl text-gray-600">Join our mission and gain access to a diverse pool of talented engineers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-shpe-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Top Talent Access</h3>
                            <p className="text-gray-600">Engage directly with motivated engineering students through workshops, tech talks, and career fairs.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-shpe-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Visibility</h3>
                            <p className="text-gray-600">Maximize your brand's presence on campus and within the national SHPE network.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-shpe-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Impact & Diversity</h3>
                            <p className="text-gray-600">Directly contribute to the retention and graduation of Hispanic engineers in STEM fields.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Person Section */}
            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-lg text-gray-600">Interested in becoming a sponsor? Contact our External Vice President.</p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row transform hover:scale-[1.01] transition-transform duration-300">
                        <div className="bg-gradient-to-br from-shpe-blue to-blue-900 w-full md:w-2/5 p-8 flex flex-col justify-center items-center text-center text-white">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 text-3xl font-bold">
                                AP
                            </div>
                            <h3 className="text-2xl font-bold">Alberto Pabon-Castejon</h3>
                            <p className="text-blue-200 font-medium">External Vice President</p>
                            <div className="mt-4 inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                <span>He/Him</span>
                            </div>
                        </div>
                        <div className="p-8 md:p-12 w-full md:w-3/5 flex flex-col justify-center">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Year & Major</p>
                                    <p className="text-lg text-gray-900">Junior in Computer Science; T&M</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Email</p>
                                    <a href="mailto:exec.shpe.uiuc@gmail.com" className="text-lg text-shpe-blue hover:text-shpe-orange transition-colors font-medium">
                                        exec.shpe.uiuc@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Note</p>
                                    <p className="text-lg text-gray-700 italic">"Reach out to me on Slack"</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <a href="mailto:exec.shpe.uiuc@gmail.com" className="flex items-center justify-center w-full bg-shpe-orange text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors">
                                    Send an Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}