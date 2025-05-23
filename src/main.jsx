import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
const App  = lazy(()=>import( './App.jsx'))
import './index.css';
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>
)
