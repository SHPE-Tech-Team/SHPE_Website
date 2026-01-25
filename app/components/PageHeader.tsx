import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    bgColorClass?: string;
    textColorClass?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    bgColorClass = "bg-gray-50",
    textColorClass = "text-shpe-blue"
}) => {
    return (
        <div className={`${bgColorClass} py-16 sm:py-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className={`text-4xl font-extrabold ${textColorClass} sm:text-5xl sm:tracking-tight lg:text-6xl`}>
                    {title}
                </h1>
                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default PageHeader;
