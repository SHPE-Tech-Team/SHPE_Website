"use client";

import React from 'react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';

export default function JoinPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Join Our Familia"
                description="Welcome to SHPE UIUC! Start your journey with us by connecting, getting involved, and attending our events."
                bgColorClass="bg-gradient-to-b from-blue-50 to-white"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Step 1: Connect */}
                <section>
                    <FadeIn>
                        <SectionHeader
                            title="1. Stay Connected"
                            description="The best way to stay in the loop is to join our primary communication channels."
                        />
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <FadeIn delay={0.1} className="h-full">
                            <InfoCard
                                title="Linktree"
                                description="Our central hub for all SHPE links, sign-up forms, and our Slack community! Check it out to stay in the loop."
                                iconColorClass="text-green-600"
                                iconBgColorClass="bg-green-100"
                                icon={
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                }
                                link={{
                                    text: "View Linktree",
                                    href: "https://linktr.ee/SHPE.UI?utm_source=linktree_profile_share&ltsid=94fd3c15-a042-4e7c-894a-31c020045687",
                                    target: "_blank"
                                }}
                            />
                        </FadeIn>

                        <FadeIn delay={0.2} className="h-full">
                            <InfoCard
                                title="Follow Instagram"
                                description="Event recaps, member spotlights, and daily reminders. Don't miss out on what's happening!"
                                iconColorClass="text-pink-600"
                                iconBgColorClass="bg-pink-100"
                                icon={
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.37c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                }
                                link={{
                                    text: "Follow @shpe_uiuc",
                                    href: "https://www.instagram.com/shpe_uiuc/?hl=en",
                                    target: "_blank"
                                }}
                            />
                        </FadeIn>
                    </div>
                </section>

                {/* Step 2: Round Table (Freshman) */}
                <section className="bg-gradient-to-br from-shpe-blue/5 to-transparent rounded-3xl p-8 md:p-12 relative overflow-hidden border border-shpe-blue/10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-shpe-blue/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <FadeIn delay={0.3}>
                            <div>
                                <h2 className="text-3xl font-extrabold text-shpe-blue mb-6">Are you a Freshman?</h2>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Round Table!</h3>
                                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                    Round Table is our dedicated committee for freshman members. It's the perfect way to make instant friends, learn leadership skills, and help organize events alongside the Executive Board.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-shpe-blue">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Organize Events</h4>
                                        <p className="text-sm text-gray-600">Collaborate with other first year students and plan fundraisers and events</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-shpe-blue">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Mentorship</h4>
                                        <p className="text-sm text-gray-600">Get paired with an upperclassman mentor to navigate college.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-50">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-shpe-blue">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">Fun Socials</h4>
                                        <p className="text-sm text-gray-600">Join us for fun social events and activities.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Step 3: Get Involved & Events */}
                <section>
                    <FadeIn delay={0.5}>
                        <SectionHeader
                            title="3. Take the Next Step"
                            description="Join a committee or come to our next event."
                        />
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <FadeIn delay={0.6} className="h-full">
                            <Link href="/get-involved" className="group h-full block">
                                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-150 duration-500"></div>
                                    <div className="relative z-10 w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-shpe-orange">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shpe-orange transition-colors">Join a Committee</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Beyond Round Table, we have many committees for all interests - from tech, to outreach, to finance. Find your niche!
                                    </p>
                                    <span className="mt-auto bg-white border-2 border-shpe-orange text-shpe-orange px-6 py-2 rounded-full font-bold group-hover:bg-shpe-orange group-hover:text-white transition-all">
                                        Explore Committees
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>

                        <FadeIn delay={0.7} className="h-full">
                            <Link href="/events" className="group h-full block">
                                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0 transition-transform group-hover:scale-150 duration-500"></div>
                                    <div className="relative z-10 w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-shpe-blue">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-shpe-blue transition-colors">Attend an Event</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        We host workshops, socials, and general body meetings every week. Come meet the familia in person!
                                    </p>
                                    <span className="mt-auto bg-white border-2 border-shpe-blue text-shpe-blue px-6 py-2 rounded-full font-bold group-hover:bg-shpe-blue group-hover:text-white transition-all">
                                        View Calendar
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center py-12">
                    <FadeIn delay={0.8}>
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">We can't wait to meet you!</h2>
                    </FadeIn>
                </section>
            </div>
        </div>
    );
}
