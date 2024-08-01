import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LemmaData from '../LemmaData';
import './LemmaDisplay.css';

function LemmaDisplay() {
  const { lemma } = useParams();
  const [expandedSections, setExpandedSections] = useState({});

  const lemmaData = LemmaData[lemma];

  if (!lemmaData) {
    return <div>Lemma non trovato</div>;
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="lemma-display">
      <h2>{lemmaData.lemma}</h2>
      {lemmaData.funzioni.map((funzione, index) => (
        <div key={index} className="funzione-section">
          <h3>{funzione.macroFunzione} > {funzione.funzione}</h3>
          <p><strong>Definizione funzione:</strong> {funzione.definizioneFunzione}</p>
          <p><strong>Costruzione:</strong> {funzione.costruzione}</p>
          
          <h4 onClick={() => toggleSection(`esempi-${index}`)} className="expandable">
            Esempi {expandedSections[`esempi-${index}`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`esempi-${index}`] && (
            <ul>
              {funzione.esempi.map((esempio, i) => (
                <li key={i}>{esempio}</li>
              ))}
            </ul>
          )}
          
          <h4 onClick={() => toggleSection(`alternative-${index}`)} className="expandable">
            Espressioni alternative {expandedSections[`alternative-${index}`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`alternative-${index}`] && (
            <ul>
              {funzione.espressioniAlternative.map((alt, i) => (
                <li key={i}>
                  <Link to={`/lemma/${encodeURIComponent(alt)}`}>{alt}</Link>
                </li>
              ))}
            </ul>
          )}
          
          <h4 onClick={() => toggleSection(`sequenze-${index}`)} className="expandable">
            Sequenze testuali {expandedSections[`sequenze-${index}`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`sequenze-${index}`] && (
            <ul>
              {funzione.sequenzeTestuali.map((seq, i) => (
                <li key={i}>{seq}</li>
              ))}
            </ul>
          )}
          
          <h4 onClick={() => toggleSection(`morfo-${index}`)} className="expandable">
            Particolarità morfosintattiche {expandedSections[`morfo-${index}`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`morfo-${index}`] && (
            <p>{funzione.particolaritaMorfosintattiche}</p>
          )}
          
          <h4 onClick={() => toggleSection(`uso-${index}`)} className="expandable">
            Suggerimenti d'uso {expandedSections[`uso-${index}`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`uso-${index}`] && (
            <p>{funzione.suggerimentiUso}</p>
          )}
        </div>
      ))}
      
      <h4 onClick={() => toggleSection('note')} className="expandable">
        Note e bibliografia {expandedSections['note'] ? '▼' : '▶'}
      </h4>
      {expandedSections['note'] && (
        <p>{lemmaData.noteBibliografia}</p>
      )}
    </div>
  );
}

export default LemmaDisplay;