import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import LemmaDisplay from './components/LemmaDisplay';
import LemmarioAlfabetico from './components/LemmarioAlfabetico';
import ElencoFunzioni from './components/ElencoFunzioni';
import LemmarioPerFunzione from './components/LemmarioPerFunzione';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Dizionario Italiano Accademico</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/lemmario-alfabetico">[A] Lemmario Alfabetico</Link>
            <Link to="/elenco-funzioni">[F] Elenco Funzioni</Link>
            <Link to="/lemmario-per-funzione">[L] Lemmario per Funzione</Link>
          </nav>
          <SearchBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LemmaDisplay />} />
            <Route path="/lemma/:lemma" element={<LemmaDisplay />} />
            <Route path="/lemmario-alfabetico" element={<LemmarioAlfabetico />} />
            <Route path="/elenco-funzioni" element={<ElencoFunzioni />} />
            <Route path="/lemmario-per-funzione" element={<LemmarioPerFunzione />} />
            <Route path="/funzione/:funzione" element={<LemmarioPerFunzione />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;