import React from 'react';
import { Link } from 'react-router-dom';
import LemmaData from '../LemmaData';

function LemmarioPerFunzione() {
  const lemmarioPerFunzione = {};
  
  Object.entries(LemmaData).forEach(([lemma, data]) => {
    data.funzioni.forEach(funzione => {
      if (!lemmarioPerFunzione[funzione.titolo]) {
        lemmarioPerFunzione[funzione.titolo] = [];
      }
      lemmarioPerFunzione[funzione.titolo].push(lemma);
    });
  });

  return (
    <div className="lemmario-per-funzione">
      <h2>Lemmario per Funzione</h2>
      {Object.entries(lemmarioPerFunzione).map(([funzione, lemmi]) => (
        <div key={funzione}>
          <h3>{funzione}</h3>
          <ul>
            {lemmi.map(lemma => (
              <li key={lemma}>
                <Link to={`/lemma/${lemma}`}>{lemma}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LemmarioPerFunzione;