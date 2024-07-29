import React, { useState } from 'react';

function SearchBar({ setSearchTerm }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cerca un lemma..."
      />
      <button type="submit">Cerca</button>
    </form>
  );
}

export default SearchBar;
