"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
    {
        id: 1,
        image: "/SHPE_annou.png",
        alt: "SHPE UIUC Announcement1",
        color: "bg-slate-800" // Fallback
    },
    {
        id: 2,
        image: "/SHPE_2ann.png",
        alt: "SHPE UIUC Announcement2",
        color: "bg-slate-800"
    },
];

export default function EventHighlights() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="absolute inset-0 overflow-hidden rounded-3xl">
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
                            <div className="text-6xl font-black rotate-12 select-none">
                                {slide.alt}
                            </div>
                        </div>
                    )}

                    {/* Overlay Gradient for better text readability */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div> */}
                </div>
            ))}

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
