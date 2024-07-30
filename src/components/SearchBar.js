import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/lemma/${searchTerm.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cerca un lemma..."
      />
      <button type="submit">Cerca</button>
    </form>
  );
}

export default SearchBar;