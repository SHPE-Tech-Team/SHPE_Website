import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-uiuc-blue hover:text-uiuc-orange transition-colors flex items-center gap-2">
                            <Image src="/logo.png" alt="SHPE Logo" width={200} height={200} />
                        </Link>
                        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                            Empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
                        </p>
                        <div className="mt-6 text-sm text-gray-500 not-italic">
                            <p className="font-semibold text-gray-900 mb-1">Office Location:</p>
                            <p>Engineering Hall 103A</p>
                            <p>1308 W Green St.</p>
                            <p>Urbana, IL 61801</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Home</Link></li>
                            <li><Link href="/events" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Events</Link></li>
                            <li><Link href="/get-involved" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Committees</Link></li>
                            <li><Link href="/contact" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/resources" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Member Resources</Link></li>
                            <li><Link href="/sponsors" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Sponsorship</Link></li>
                            <li><Link href="/join" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Join SHPE</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Connect</h3>
                        <ul className="space-y-3">
                            <li><Link href="https://join.slack.com/t/shpe-uiuc/shared_invite/zt-3bb1v0tpc-nmf3p9VJTEpLtX1tjb~iBw" className="text-base text-gray-500 hover:text-shpe-blue transition-colors" target="_blank" rel="noopener noreferrer">Slack</Link></li>
                            <li><Link href="https://www.instagram.com/shpe_uiuc/?hl=en" className="text-base text-gray-500 hover:text-shpe-blue transition-colors" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
                            <li><Link href="https://www.linkedin.com/company/society-of-hispanic-professional-engineers-uiuc-chapter/posts/?feedView=all" className="text-base text-gray-500 hover:text-shpe-blue transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400 text-center md:text-left flex items-center gap-1.5">
                        <span>&copy; {new Date().getFullYear()} Society of Hispanic Professional Engineers at UIUC. All rights reserved.</span>
                        <span className="group relative inline-flex items-center">
                            <span className="text-lg opacity-60 drop-shadow-[0_0_4px_rgba(249,115,22,0.6)] hover:opacity-100 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.9)] transition-all duration-300 cursor-default select-none">
                                🔥
                            </span>
                            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Shout out to Kev & Class of 2026
                            </span>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
