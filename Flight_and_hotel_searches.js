<!-- pages/search.js -->
import React, { useState } from 'react';
export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = () => {
        // Implement search logic (not shown here)
    };
    return (
        <div>
            <h2>Search for Flights and Hotels</h2>
            <input
                type="text"
                placeholder="Search for flights or hotels"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
