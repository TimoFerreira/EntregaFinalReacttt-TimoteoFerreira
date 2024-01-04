import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './Context';
import "./firebase/config"

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router> 
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
