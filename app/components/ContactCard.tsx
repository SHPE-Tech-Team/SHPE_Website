import React from 'react';

interface Contact {
    name: string;
    role: string; // The schema says 'role' but UI was mapping it. Let's stick to standard names.
    pronouns: string;
    year: string;
    major: string;
    email: string;
    note: string;
}

interface ContactCardProps {
    contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
    return (
        <div className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shpe-blue to-shpe-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-sm font-bold text-shpe-orange tracking-wider uppercase mb-2">{contact.role}</h3>
                <h2 className="text-2xl font-extrabold text-gray-900">{contact.name}</h2>
                <p className="text-sm text-gray-400 font-medium mt-1">{contact.pronouns}</p>
            </div>

            {/* Details */}
            <div className="space-y-4 mb-8">
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-shpe-blue mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-0.5">Year</span>
                        <span className="text-gray-700 font-medium">{contact.year}</span>
                    </div>
                </div>
                <div className="flex items-start">
                    <svg className="w-5 h-5 text-shpe-blue mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-0.5">Major</span>
                        <span className="text-gray-700 font-medium">{contact.major}</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-100">
                <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center text-shpe-blue font-bold group-hover:text-shpe-orange transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{contact.email}</span>
                </a>
                <p className="text-xs text-gray-400 mt-4 italic flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {contact.note}
                </p>
            </div>
        </div>
    );
};

export default ContactCard;
