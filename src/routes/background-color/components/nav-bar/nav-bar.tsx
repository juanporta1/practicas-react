import { useContext, useState } from 'react';
import './nav-bar.css';
import { cambiarColorContext } from '../../../../contexts/cambiarColorContext';
import ColorChanger from '../color-changer/color-changer';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavBarProps {
}



export function NavBar(props: NavBarProps) {
  

  const { colorActual , setColorActual , modo , setModo ,cambiarColor} = useContext(cambiarColorContext);
 
  return (
    
      <div className="container">
        <div className='nav-left'>
          <span className='title'>Color Picker</span>
        </div>
        <div className='nav-right'>
          <span className='ops' onClick={() => {
              
              setModo("text");
              cambiarColor()
              document.body.style.background = colorActual
          }}>TEXT</span>
          <span className='ops' onClick={() => {
           
            setModo("hex");
            cambiarColor()
            document.body.style.background = colorActual
          }}>HEX</span>
        </div>
      </div>
    
  );
}

export default NavBar;
