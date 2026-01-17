
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { committees } from '@/app/data/committees';

// Helper to generate static params for all committees
export async function generateStaticParams() {
    return committees.map((committee) => ({
        slug: committee.id,
    }));
}

export default async function CommitteePage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const committee = committees.find((c) => c.id === params.slug);

    if (!committee) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Immersive Hero */}
            <div className="relative min-h-[60vh] flex items-end pt-24">
                <div className="absolute inset-0 z-0">
                    <img
                        src={committee.image || "/gbm.JPG"}
                        alt={committee.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/30"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
                    <div className="lg:col-span-2">
                        <Link
                            href="/get-involved"
                            className="hidden md:inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium backdrop-blur-md bg-white/10 px-4 py-2 rounded-full"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Committees
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 text-shadow-lg">
                            {committee.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                            {committee.shortDescription}
                        </p>
                    </div>

                    {/* Quick Details Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-white">
                            <h3 className="text-sm font-bold text-shpe-orange uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Meeting Details</h3>
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-shpe-blue/20 rounded-lg">
                                    <svg className="w-6 h-6 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-lg leading-tight mb-1">When & Where</p>
                                    <p className="text-gray-200 leading-snug">{committee.meeting}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission / About Section - Full Width */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-bold text-shpe-orange tracking-[0.2em] uppercase mb-4">Our Mission</h2>
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                            Building the next generation of leaders through <span className="text-shpe-blue">Familia</span>.
                        </h3>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none text-xl">
                            {committee.fullDescription}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Placeholder - Horizontal Scroll Concept */}
            <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-sm font-bold text-shpe-blue tracking-[0.2em] uppercase mb-2">Leadership</h2>
                        <h3 className="text-3xl font-bold text-gray-900">Meet the Team</h3>
                    </div>
                    {/* <a href="#" className="hidden md:block text-shpe-orange font-semibold hover:text-orange-700">View All Leaders &rarr;</a> */}
                </div>

                {/* Dynamic Leads Grid or Fallback */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {committee.leads && committee.leads.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {committee.leads.map((lead, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                                    <h4 className="text-xl font-bold text-gray-900">{lead.name}</h4>
                                    <p className="text-gray-500">{lead.role}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-shpe-blue">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Lead This Committee!</h4>
                            <p className="text-gray-500 max-w-md mx-auto mb-6">
                                We are always looking for passionate members to step up. Contact the Executive Board to learn about leadership opportunities.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Gallery / Activity Placeholder */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">Highlights</h2>
                        <h3 className="text-3xl font-bold text-gray-900">Captured Moments</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96">
                        <div className="bg-gray-100 rounded-2xl h-full col-span-2 row-span-2 relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100 group-hover:bg-gray-200 transition-colors">
                                Feature Photo
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-full relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100 group-hover:bg-gray-200 transition-colors">
                                Activity 1
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-full relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-100 group-hover:bg-gray-200 transition-colors">
                                Activity 2
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources & Links (Optional) */}
            {committee.links && committee.links.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Resources</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {committee.links.map((link, i) => (
                                <a key={i} href={link.url} className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-shpe-blue font-semibold hover:border-shpe-blue transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Dark CTA Footer */}
            <section className="bg-gray-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6">Ready to make an impact?</h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Whether you want to lead, learn, or just hang out, there's a place for you in {committee.title}.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="p-2 bg-white/10 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Meeting Time</h4>
                                    <p className="text-gray-300">{committee.meeting}</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-2 bg-white/10 rounded-lg mr-4">
                                    <svg className="w-6 h-6 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Primary Contact</h4>
                                    <p className="text-gray-300">{committee.contact}</p>
                                    <p className="text-sm text-gray-500">{committee.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white/5 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-6 text-center">Join the Discussion</h3>
                        <a
                            href={`mailto:${committee.email}`}
                            className="w-full text-center bg-shpe-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-cyan-500/20 mb-4"
                        >
                            Email Committee Chair
                        </a>
                        <p className="text-center text-sm text-gray-500">
                            Or find us on Slack in #committee-{committee.id}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
