import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths } from 'date-fns';
import { useAuth } from '../../context/AuthContext';
import { getEvents, saveEvent, updateEvent, deleteEvent, Event } from '../../utils/storage';
import './EventCalendar.css';

const EventCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    club: ''
  });
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(new Date(event.date), date));
  };

  const openModal = (date?: Date) => {
    if (date) setSelectedDate(date);
    setFormData({
      title: '',
      description: '',
      date: date ? format(date, 'yyyy-MM-dd') : '',
      time: '',
      location: '',
      club: ''
    });
    setEditingEvent(null);
    setShowModal(true);
  };

  const openEditModal = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      club: event.club
    });
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEvent) {
      updateEvent(editingEvent.id, formData);
    } else {
      const newEvent: Event = {
        ...formData,
        id: Date.now().toString()
      };
      saveEvent(newEvent);
    }
    setEvents(getEvents());
    setShowModal(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id);
      setEvents(getEvents());
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      club: ''
    });
    setEditingEvent(null);
    setSelectedDate(null);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className="nav-btn">
          ←
        </button>
        <h2 className="calendar-month">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="nav-btn">
          →
        </button>
        {isAuthenticated && (
          <button onClick={() => openModal()} className="add-event-btn">
            + Add Event
          </button>
        )}
      </div>

      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
        
        {Array.from({ length: monthStart.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty"></div>
        ))}
        
        {days.map(day => {
          const dayEvents = getEventsForDate(day);
          return (
            <div
              key={day.toISOString()}
              className={`calendar-day ${dayEvents.length > 0 ? 'has-events' : ''}`}
              onClick={() => {
                if (isAuthenticated && dayEvents.length > 0) {
                  openEditModal(dayEvents[0]);
                } else if (!isAuthenticated && dayEvents.length > 0) {
                  openModal(day);
                } else if (isAuthenticated) {
                  openModal(day);
                }
              }}
            >
              <div className="day-number">{format(day, 'd')}</div>
              {dayEvents.length > 0 && (
                <div className="event-indicator">
                  {dayEvents.slice(0, 3).map(event => (
                    <div key={event.id} className="event-dot" style={{ background: `var(--primary-color)` }}>
                      {event.title.charAt(0)}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="event-count">+{dayEvents.length - 3}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDate && !isAuthenticated && (
        <div className="selected-date-events">
          <h3>Events on {format(selectedDate, 'MMMM d, yyyy')}</h3>
          {getEventsForDate(selectedDate).map(event => (
            <div key={event.id} className="event-card">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <div className="event-meta">
                <span>🕐 {event.time}</span>
                <span>📍 {event.location}</span>
                <span>👥 {event.club}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && isAuthenticated && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingEvent ? 'Edit Event' : 'Add Event'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Event Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Club Name"
                value={formData.club}
                onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                required
              />
              <div className="modal-actions">
                <button type="submit">{editingEvent ? 'Update' : 'Create'}</button>
                {editingEvent && (
                  <button type="button" onClick={() => handleDelete(editingEvent.id)} className="delete-btn">
                    Delete
                  </button>
                )}
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;

