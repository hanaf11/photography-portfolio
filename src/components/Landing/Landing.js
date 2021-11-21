import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { FaInstagram} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';


function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: "'Shippori Antique', sans-serif",
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",


            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        }
        
       
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
               <div className='container'>
                   
                     
                        
                        
                       
                       
                 
             
                    
              
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                       
                        <h1>{headerData.name}</h1>
                        <h6>{headerData.title}</h6>
                        <p>{headerData.description}</p>

                        <div className='lcr-buttonContainer'>
                           
                            <NavLink
                                to='/portfolio'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.resumeBtn}>
                                    Portfolio
                                    <BsArrowRight size={25}></BsArrowRight>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;
