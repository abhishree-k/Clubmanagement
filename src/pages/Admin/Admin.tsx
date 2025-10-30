import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getRegistrations, getEvents, Registration, Event } from '../../utils/storage';
import AdminLogin from './AdminLogin';
import './Admin.css';

const Admin: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState<'registrations' | 'events'>('registrations');

  useEffect(() => {
    if (isAuthenticated) {
      setRegistrations(getRegistrations());
      setEvents(getEvents());
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'registrations' ? 'active' : ''}`}
            onClick={() => setActiveTab('registrations')}
          >
            Registrations
          </button>
          <button
            className={`admin-tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
        </div>
      </div>

      {activeTab === 'registrations' && (
        <div className="admin-content">
          <h2 className="content-title">Registration Data ({registrations.length})</h2>
          {registrations.length === 0 ? (
            <div className="empty-state">
              <p>No registrations yet.</p>
            </div>
          ) : (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Club</th>
                    <th>Event</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((reg) => (
                    <tr key={reg.id}>
                      <td>{reg.name}</td>
                      <td>{reg.email}</td>
                      <td>{reg.phone}</td>
                      <td>{reg.club}</td>
                      <td>{reg.event || '-'}</td>
                      <td>{new Date(reg.submittedAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'events' && (
        <div className="admin-content">
          <h2 className="content-title">Events ({events.length})</h2>
          {events.length === 0 ? (
            <div className="empty-state">
              <p>No events created yet.</p>
            </div>
          ) : (
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-item-header">
                    <h3>{event.title}</h3>
                    <span className="event-date">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-meta">
                    <span>🕐 {event.time}</span>
                    <span>📍 {event.location}</span>
                    <span>👥 {event.club}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;


