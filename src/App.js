import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import LemmaDisplay from './components/LemmaDisplay';
import AlphabeticalList from './components/AlphabeticalList';
import FunctionsList from './components/FunctionsList';
import FunctionaryList from './components/FunctionaryList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLemma, setCurrentLemma] = useState(null);
  const [view, setView] = useState('home'); // new state to manage views

  const handleSearch = () => {
    // Dummy data for now. Replace with actual search logic.
    setCurrentLemma({
      word: searchTerm,
      functions: [
        {
          definition: 'Introduce un nuovo tema o sottotema del discorso (ORGANIZZARE IL TESTO > INDICARE DISCONTINUITÀ TEMATICA)',
          construction: 'Locuzione preposizionale seguita da un nome',
          examples: ['Per quanto riguarda la distribuzione...'],
          alternatives: ['dal punto di vista', 'in relazione a'],
        }
      ]
    });
  };

  const renderView = () => {
    switch(view) {
      case 'alphabetical':
        return <AlphabeticalList />;
      case 'functions':
        return <FunctionsList />;
      case 'functionary':
        return <FunctionaryList />;
      default:
        return (
          <>
            <SearchBar setSearchTerm={setSearchTerm} />
            {currentLemma && <LemmaDisplay lemma={currentLemma} />}
          </>
        );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dizionario Accademico Italiano</h1>
        <nav>
          <button onClick={() => setView('alphabetical')}>[A] Lemmario Alfabetico</button>
          <button onClick={() => setView('functions')}>[F] Elenco Funzioni</button>
          <button onClick={() => setView('functionary')}>[L] Lemmario per Funzione</button>
          <button onClick={() => setView('home')}>Home</button>
        </nav>
      </header>
      <main>
        {renderView()}
      </main>
    </div>
  );
}

export default App;
