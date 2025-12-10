export default function Sponsors() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Our Sponsors
                    </h1>
                    <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
                        We are grateful for the generous support of our corporate partners who make our mission possible.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-shpe-blue bg-blue-100 hover:bg-blue-200 md:text-lg">
                            Download Sponsorship Packet
                        </a>
                    </div>
                </div>
            </div>

            {/* Tiered Sponsors Placeholder */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-20">
                    {/* Platinum */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-10">Platinum Sponsors</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400 font-semibold">Logo Placeholder</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gold */}
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-10">Gold Sponsors</h2>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-75">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400 text-sm font-semibold">Logo</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-shpe-blue py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Partner With Us</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Interested in recruiting top engineering talent and supporting diversity in STEM?
                    </p>
                    <a href="/contact" className="inline-block bg-white text-shpe-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}