"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import { UserCircleIcon, CalendarIcon, HeartIcon } from '@heroicons/react/24/solid';

export default function SHPEtinasPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[var(--color-shpetinas-pink)]">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm">
                            SHPEtinas
                        </h1>
                        <p className="text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                            Empowering Latina women in STEM to become leaders, innovators, and changemakers.
                        </p>
                    </FadeIn>
                </div>

                {/* Decorative curves */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Our <span className="text-[var(--color-shpetinas-pink)]">Mission</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                SHPEtinas is a program dedicated to accelerating and affirming the presence of Latinas in STEM. We provide a space for our members to connect, grow, and inspire one another through professional development, mentorship, and community building.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-semibold">
                                    <HeartIcon className="w-5 h-5" /> Community
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">
                                    <UserCircleIcon className="w-5 h-5" /> Leadership
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                                    <CalendarIcon className="w-5 h-5" /> Impact
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full max-w-md relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                                {/* Placeholder for group photo */}
                                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                                    <span className="text-pink-800 font-medium">SHPEtinas Community</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Lead Showcase Section */}
            <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <SectionHeader
                            title="Meet Our Lead"
                            description="Driving our mission forward with passion and dedication."
                        />
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-10 hover:shadow-2xl transition-shadow duration-300">

                                {/* Director Image */}
                                <div className="relative shrink-0 group">
                                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 border-2 border-dashed border-pink-200 relative z-10">
                                        <div className="w-full h-full rounded-full overflow-hidden shadow-lg relative bg-gray-100">
                                            <Image
                                                src="/shpetinas_lead.png"
                                                alt="SHPEtinas Director"
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    {/* Decorative blobs */}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-100 rounded-full blur-xl opacity-60"></div>
                                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-100 rounded-full blur-xl opacity-60"></div>
                                </div>

                                {/* Director Info */}
                                <div className="flex-1 text-center md:text-left space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Director Name</h3>
                                        <p className="text-lg font-medium text-[var(--color-shpetinas-pink)] tracking-wide">SHPEtinas Director</p>
                                    </div>

                                    <blockquote className="text-gray-600 text-lg italic leading-relaxed border-l-4 border-pink-200 pl-6 my-6 md:ml-0 md:pl-6 mx-auto max-w-2xl bg-gray-50/50 py-4 pr-4 rounded-r-xl">
                                        "Being part of SHPEtinas has been an incredible journey of growth and empowerment. My goal is to ensure every Latina in STEM feels supported, heard, and inspired to reach for the stars."
                                    </blockquote>

                                    <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                                        <Link href="mailto:shpetinas@shpeuiuc.org" className="px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg">
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/grid.svg')]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-shpetinas-pink)] rounded-full blur-[120px] opacity-10"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Ready to Join the Familia?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Connect with a network of inspiring women and take your professional development to the next level.
                        </p>
                        <Link
                            href="/join"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-shpetinas-pink)] text-white text-lg font-bold rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,192,203,0.4)] hover:shadow-[0_0_30px_rgba(255,192,203,0.6)] hover:-translate-y-1"
                        >
                            Get Involved
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
