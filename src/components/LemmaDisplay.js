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
          <p><strong>Definizione:</strong> {func.definition}</p>
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
                <li key={i}>{alt}</li>
              ))}
            </ul>
          )}

          <h4 onClick={() => toggleSection(index, 'sequences')} className="expandable">
            Sequenze testuali in cui ricorre {expandedSections[`${index}-sequences`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`${index}-sequences`] && (
            <p>{func.sequences}</p>
          )}

          <h4 onClick={() => toggleSection(index, 'morphosyntactic')} className="expandable">
            Particolarità morfosintattiche {expandedSections[`${index}-morphosyntactic`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`${index}-morphosyntactic`] && (
            <p>{func.morphosyntactic}</p>
          )}

          <h4 onClick={() => toggleSection(index, 'usageSuggestions')} className="expandable">
            Suggerimenti d’uso {expandedSections[`${index}-usageSuggestions`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`${index}-usageSuggestions`] && (
            <p>{func.usageSuggestions}</p>
          )}

          <h4 onClick={() => toggleSection(index, 'notes')} className="expandable">
            Note e bibliografia {expandedSections[`${index}-notes`] ? '▼' : '▶'}
          </h4>
          {expandedSections[`${index}-notes`] && (
            <p>{func.notes}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default LemmaDisplay;
