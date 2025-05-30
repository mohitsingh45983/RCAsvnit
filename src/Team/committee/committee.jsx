import React, { useState } from 'react';
import './committee.css';
import Card from '../Card/Card';
import committeeData from './committee';

function CommitteeDisplay() {
  const committeeNames = Object.keys(committeeData);
  const [selectedCommittee, setSelectedCommittee] = useState(committeeNames[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const members = committeeData[selectedCommittee] || [];

  // Apply search + position filter
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition =
      positionFilter === 'All' || member.position.toLowerCase() === positionFilter.toLowerCase();
    return matchesSearch && matchesPosition;
  });

  const visibleMembers = filteredMembers.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount(prev => prev + 6);

  return (
    <>
      <div className="container">
        <hr style={{ color: 'red' }} />
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 text-center">
            <h4>Committee</h4>
          </div>
        </div>
      </div>

      {/* Filters: Committee, Position, Search */}
      <div className="filters-container">
        {/* Committee Dropdown */}
        <div className="year-dropdown-container">
          <label htmlFor="committee-select">Select Committee:</label>
          <select
            id="committee-select"
            value={selectedCommittee}
            onChange={(e) => {
              setSelectedCommittee(e.target.value);
              setVisibleCount(6);
              setSearchQuery('');
              setPositionFilter('All');
            }}
            className="year-dropdown"
          >
            {committeeNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Position Dropdown */}
        <div className="year-dropdown-container">
          <label htmlFor="position-filter">Select Role:</label>
          <select
            id="position-filter"
            value={positionFilter}
            onChange={(e) => {
              setPositionFilter(e.target.value);
              setVisibleCount(6);
            }}
            className="year-dropdown"
          >
            <option value="All">All</option>
            <option value="Head">Head</option>
            <option value="Co-head">Co-head</option>
            <option value="Coordinator">Coordinator</option>
          </select>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6);
            }}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="Alumni_container">
        {visibleMembers.length > 0 ? (
          visibleMembers.map((member, i) => (
            <Card
              key={i}
              name={member.name}
              position={member.position}
              ImageUrl={member.ImageUrl}
              email={member.email}
              instagramLink={member.instagramLink}
              linkedinLink={member.linkedinLink}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No members found.</p>
        )}
      </div>

      {/* Show More */}
      {visibleMembers.length < filteredMembers.length && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </>
  );
}

export default CommitteeDisplay;
