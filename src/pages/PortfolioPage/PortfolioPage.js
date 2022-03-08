import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles';
import './PortfolioPage.css'
import { Navbar} from '../../components';
import Footer2 from '../../components/Footer2/Footer2';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData'
import Lightroom from 'react-lightbox-gallery';
import Header from '../../components/Header/Header';




function PortfolioPage() {

   
    const { theme } = useContext(ThemeContext);
    const [images,setImages]=useState([]);




   

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
    var srcPath;
    useEffect(()=>{
        fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=7562dc5b557045423eef5cd169a6a407&photoset_id=72157720067007893&user_id=194247040%40N07&format=json&nojsoncallback=1")
        .then(function(response){ return response.json();})
        .then(function(json){
            var slike=[];
            var slikeNiz=json.photoset.photo.map((pic)=>{
            srcPath="https://farm"+pic.farm+".staticflickr.com/"+pic.server+"/"+pic.id+"_"+pic.secret+".jpg";
            //console.log(srcPath);
            slike.push({src:srcPath,desc:"Nature Photography",sub:"druid's photos"});
            });
            
         setImages(slike);
        
        })
    });

    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Portfolio</title>
            </Helmet>
            <Navbar></Navbar>
       
            <Header title="Portfolio"></Header>
            <div className="projectPage-content">
            <Lightroom className="lightroom" images={images} settings={gallerySettings} />
            </div>


             <Footer2 className="footer-2"></Footer2>
        </div>
    )
}

export default PortfolioPage