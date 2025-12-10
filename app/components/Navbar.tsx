'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: 'Events', href: '/events' },
        { name: 'Resources', href: '/resources' },
        { name: 'Sponsors', href: '/sponsors' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-uiuc-blue hover:text-uiuc-orange transition-colors flex items-center gap-2">
                            <Image src="/logo.png" alt="SHPE Logo" width={100} height={100} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${pathname === link.href
                                    ? 'bg-blue-100 text-black'
                                    : 'text-gray-600 hover:bg-blue-100 hover:text-black'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/get-involved"
                            className="bg-uiuc-orange hover:bg-shpe-orange-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-shpe-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-shpe-blue"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 absolute w-full`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                                ? 'text-uiuc-orange bg-orange-50'
                                : 'text-gray-600 hover:text-uiuc-blue hover:bg-gray-50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 pb-2 px-3">
                        <Link
                            href="/get-involved"
                            onClick={() => setIsOpen(false)}
                            className="w-full block text-center bg-uiuc-orange hover:bg-shpe-orange-dark text-white px-5 py-3 rounded-lg text-base font-medium transition-colors"
                        >
                            Join Chapter
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}