import React from 'react';
import { Link } from 'react-router-dom';
import './GuestCard.css';

function GuestLectureCard({ id, name, topic, ImageUrl, description }) {
  return (
    <div className="guest-lecture-card">
      <img src={ImageUrl} alt={name} className="guest-lecture-img" />

      <div className="guest-lecture-content">
        <h3 className="guest-lecture-title">{name}</h3>
        <p className="guest-lecture-subtitle">{topic}</p>
        <p className="guest-lecture-description">{description.slice(0, 150)}...</p>

        <Link to={`/guest-lectures/${id}`} className="guest-lecture-button">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default GuestLectureCard;
