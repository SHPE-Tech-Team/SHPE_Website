import React from 'react';
import Link from 'next/link';

// You might want to move this interface to a shared types file later
interface Committee {
    id: string; // or slug, depending on your data
    title: string;
    shortDescription: string;
}

interface CommitteeCardProps {
    committee: Committee;
}

const CommitteeCard: React.FC<CommitteeCardProps> = ({ committee }) => {
    return (
        <Link
            href={`/get-involved/${committee.id}`}
            className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block"
        >
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shpe-blue to-shpe-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-sm font-bold text-shpe-orange tracking-wider uppercase mb-2">Committee</h3>
                <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-shpe-blue transition-colors">{committee.title}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                {committee.shortDescription}
            </p>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-shpe-blue font-bold group-hover:text-shpe-orange transition-colors flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </div>
        </Link>
    );
};

export default CommitteeCard;
