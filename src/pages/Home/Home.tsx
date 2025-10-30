import React from 'react';
import './Home.css';
import { jsPDF } from 'jspdf';

const Home: React.FC = () => {
  const clubs = [
    {
      id: 1,
      name: 'Tech Innovators',
      icon: '💻',
      description: 'Explore cutting-edge technologies, participate in hackathons, and build innovative projects.',
      color: 'var(--gradient-1)'
    },
    {
      id: 2,
      name: 'Art & Design',
      icon: '🎨',
      description: 'Express your creativity through various forms of art, design workshops, and exhibitions.',
      color: 'var(--gradient-2)'
    },
    {
      id: 3,
      name: 'Music & Performing Arts',
      icon: '🎵',
      description: 'Join our music band, participate in concerts, and showcase your performing talents.',
      color: 'var(--gradient-3)'
    },
    {
      id: 4,
      name: 'Sports & Fitness',
      icon: '⚽',
      description: 'Stay active with various sports activities, tournaments, and fitness challenges.',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      name: 'Literary Society',
      icon: '📚',
      description: 'Engage in book discussions, poetry sessions, and creative writing workshops.',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      name: 'Entrepreneurship Club',
      icon: '🚀',
      description: 'Learn business skills, pitch ideas, and network with successful entrepreneurs.',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Clubs of JSSATE</span>
          </h1>
          <p className="hero-subtitle">
            Your Gateway to College Clubs & Communities
          </p>
          <p className="hero-description">
            Discover, join, and engage with diverse clubs that match your interests. 
            From technology to arts, sports to entrepreneurship - find your community today!
          </p>
        </div>
        <div className="hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      <section className="clubs-section">
        <h2 className="section-title">Explore Our Clubs</h2>
        <div className="clubs-grid">
          {clubs.map((club, index) => (
            <div 
              key={club.id} 
              className="club-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="club-icon" style={{ background: club.color }}>
                {club.icon}
              </div>
              <h3 className="club-name">{club.name}</h3>
              <p className="club-description">{club.description}</p>
              <button className="club-btn">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose ClubHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Event Management</h3>
            <p>Stay updated with all club events, past and upcoming</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>E-Certificates</h3>
            <p>Receive digital certificates for your participation</p>
            <button className="club-btn" onClick={() => {
              // Dummy certificate data
              const doc = new jsPDF();
              doc.setFontSize(22);
              doc.text('Certificate of Participation', 20, 30);
              doc.setFontSize(16);
              doc.text('This is to certify that', 20, 50);
              doc.setFontSize(18);
              doc.text('John Doe', 20, 60);
              doc.setFontSize(16);
              doc.text('has actively participated in', 20, 75);
              doc.text('Tech Innovators Hackathon 2025', 20, 85);
              doc.setFontSize(14);
              doc.text('Date: 30-Oct-2025', 20, 105);
              doc.text('JSS Academy of Technical Education', 20, 120);
              doc.save('certificate.pdf');
            }}>
              Download E-Certificate
            </button>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Easy Registration</h3>
            <p>Join clubs and events with simple registration forms</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

