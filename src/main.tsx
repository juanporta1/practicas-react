import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import NavBar from './routes/background-color/components/nav-bar/nav-bar';
import "./index.css"
import ColorProvider from './contexts/cambiarColorContext';
import ColorChanger from './routes/background-color/components/color-changer/color-changer';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom"
import BackgroundColor from './routes/background-color/background-color';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/colores' Component={BackgroundColor}></Route>
    </Routes>
  </Router>
    
);
