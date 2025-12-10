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
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Navigation</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">About Us</Link></li>
                            <li><Link href="/events" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Events</Link></li>
                            <li><Link href="/contact" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/resources" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Member Resources</Link></li>
                            <li><Link href="/sponsors" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Sponsorship</Link></li>
                            <li><Link href="/get-involved" className="text-base text-gray-500 hover:text-shpe-orange transition-colors">Join SHPE</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Connect</h3>
                        <ul className="space-y-3">
                            <li><Link href="https://join.slack.com/t/shpe-uiuc/shared_invite/zt-3bb1v0tpc-nmf3p9VJTEpLtX1tjb~iBw" className="text-base text-gray-500 hover:text-shpe-blue transition-colors">Slack</Link></li>
                            <li><Link href="https://www.instagram.com/shpe_uiuc/?hl=en" className="text-base text-gray-500 hover:text-shpe-blue transition-colors">Instagram</Link></li>
                            <li><Link href="https://www.linkedin.com/company/society-of-hispanic-professional-engineers-uiuc-chapter/posts/?feedView=all" className="text-base text-gray-500 hover:text-shpe-blue transition-colors">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Society of Hispanic Professional Engineers at UIUC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
