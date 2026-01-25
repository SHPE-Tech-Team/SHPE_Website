import React from 'react';

interface SectionHeaderProps {
    title: string;
    description?: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = "" }) => {
    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-shpe-blue mb-4">{title}</h2>
            <div className="w-24 h-1 bg-shpe-orange mx-auto rounded-full"></div>
            {description && (
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
