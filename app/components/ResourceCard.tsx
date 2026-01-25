import React from 'react';

interface ResourceCardProps {
    name: string;
    description: string;
    url: string;
    icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ name, description, url, icon }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
        >
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-shpe-blue transition-colors mb-3">
                {name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
            <div className="mt-6 flex items-center text-shpe-orange font-semibold text-sm group-hover:translate-x-2 transition-transform">
                Visit Website
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </a>
    );
};

export default ResourceCard;
