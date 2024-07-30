import React from 'react';
import { Link } from 'react-router-dom';
import LemmaData from '../LemmaData';

function ElencoFunzioni() {
  const functions = {};
  
  Object.entries(LemmaData).forEach(([lemma, data]) => {
    data.funzioni.forEach(funzione => {
      if (!functions[funzione.titolo]) {
        functions[funzione.titolo] = [];
      }
      functions[funzione.titolo].push(lemma);
    });
  });

  return (
    <div className="elenco-funzioni">
      <h2>Elenco Funzioni</h2>
      {Object.entries(functions).map(([funzione, lemmi]) => (
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

export default ElencoFunzioni;