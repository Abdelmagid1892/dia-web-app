import React, { useState } from 'react';

function LemmaDisplay({ lemma }) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (functionIndex, section) => {
    setExpandedSections(prev => ({
      ...prev,
      [`${functionIndex}-${section}`]: !prev[`${functionIndex}-${section}`]
    }));
  };

  return (
    <div className="lemma-display">
      <h2>{lemma.word}</h2>
      {lemma.functions.map((func, index) => (
        <div key={index} className="function-section">
          <h3>Funzione {index + 1}</h3>
          <p><strong>Definizione:</strong> <a href="#">{func.definition}</a></p>
          <p><strong>Costruzione:</strong> {func.construction}</p>
          
          <h4 onClick={() => toggleSection(index, 'examples')} className="expandable">
            Esempi {expandedSections[`${index}-examples`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`${index}-examples`] && (
            <ul>
              {func.examples.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
          )}
          
          <h4 onClick={() => toggleSection(index, 'alternatives')} className="expandable">
            Espressioni alternative {expandedSections[`${index}-alternatives`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`${index}-alternatives`] && (
            <ul>
              {func.alternatives.map((alt, i) => (
                <li key={i}><a href="#">{alt}</a></li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default LemmaDisplay;
