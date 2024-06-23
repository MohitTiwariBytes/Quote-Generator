// src/QuoteGenerator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []); // Fetch initial quote on component mount

  return (
    <div className="quote-generator">
      <h2>Random Quote Generator</h2>
      <blockquote className="quote-text">
        "{quote}"
      </blockquote>
      <button className="generate-button" onClick={fetchQuote}>
        Generate Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
