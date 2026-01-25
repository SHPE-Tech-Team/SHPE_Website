import React from 'react';

interface PillarCardProps {
    title: string;
    description: string;
    Icon: React.ElementType;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, description, Icon }) => {
    return (
        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group">
            <div className="w-16 h-16 bg-shpe-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-shpe-orange/10 transition-colors">
                {Icon && (
                    <Icon className="w-8 h-8 text-shpe-blue group-hover:text-shpe-orange transition-colors" />
                )}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
};

export default PillarCard;
