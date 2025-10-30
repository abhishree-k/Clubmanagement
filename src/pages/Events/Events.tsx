import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import EventCalendar from './EventCalendar';
import PastEvents from './PastEvents';
import Feedback from './Feedback';
import './Events.css';

const Events: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/events') {
      return location.pathname === '/events';
    }
    return location.pathname.includes(path);
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1 className="events-title">Events</h1>
        <div className="events-tabs">
          <Link to="/events" className={`events-tab ${location.pathname === '/events' ? 'active' : ''}`}>
            Calendar
          </Link>
          <Link to="/events/past" className={`events-tab ${isActive('/events/past') ? 'active' : ''}`}>
            Past Events
          </Link>
          <Link to="/events/feedback" className={`events-tab ${isActive('/events/feedback') ? 'active' : ''}`}>
            Feedback
          </Link>
        </div>
      </div>

      <Routes>
        <Route index element={<EventCalendar />} />
        <Route path="past" element={<PastEvents />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default Events;

