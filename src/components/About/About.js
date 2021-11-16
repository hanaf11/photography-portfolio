import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Header from '../Header/Header';



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <Header title="About Me"></Header>
            <div className="about-body">
                <div className="about-description">
                    
                    <p style={{color:theme.tertiary80}}>{aboutData.description1}<br/><br/>{aboutData.description2}<br/><br/>{aboutData.description3}<br/>{aboutData.description4}</p>
                </div>
                <div className="about-imgcontainer">
                <div className="about-img1">
                    <img 
                        //src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/18921855_1668790259822167_2405359986941678364_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nIcYGpyL-B4AX-nVRUI&_nc_ht=scontent-vie1-1.xx&oh=6e4ab533f320ee690516f5c8a61ab8f6&oe=6199A50C"
                        alt="" 
                    />
                </div>
                <div className="about-img2">
                    <img 
                        //src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        src="https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/18921855_1668790259822167_2405359986941678364_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nIcYGpyL-B4AX-nVRUI&_nc_ht=scontent-vie1-1.xx&oh=6e4ab533f320ee690516f5c8a61ab8f6&oe=6199A50C"
                        alt="" 
                    />
                </div>
                </div>
            </div>
        </div>

    )
}

export default About
