import React, { useState } from 'react';
import './Guest.css'; // same as Alumni.css
import GuestLectureCard from './GuestLecturecard/GuestLectureCard.jsx';
import guestData from './GuestData';
import Brad from '../Brad/Brad';

function GuestLectures() {
  document.title = "Guest Lectures | RCA";

  // const [selectedYear, setSelectedYear] = useState("All");
  // const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // const years = [...new Set(guestData.map(item => item.year))].sort((a, b) => b - a);

  // const filteredGuests = guestData.filter((item) => {
  //   const matchesYear = selectedYear === "All" || item.year === parseInt(selectedYear);
  //   const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
  //   return matchesYear && matchesSearch;
  // });

  // const visibleGuests = filteredGuests.slice(0, visibleCount);
  const visibleGuests = guestData.slice(0, visibleCount);
  const handleShowMore = () => setVisibleCount(prev => prev + 6);

  return (
    <>
      <Brad head={"Guest Lectures"} />

      {/* <div className="filters-container">
        <div className="year-dropdown-container">
          <label htmlFor="year-filter">Filter by Year:</label>
          <select
            id="year-filter"
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setVisibleCount(6);
            }}
            className="year-dropdown"
          >
            <option value="All">All</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by guest name..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6);
            }}
            className="search-input"
          />
        </div>
      </div> */}

      <div className="guest-card-grid">
  {visibleGuests.map((item) => (
    <GuestLectureCard
      key={item.id}
      id={item.id}
      name={item.name}
      topic={item.topic}
      ImageUrl={item.ImageUrl}
      description={item.description}
    />
  ))}
</div>

      {/* {visibleGuests.length < filteredGuests.length && ( */}
      {visibleGuests.length < guestData.length && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )} 
    </>
  );
}

export default GuestLectures;
