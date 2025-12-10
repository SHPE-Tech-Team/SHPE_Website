"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
    {
        id: 1,
        image: "/SHPECON_2025.JPG",
        alt: "SHPE UIUC Community",
        color: "bg-slate-800" // Fallback
    },
    {
        id: 2,
        image: "/SHPECON_2025_2.JPG",
        alt: "SHPE UIUC Community 2",
        color: "bg-slate-800"
    },
    {
        id: 3,
        image: "/SHPECON_sheesh.JPG",
        alt: "SHPE UIUC Community 3",
        color: "bg-slate-900"
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden bg-gray-900 text-white">
            {/* Background Slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {slide.image ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.alt || "Hero Image"}
                                fill
                                className="object-cover object-center"
                                priority={index === 0}
                            />
                        </div>
                    ) : (
                        /* Placeholder Background */
                        <div className={`w-full h-full ${slide.color} flex items-center justify-center`}>
                            <div className="text-white/10 text-6xl font-black rotate-12 select-none">
                                {slide.alt}
                            </div>
                        </div>
                    )}

                    {/* Overlay Gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                </div>
            ))}

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up drop-shadow-lg">
                    Society of Hispanic <br className="hidden md:block" />
                    <span className="text-shpe-orange">Professional Engineers</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
                    University of Illinois Urbana-Champaign Chapter
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/get-involved"
                        className="bg-shpe-orange hover:bg-shpe-orange-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Join Our Familia
                    </Link>
                    <Link
                        href="/events"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Upcoming Events
                    </Link>
                </div>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 rounded-full transition-all duration-300 shadow-sm ${index === current ? "bg-shpe-orange w-10" : "bg-white/50 w-3 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
