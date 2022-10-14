import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import * as dotenv from 'dotenv';
// dotenv.config()

console.log("environment: " + process.env.REACT_APP_HOST_URL);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
