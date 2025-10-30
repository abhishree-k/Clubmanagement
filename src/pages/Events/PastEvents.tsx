import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { getEvents, Event } from '../../utils/storage';
import './PastEvents.css';

const PastEvents: React.FC = () => {
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const allEvents = getEvents();
    const today = new Date();
    const past = allEvents.filter(event => new Date(event.date) < today);
    setPastEvents(past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  }, []);

  return (
    <div className="past-events-container">
      <h2 className="past-events-title">Past Events Gallery</h2>
      
      {pastEvents.length === 0 ? (
        <div className="no-events">
          <p>No past events to display yet.</p>
        </div>
      ) : (
        <div className="events-gallery">
          {pastEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="event-image-container">
                <div className="event-image">
                  {event.club.charAt(0)}
                </div>
              </div>
              <div className="event-content">
                <div className="event-date-badge">
                  {format(new Date(event.date), 'MMM dd, yyyy')}
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-details">
                  <div className="detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span>{event.club}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastEvents;

