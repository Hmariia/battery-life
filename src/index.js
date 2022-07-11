import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import './styles/battery-icon.css'
import './styles/navbar.css'
import './styles/sidebar.css'
import './styles/card.css'
import './styles/circle.css'
import './styles/capacity-bar.css'
import './styles/battery-details.css'
import './styles/loading-spinner.css'
import './styles/issues-bar.css'
import './styles/filter-bar.css'

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
