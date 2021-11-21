import React, { Profiler, useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Header from '../Header/Header';
import profilna from '../../assets/png/profilna.jpg'
import druga from '../../assets/png/druga.jpg'



function About() {

   const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: 'black'}}>
            <Header title="About Me"></Header>
            <div className="about-body">
                <div className="about-description">
                    
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}<br/><br/>{aboutData.description3}<br/>{aboutData.description4}</p>
                </div>
                <div className="about-imgcontainer">
                <div className="about-img1">
                    <img 
                        //src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        src={druga}
                        alt="" 
                    />
                </div>
                <div className="about-img2">
                    <img 
                        //src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        src={profilna}
                        alt="" 
                    />
                </div>
                </div>
            </div>
        </div>

    )
}

export default About
