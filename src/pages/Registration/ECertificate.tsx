import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getRegistrations } from '../../utils/storage';
import { format } from 'date-fns';
import './ECertificate.css';

const ECertificate: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [searchEmail, setSearchEmail] = useState('');
  const [certificate, setCertificate] = useState<any>(null);

  const handleSearch = () => {
    const registrations = getRegistrations();
    const found = registrations.find(
      reg => reg.email.toLowerCase() === searchEmail.toLowerCase()
    );
    setCertificate(found || null);
  };

  if (isAuthenticated) {
    return (
      <div className="certificate-admin-container">
        <h2 className="admin-title">Certificate Management</h2>
        <p className="admin-subtitle">Upload certificates for participants</p>
        <div className="upload-section">
          <div className="upload-area">
            <div className="upload-icon">📄</div>
            <p>Drag and drop certificate files here</p>
            <p className="upload-hint">or click to browse</p>
            <input type="file" className="file-input" multiple accept=".pdf,.png,.jpg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-container">
      <div className="certificate-wrapper">
        <h2 className="certificate-title">Download Your E-Certificate</h2>
        <p className="certificate-subtitle">
          Enter your registered email to download your certificate
        </p>

        <div className="search-section">
          <input
            type="email"
            placeholder="Enter your email address"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            className="email-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {certificate && (
          <div className="certificate-display">
            <div className="certificate-paper">
              <div className="certificate-header">
                <div className="certificate-logo">🎓</div>
                <h1 className="certificate-main-title">Certificate of Participation</h1>
                <div className="certificate-divider"></div>
              </div>
              <div className="certificate-body">
                <p className="certificate-text">
                  This is to certify that
                </p>
                <p className="certificate-name">{certificate.name}</p>
                <p className="certificate-text">
                  has successfully participated in
                </p>
                <p className="certificate-event">
                  {certificate.event || certificate.club}
                </p>
                <p className="certificate-date">
                  {format(new Date(certificate.submittedAt), 'MMMM dd, yyyy')}
                </p>
              </div>
              <div className="certificate-footer">
                <div className="certificate-signature">
                  <div className="signature-line"></div>
                  <p>Authorized Signature</p>
                </div>
              </div>
            </div>
            <button className="download-button">Download Certificate</button>
          </div>
        )}

        {searchEmail && !certificate && (
          <div className="no-certificate">
            <p>No certificate found for this email address.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ECertificate;

