import React, { useState } from 'react';
import { saveRegistration } from '../../utils/storage';
import './RegistrationForm.css';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    club: '',
    event: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const clubs = [
    'Tech Innovators',
    'Art & Design',
    'Music & Performing Arts',
    'Sports & Fitness',
    'Literary Society',
    'Entrepreneurship Club'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveRegistration(formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      club: '',
      event: ''
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="registration-form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Club Registration</h2>
        <p className="form-subtitle">
          Join our amazing clubs and be part of an exciting community!
        </p>

        {submitted && (
          <div className="success-message">
            ✅ Registration successful! Check your email for confirmation.
          </div>
        )}

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="+1 234 567 8900"
              />
            </div>

            <div className="form-group">
              <label htmlFor="club">Select Club *</label>
              <select
                id="club"
                value={formData.club}
                onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                required
              >
                <option value="">Choose a club</option>
                {clubs.map(club => (
                  <option key={club} value={club}>{club}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="event">Event (Optional)</label>
            <input
              type="text"
              id="event"
              value={formData.event}
              onChange={(e) => setFormData({ ...formData, event: e.target.value })}
              placeholder="Which event are you registering for?"
            />
          </div>

          <button type="submit" className="submit-button">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

