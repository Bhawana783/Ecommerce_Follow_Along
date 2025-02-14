import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // You can keep this as it is, or modify it if required for global styles
import App from './App';  // App component which contains routing
import reportWebVitals from './reportWebVitals';

// Create the root of the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the 'root' element
root.render(
  <React.StrictMode>
    <App /> {/* The App component with routing */}
  </React.StrictMode>
);

// If you want to measure performance in your app, you can pass a function here
reportWebVitals(); // This will allow you to track performance metrics (if you choose to use it)
