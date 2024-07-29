import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import LemmaDisplay from './components/LemmaDisplay';

const dictionary = {
  'vedere': {
    word: 'vedere',
    functions: [
      {
        definition: 'Percepire con gli occhi, osservare.',
        construction: 'Verbo transitivo',
        examples: [
          'Ho visto un bel film ieri sera.',
          'Lei vede un futuro luminoso per sé stessa.'
        ],
        alternatives: ['osservare', 'guardare'],
        sequences: 'La funzione di "vedere" in una frase è solitamente legata alla percezione visiva di qualcosa o qualcuno.',
        morphosyntactic: 'Il verbo "vedere" è usato principalmente alla terza persona singolare e plurale.',
        usageSuggestions: 'Può essere usato per descrivere azioni sia presenti che passate.',
        notes: 'Discussione sull\'uso di "vedere" in contesti formali e informali.'
      }
    ]
  },
  'osservare': {
    word: 'osservare',
    functions: [
      {
        definition: 'Guardare con attenzione.',
        construction: 'Verbo transitivo',
        examples: [
          'Osserva attentamente il comportamento degli animali.',
          'Abbiamo osservato le stelle per tutta la notte.'
        ],
        alternatives: ['guardare', 'vedere'],
        sequences: 'La funzione di "osservare" è spesso legata a un\'azione più attenta e prolungata rispetto a "vedere".',
        morphosyntactic: 'Il verbo "osservare" è usato principalmente alla terza persona singolare e plurale.',
        usageSuggestions: 'Usato spesso in contesti scientifici e accademici.',
        notes: 'Discussione sull\'uso di "osservare" nelle descrizioni scientifiche.'
      }
    ]
  },
  'per quanto riguarda': {
    word: 'per quanto riguarda',
    functions: [
      {
        definition: 'Introduce un nuovo tema o sottotema del discorso.',
        construction: 'Locuzione preposizionale seguita da un nome',
        examples: [
          'Per quanto riguarda la distribuzione, si osserva una tendenza alla centralizzazione.',
          'Per quanto riguarda l\'analisi dei dati, abbiamo utilizzato metodi statistici avanzati.'
        ],
        alternatives: ['dal punto di vista', 'in relazione a'],
        sequences: 'La locuzione può essere preceduta dall’annuncio di una serie di temi.',
        morphosyntactic: 'Il verbo all’interno della locuzione è generalmente fisso alla terza persona dell’indicativo presente (riguarda), ma talvolta può essere flesso in altri tempi.',
        usageSuggestions: 'Utilizzata per introdurre nuovi temi o sottotemi.',
        notes: 'Discussioni sull\'uso della locuzione in contesti formali e accademici.'
      }
    ]
  },
  'dal punto di vista': {
    word: 'dal punto di vista',
    functions: [
      {
        definition: 'Considerando, dal punto di osservazione di.',
        construction: 'Locuzione preposizionale seguita da un nome',
        examples: [
          'Dal punto di vista economico, la situazione è molto complessa.',
          'Dal punto di vista scientifico, questa teoria ha molte lacune.'
        ],
        alternatives: ['in relazione a', 'per quanto riguarda'],
        sequences: 'La locuzione può essere usata per introdurre il punto di vista da cui si considera un argomento.',
        morphosyntactic: 'Usata principalmente all\'inizio della frase.',
        usageSuggestions: 'Comune in contesti formali e accademici.',
        notes: 'Discussioni sull\'uso in contesti di analisi e valutazione.'
      }
    ]
  },
  'in relazione a': {
    word: 'in relazione a',
    functions: [
      {
        definition: 'Riguardo a, concernente.',
        construction: 'Locuzione preposizionale seguita da un nome',
        examples: [
          'In relazione a quanto discusso, abbiamo preso una decisione.',
          'In relazione a questo progetto, ci sono ancora molte incognite.'
        ],
        alternatives: ['per quanto concerne', 'riguardo a'],
        sequences: 'Usata per collegare il discorso a un argomento trattato in precedenza.',
        morphosyntactic: 'Spesso usata all\'inizio della frase.',
        usageSuggestions: 'Comune in contesti formali e accademici.',
        notes: 'Discussioni sull\'uso in documenti ufficiali e rapporti.'
      }
    ]
  },
  'in materia a': {
    word: 'in materia a',
    functions: [
      {
        definition: 'Riguardo a, in relazione a.',
        construction: 'Locuzione preposizionale seguita da un nome',
        examples: [
          'In materia a sicurezza, sono state introdotte nuove norme.',
          'In materia a economia, gli esperti sono divisi.'
        ],
        alternatives: ['per quanto concerne', 'in relazione a'],
        sequences: 'Spesso usata per introdurre discorsi relativi a campi specifici.',
        morphosyntactic: 'Usata principalmente all\'inizio della frase.',
        usageSuggestions: 'Utilizzata in contesti formali per introdurre argomenti specifici.',
        notes: 'Discussioni sull\'uso in ambito legale e amministrativo.'
      }
    ]
  },
  'nell\'ottica di': {
    word: 'nell\'ottica di',
    functions: [
      {
        definition: 'Dal punto di vista di, considerando.',
        construction: 'Locuzione preposizionale seguita da un verbo all\'infinito',
        examples: [
          'Nell\'ottica di migliorare i servizi, abbiamo assunto nuovi dipendenti.',
          'Nell\'ottica di ridurre i costi, stiamo rivedendo i nostri contratti.'
        ],
        alternatives: ['considerando', 'dal punto di vista di'],
        sequences: 'Usata per esprimere il punto di vista da cui si considera un\'azione.',
        morphosyntactic: 'La locuzione è generalmente seguita da un verbo all\'infinito.',
        usageSuggestions: 'Comune in contesti aziendali e strategici.',
        notes: 'Discussioni sull\'uso in piani strategici e relazioni aziendali.'
      }
    ]
  }
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLemma, setCurrentLemma] = useState(null);

  const handleSearch = (term) => {
    const lemma = dictionary[term.toLowerCase()];
    setCurrentLemma(lemma);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dizionario Accademico Italiano</h1>
        <SearchBar setSearchTerm={handleSearch} />
      </header>
      <main>
        {currentLemma && <LemmaDisplay lemma={currentLemma} />}
      </main>
    </div>
  );
}

export default App;
