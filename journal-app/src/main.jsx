import React from "react";
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';

import './style.css';
import { JournalApp } from './JournalApp.jsx';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <JournalApp/>
    </BrowserRouter>
  </StrictMode>,
)
