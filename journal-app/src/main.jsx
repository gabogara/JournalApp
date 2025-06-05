import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


import { JournalApp } from './JournalApp.jsx';
import './style.css';
import { store } from './store/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
          <JournalApp/>
      </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
