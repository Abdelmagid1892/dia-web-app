import React from 'react';
import { Link } from 'react-router-dom';
import LemmaData from '../LemmaData';

function LemmarioAlfabetico() {
  const sortedLemmas = Object.keys(LemmaData).sort();

  return (
    <div className="lemmario-alfabetico">
      <h2>Lemmario Alfabetico</h2>
      <ul>
        {sortedLemmas.map(lemma => (
          <li key={lemma}>
            <Link to={`/lemma/${lemma}`}>{lemma}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LemmarioAlfabetico;