import React, { useState } from 'react';
import './Feedback.css';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event: '',
    rating: '',
    feedback: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store feedback in localStorage
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    feedbacks.push({
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      event: '',
      rating: '',
      feedback: ''
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-wrapper">
        <h2 className="feedback-title">Share Your Feedback</h2>
        <p className="feedback-subtitle">
          We value your opinion! Help us improve by sharing your experience.
        </p>

        {submitted && (
          <div className="success-message">
            ✅ Thank you for your feedback!
          </div>
        )}

        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="event">Event Name</label>
            <input
              type="text"
              id="event"
              value={formData.event}
              onChange={(e) => setFormData({ ...formData, event: e.target.value })}
              required
              placeholder="Which event did you attend?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <div className="rating-container">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    value={rating.toString()}
                    checked={formData.rating === rating.toString()}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    required
                  />
                  <span className="rating-star">⭐</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Your Feedback</label>
            <textarea
              id="feedback"
              value={formData.feedback}
              onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
              required
              placeholder="Tell us about your experience..."
              rows={6}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;

