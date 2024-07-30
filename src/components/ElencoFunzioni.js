import React from 'react';
import { Link } from 'react-router-dom';
import LemmaData from '../LemmaData';

function ElencoFunzioni() {
  const functions = {};
  
  Object.values(LemmaData).forEach(lemma => {
    lemma.funzioni.forEach(funzione => {
      if (!functions[funzione.macroFunzione]) {
        functions[funzione.macroFunzione] = new Set();
      }
      functions[funzione.macroFunzione].add(funzione.funzione);
    });
  });

  return (
    <div className="elenco-funzioni">
      <h2>Elenco Funzioni Comunicative</h2>
      {Object.entries(functions).map(([macroFunzione, funzioni]) => (
        <div key={macroFunzione}>
          <h3>{macroFunzione}</h3>
          <ul>
            {Array.from(funzioni).map(funzione => (
              <li key={funzione}>
                <Link to={`/funzione/${encodeURIComponent(funzione)}`}>{funzione}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ElencoFunzioni;