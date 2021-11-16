import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './PortfolioPage.css'
import { Footer, Navbar, SingleProject } from '../../components';
import Footer2 from '../../components/Footer2/Footer2';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'
import Lightroom from 'react-lightbox-gallery';
import axios from 'axios';
import { IoMdQrScanner } from 'react-icons/io';
import Header from '../../components/Header/Header'

function PortfolioPage() {

   
    const { theme } = useContext(ThemeContext);
    const [ images, setImages ] = useState([
        {
            src: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Blonde woman wearing sunglasses smiling at the camera ",
            sub: "Dmitriy Frantsev"
        },
        {
            src: "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Man and woman passing by store",
            sub: "Harry Cunningham"
        },
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Jaipur , Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Man and woman passing by store",
            sub: "Harry Cunningham"
        },
        {
            src: "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Man and woman passing by store",
            sub: "Harry Cunningham"
        },
        {
            src: "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "Man and woman passing by store",
            sub: "Harry Cunningham"
        },
    ]
);
useEffect(()=>{
    axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c4822dff2dd7850b95dba9803e46809b&per_page=10&format=json&nojsoncallback=1)")
    .then(res=>{console.log(res);
    var picArray=res.data.photos.photo.map(pic=>{
        var srcPath="https://live.staticflickr.com/"+pic.server+"/"+pic.id+"_"+pic.secret+"_"+"z"+".jpg";
        return(<img alt="nesto" src={srcPath}></img>)
    })
  
    })
    .catch(err=>console.log(err))
})

   

    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover": 
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const gallerySettings = {
        columnCount: {
        default: 3,
        mobile: 3,
        tab: 4
        },
        mode: "dark"
    };

    const classes = useStyles();

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Portfolio</title>
            </Helmet>
            <Navbar></Navbar>
          {/*}  <div className="projectPage-header">                
                <h1>Gallery</h1>
                <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
    </div>*/}
            <Header></Header>
            <div className="projectPage-content">
                <Lightroom className="lightroom" images={images} settings={gallerySettings} />
            </div>

             <Footer2 className="footer-2"></Footer2>
        </div>
    )
}

export default PortfolioPage