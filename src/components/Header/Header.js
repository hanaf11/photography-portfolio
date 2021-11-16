import React from "react";
import { useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Header({title}){

    const { theme } = useContext(ThemeContext);

    return(
        <div className="header">                
        <h1>{title}</h1>
        <div className="line-styling">
      <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
      <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
      <div className="style-line" style={{backgroundColor: theme.primary}}></div>
    </div>
    </div>
    )
}
export default Header