import React from 'react';
import { Event, getGoogleCalendarUrl } from '../lib/eventUtils';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300 flex flex-col">
            <div className="bg-shpe-blue h-2"></div>
            <div className="p-4 sm:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2 sm:mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${event.badge === 'Academic' ? 'bg-green-100 text-green-800' :
                        event.badge === 'Professional' ? 'bg-purple-100 text-purple-800' :
                            event.badge === 'Social' ? 'bg-pink-100 text-pink-800' :
                                event.badge === 'Monthly' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-blue-50 text-shpe-blue'
                        }`}>
                        {event.badge || 'General'}
                    </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{event.title}</h3>

                <div className="text-gray-600 space-y-1 sm:space-y-2 mb-3 sm:mb-4 flex-1 text-sm sm:text-base">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.dayOfWeek ? `${event.dayOfWeek}, ${event.startTime} - ${event.endTime}` : `${new Date(event.date!).toLocaleDateString('en-US', { weekday: 'long' })}, ${new Date(event.date!).toLocaleDateString()}, ${event.startTime} - ${event.endTime}`}
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-shpe-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location || 'TBD'}
                    </div>
                </div>

                <div className="flex flex-row gap-2 sm:flex-col sm:space-y-3 sm:gap-0 mt-3 sm:mt-4">
                    {event.rsvpLink && (
                        <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer" className="flex-1 block w-full text-center bg-shpe-blue hover:bg-blue-700 text-white font-bold py-2 px-2 sm:px-4 rounded-full sm:rounded-2xl transition-colors text-sm sm:text-base shadow-sm">
                            RSVP
                        </a>
                    )}
                    <a
                        href={getGoogleCalendarUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 block w-full text-center bg-blue-50 hover:bg-blue-100 text-shpe-blue font-bold py-2 px-2 sm:px-4 rounded-full sm:rounded-2xl transition-colors text-sm sm:text-base border border-transparent"
                    >
                        + Calendar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
