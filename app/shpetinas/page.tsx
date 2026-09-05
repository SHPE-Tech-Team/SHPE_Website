import React from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { client } from "@/sanity/lib/client";
import { SHPETINA_GALLERY_QUERY, SHPETINA_SPOTLIGHT_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

interface ShpetinaImage {
    id: string;
    title?: string;
    imageUrl: string;
    alt?: string;
}

interface ShpetinaSpotlight {
    name: string;
    role: string;
    imageUrl: string;
    socialLinks?: {
        platform: string;
        url: string;
        label?: string;
    }[];
}

export default async function SHPEtinasPage() {
    const images = await client.fetch<ShpetinaImage[]>(SHPETINA_GALLERY_QUERY);
    const spotlight = await client.fetch<ShpetinaSpotlight>(SHPETINA_SPOTLIGHT_QUERY);

    const lead: ShpetinaSpotlight = spotlight || {
        name: "Lesly Beiza Medrano",
        role: "SHPEtinas Lead",
        imageUrl: "/shpetina.jpg",
        socialLinks: [
            { platform: 'linkedin', url: 'https://www.linkedin.com/in/lesly-beiza/', label: 'Connect on LinkedIn' },
            { platform: 'slack', url: '#', label: 'Slack' }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden selection:bg-pink-200">

            {/* 
        HERO SECTION: Editorial/Asymmetrical 
        Mobile: Full height, text bottom overlay.
        Desktop: Split screen diagonal.
      */}
            <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0 gap-8">

                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="space-y-6 relative">
                        <span className="inline-block py-1.5 px-4 border border-pink-300 rounded-full text-xs md:text-sm font-mono tracking-widest text-[var(--color-shpetinas-pink)] uppercase bg-pink-50/50">
                            Empower • Lead • Innovate
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                            SHPE<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-shpetinas-pink)] to-purple-600">
                                Tinas.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-lg font-medium leading-relaxed mt-4">
                            Redefining the face of STEM. We are a force of culture, resilience, and brilliance.
                        </p>
                        <div className="pt-6">
                            <Link href="#mission" className="group inline-flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-[var(--color-shpetinas-pink)] transition-colors">
                                Explore Mission
                                <span className="w-16 h-[2px] bg-gray-200 group-hover:bg-[var(--color-shpetinas-pink)] transition-colors"></span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Image Container - Polaroid Style */}
                <div className="w-full md:w-1/2 flex justify-center relative z-10 md:pr-12">
                    <div className="relative w-full max-w-[400px] group transform rotate-3 hover:rotate-0 transition-all duration-500 ease-out">
                        {/* Glow Behind - Toned Down */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-shpetinas-pink)] to-purple-600 rounded-[1rem] blur-2xl opacity-30 z-0"></div>

                        {/* Polaroid Frame */}
                        <div className="relative z-10 bg-white p-4 pb-20 shadow-2xl rounded-sm transform transition-transform duration-500 hover:-translate-y-2">
                            {/* Image Area - Full Fit */}
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 shadow-inner">
                                <Image
                                    src="/shpetinas_hero_v2.jpeg"
                                    alt="SHPEtinas - Empower Lead Innovate"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <span className="font-mono text-gray-400 text-sm tracking-widest uppercase">La Ingeniera</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* MARQUEE / FOOTER CALL */}
            <div className="bg-[var(--color-shpetinas-pink)] py-6 overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-8">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-black text-white uppercase opacity-90">
                            Join the Familia •
                        </span>
                    ))}
                </div>
            </div>

            {/* 
        LEAD SHOWCASE: 
      */}
            <section className="py-32 bg-white relative">
                {/* Subtle Purple Tint at Top */}
                <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-purple-50 to-transparent opacity-60 pointer-events-none"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                            {/* Image - Free Standing */}
                            <div className="shrink-0 relative">
                                {/* Decorative Rings behind */}
                                <div className="absolute inset-0 border-[1px] border-[var(--color-shpetinas-pink)] rounded-full scale-110 opacity-30 animate-pulse"></div>
                                <div className="absolute inset-0 border-[1px] border-purple-200 rounded-full scale-125 opacity-40"></div>

                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl relative z-10 group border-4 border-white">
                                    <Image
                                        src={lead.imageUrl}
                                        alt={lead.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Clean Text Layout - No Box */}
                            <div className="text-center md:text-left space-y-8 flex-1">
                                <div>
                                    <h4 className="text-[var(--color-shpetinas-pink)] font-bold text-sm tracking-[0.2em] uppercase mb-3">Leadership Spotlight</h4>
                                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">{lead.name}</h2>
                                    <p className="text-gray-400 font-medium text-xl mt-2 tracking-wide">{lead.role}</p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 flex-wrap">
                                    {lead.socialLinks?.map((link, index) => {
                                        if (index === 0) {
                                            // Primary Link (First one in list)
                                            return (
                                                <Link
                                                    key={index}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#006396] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                                >
                                                    {link.label || `Connect on ${link.platform || 'LinkedIn'}`}
                                                    <ArrowRightIcon className="w-5 h-5" />
                                                </Link>
                                            );
                                        } else {
                                            // Secondary Links
                                            return (
                                                <div key={index} className="flex items-center gap-2">
                                                    {index === 1 && <span className="text-gray-400 font-medium hidden sm:inline">or</span>}
                                                    <Link
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-500 hover:text-[var(--color-shpetinas-pink)] font-bold transition-colors border-b-2 border-transparent hover:border-[var(--color-shpetinas-pink)]"
                                                    >
                                                        {link.label || `reach out on ${link.platform}`}
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    })}

                                    {(!lead.socialLinks || lead.socialLinks.length === 0) && (
                                        <p className="text-gray-500 font-medium italic">Reach out via Slack!</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 
        MISSION SECTION
      */}
            <section id="mission" className="relative py-24 bg-white text-gray-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <span className="text-[var(--color-shpetinas-pink)] font-bold text-sm tracking-[0.2em] uppercase mb-4 block animate-fade-in-up">Our Mission</span>
                        <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-gray-900">
                            More than just numbers.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-shpetinas-pink)] to-purple-600">
                                We are a movement.
                            </span>
                        </h3>

                        <p className="text-xl text-gray-600 leading-relaxed font-light mb-16 mx-auto max-w-2xl">
                            SHPEtinas is a program dedicated to accelerating and affirming the presence of Latinas in STEM. We provide a space for our members to connect, grow, and inspire one another.
                        </p>

                        {/* Gallery Section from Sanity */}
                        {images.length > 0 && (
                            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 py-12 px-2">
                                {images.map((img, idx) => (
                                    <div
                                        key={img.id}
                                        className={`relative group overflow-hidden rounded-3xl shadow-lg break-inside-avoid transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${idx % 3 === 0 ? 'aspect-[3/4]' : idx % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'}`}
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={img.imageUrl}
                                                alt={img.alt || img.title || "SHPEtina Gallery Image"}
                                                width={600}
                                                height={800}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {img.title && (
                                                    <p className="text-white font-bold text-xl tracking-tight mb-1">{img.title}</p>
                                                )}
                                                <div className="w-12 h-1 bg-[var(--color-shpetinas-pink)] rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </FadeIn>
                </div>
            </section>

            {/* MARQUEE / FOOTER CALL */}
            <div className="bg-[var(--color-shpetinas-pink)] py-6 overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex gap-8">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-black text-white uppercase opacity-90">
                            Join the Familia •
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
