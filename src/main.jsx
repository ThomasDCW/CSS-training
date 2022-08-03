import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
