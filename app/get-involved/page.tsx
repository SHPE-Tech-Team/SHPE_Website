

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { COMMITTEES_QUERY } from "@/sanity/lib/queries";
import { Committee } from "@/app/data/committees";
import CommitteeCard from "../components/CommitteeCard";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function GetInvolved() {
    const committees = await client.fetch<Committee[]>(COMMITTEES_QUERY);

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-shpe-blue sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Get Involved with</span>{' '}
                                    <span className="block text-shpe-orange xl:inline">SHPE UIUC</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Join the familia and kickstart your professional journey. Click on a committee below to learn more about how you can participate and grow.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/get_involved.JPG"
                        alt="SHPE Members getting involved"
                    />
                </div>
            </div>

            {/* Committees Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {committees.map((committee) => (
                        <CommitteeCard key={committee.id} committee={committee} />
                    ))}
                </div>
            </div>

            {/* Ready to Join Banner */}
            <div className="bg-shpe-blue py-12">
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