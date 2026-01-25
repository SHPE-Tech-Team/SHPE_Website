import React from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBgColorClass?: string;
    iconColorClass?: string;
    link?: {
        text: string;
        href: string;
        target?: string;
    };
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    description,
    icon,
    iconBgColorClass = "bg-blue-100",
    iconColorClass = "text-shpe-blue",
    link
}) => {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
            <div className={`w-16 h-16 ${iconBgColorClass} rounded-full flex items-center justify-center mb-6 ${iconColorClass}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 mb-6">
                {description}
            </p>
            {link && (
                <a
                    href={link.href}
                    target={link.target}
                    rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex items-center text-shpe-orange font-semibold hover:text-orange-600 transition-colors"
                >
                    {link.text} <span aria-hidden="true" className="ml-2">→</span>
                </a>
            )}
        </div>
    );
};

export default InfoCard;
