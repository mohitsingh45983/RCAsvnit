import React, { useState } from 'react';
import './Alumni.css';
import Card from '../Team/Card/Card';
import data from './Alumni';
import Brad from '../Brad/Brad';

function Advisors() {
    document.title = "Our Alumni | RCA";

    const [selectedYear, setSelectedYear] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(6); // How many to show initially

    const years = [...new Set(data.map(item => item.year))].sort((a, b) => b - a);

    const filteredAlumni = data.filter((item) => {
        const matchesYear = selectedYear === "All" || item.year === parseInt(selectedYear);
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesYear && matchesSearch;
    });

    const visibleAlumni = filteredAlumni.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <>
            <Brad head={"Our Alumni"} />

            {/* Filters */}
            <div className="filters-container">
                <div className="year-dropdown-container">
                    <label htmlFor="year-filter">Filter by Year:</label>
                    <select
                        id="year-filter"
                        value={selectedYear}
                        onChange={(e) => {
                            setSelectedYear(e.target.value);
                            setVisibleCount(6); // reset count on filter
                        }}
                        className="year-dropdown"
                    >
                        <option value="All">All</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setVisibleCount(6); // reset count on search
                        }}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Alumni Cards */}
            <div className="Alumni_container">
                {visibleAlumni.length > 0 ? (
                    visibleAlumni.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            position={item.position}
                            ImageUrl={item.ImageUrl}
                            instagramLink={item.instagramLink}
                            linkedinLink={item.linkedinLink}
                            email={item.email} 
                        />
                    ))
                ) : (
                    <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "18px" }}>
                        No alumni found.
                    </p>
                )}
            </div>

            {/* Show More Button */}
            {visibleAlumni.length < filteredAlumni.length && (
                <div className="show-more-container">
                    <button className="show-more-btn" onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </>
    );
}

export default Advisors;
