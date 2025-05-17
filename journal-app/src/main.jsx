import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import { JournalApp } from './JournalApp.jsx';
import './style.css';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <JournalApp/>
    </BrowserRouter>
  </StrictMode>,
)
