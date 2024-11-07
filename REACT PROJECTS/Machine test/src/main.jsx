import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Measure initial loading time
const measureLoadingTime = () => {
  const [entry] = performance.getEntriesByName('first-contentful-paint');
  if (entry) {
    console.log(`Initial loading time: ${entry.startTime.toFixed(2)} ms`);
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  measureLoadingTime
);

// If you want to measure other performance metrics, you can use reportWebVitals
reportWebVitals();