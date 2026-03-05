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
    horizontal?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    description,
    icon,
    iconBgColorClass = "bg-blue-100",
    iconColorClass = "text-shpe-blue",
    link,
    horizontal = false
}) => {
    if (horizontal) {
        return (
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-row items-center gap-5 h-full">
                <div className={`w-14 h-14 shrink-0 ${iconBgColorClass} rounded-full flex items-center justify-center ${iconColorClass}`}>
                    {icon}
                </div>
                <div className="flex flex-col text-left flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{description}</p>
                    {link && (
                        <a
                            href={link.href}
                            target={link.target}
                            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center text-shpe-orange font-semibold hover:text-orange-600 transition-colors text-sm"
                        >
                            {link.text} <span aria-hidden="true" className="ml-2">→</span>
                        </a>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
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
