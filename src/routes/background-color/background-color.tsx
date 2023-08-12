import ColorProvider from '../../contexts/cambiarColorContext';
import styles from './background-color.module.css';
import { StrictMode } from 'react';
import NavBar from './components/nav-bar/nav-bar';
import ColorChanger from './components/color-changer/color-changer';

/* eslint-disable-next-line */
export interface BackgroundColorProps {}

export function BackgroundColor(props: BackgroundColorProps) {
  return (
    <StrictMode>
      <ColorProvider>
    
    <div className='main'>
      <NavBar>
      </NavBar>
      <ColorChanger></ColorChanger>
   
    </div>
    
    </ColorProvider>
  </StrictMode>
  );
}

export default BackgroundColor;
