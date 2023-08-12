import { useContext, useState } from 'react';
import styles from './color-changer.css';
import "./color-changer.css"
import { cambiarColorContext } from '../../../../contexts/cambiarColorContext';

/* eslint-disable-next-line */
export interface ColorChangerProps {
}

export function ColorChanger(props: ColorChangerProps) {
  
  
  const { colorActual , setColorActual , modo , setModo ,cambiarColor} = useContext(cambiarColorContext);
 
  document.body.style.background = colorActual
  return (
    <div className="caja">
      <div className="info">
        <span>Color de Fondo: <span className='color' style={{"color": colorActual}}>{colorActual}</span></span>
      </div>
      <div className="btn-div">
        <button className="btn" onClick={() => {
          cambiarColor();
        }}>Cambiar Color</button>
      </div>
    </div>
  );
  
}

export default ColorChanger;

