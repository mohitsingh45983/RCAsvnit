import React from 'react';
import { useParams } from 'react-router-dom';
import guestData from './GuestData';
import './Guest.css';
import Brad from '../Brad/Brad';
import { BiLogoLinkedin } from 'react-icons/bi';

function GuestDetail() {
  const { id } = useParams();
  const guest = guestData.find(g => g.id === id);

  if (!guest) {
    return <p style={{ textAlign: 'center' }}>Guest not found.</p>;
  }

  return (
    <>
      <Brad head={guest.name} />
      <div className="guest-detail-container">
        <img src={guest.ImageUrl} alt={guest.name} className="guest-img" />
        <h2>{guest.name}</h2>
        <h4>{guest.topic}</h4>
        <p><strong>Year:</strong> {guest.year}</p>
        <p>{guest.description}</p>
        <div className="social-links">
          {guest.linkedinLink && (
            <a href={guest.linkedinLink} target="_blank" rel="noreferrer"><BiLogoLinkedin /></a>
          )}
        </div>
      </div>
    </>
  );
}

export default GuestDetail;
