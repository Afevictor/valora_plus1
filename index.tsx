import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Check if the root element exists
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create a root for rendering
const root = ReactDOM.createRoot(rootElement);

// Render the App component wrapped in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
