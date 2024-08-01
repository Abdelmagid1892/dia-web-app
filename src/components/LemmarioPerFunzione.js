import React from 'react';
import { Link, useParams } from 'react-router-dom';
import LemmaData from '../LemmaData';

function LemmarioPerFunzione() {
  const { funzione } = useParams();
  const lemmarioPerFunzione = {};
  
  const orderedMacroFunctions = ["ORGANIZZARE IL TESTO", "ARGOMENTARE"];
  const orderedFunctions = {
    "ORGANIZZARE IL TESTO": [
      "INDICARE DISCONTINUITÀ TEMATICA",
      "INDICARE PROSPETTIVA",
      "INDICARE CONNESSIONE",
      "SPECIFICARE AMBITO",
      "INDICARE RIFERIMENTO"
    ],
    "ARGOMENTARE": [
      "INTRODURRE UN'OSSERVAZIONE",
      "RICHIAMARE L'ATTENZIONE",
      "INTRODURRE UN'OSSERVAZIONE IMPORTANTE"
    ]
  };

  Object.entries(LemmaData).forEach(([lemma, data]) => {
    data.funzioni.forEach(f => {
      const key = `${f.macroFunzione} > ${f.funzione}`;
      if (!lemmarioPerFunzione[key]) {
        lemmarioPerFunzione[key] = [];
      }
      lemmarioPerFunzione[key].push(lemma);
    });
  });

  return (
    <div className="lemmario-per-funzione">
      <h2>Lemmario Ridotto per Funzione Comunicativa</h2>
      {orderedMacroFunctions.map(macroFunzione => (
        <React.Fragment key={macroFunzione}>
          {orderedFunctions[macroFunzione].map(funzione => {
            const key = `${macroFunzione} > ${funzione}`;
            const lemmi = lemmarioPerFunzione[key] || [];
            return (
              <div key={key}>
                <h3>{key}</h3>
                {lemmi.length > 0 ? (
                  <ul>
                    {lemmi.map(lemma => (
                      <li key={lemma}>
                        <Link to={`/lemma/${encodeURIComponent(lemma)}`}>{lemma}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Nessun lemma associato a questa funzione.</p>
                )}
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default LemmarioPerFunzione;