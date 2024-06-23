// src/App.js
import React from 'react';
import './App.css';
import QuoteGenerator from './QuoteGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quote Generator</h1>
      </header>
      <QuoteGenerator />
    </div>
  );
}

export default App;
