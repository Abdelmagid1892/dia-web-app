import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li><Link to="/lemmario-alfabetico">Lemmario Alfabetico</Link></li>
          <li><Link to="/elenco-funzioni">Elenco Funzioni</Link></li>
          <li><Link to="/lemmario-per-funzione">Lemmario per Funzione</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
