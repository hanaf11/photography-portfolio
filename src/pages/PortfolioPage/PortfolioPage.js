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
import opt3 from "../../assets/png/opt3.jpg";
import picture from '../../assets/png/stairs.jpg';
import pic1 from '../../assets/png/1.jpg';
import pic2 from '../../assets/png/IMG_0997.jpg';
import pic3 from '../../assets/png/IMG_2215.jpg';
import pic4 from '../../assets/png/IMG_2305.jpg';
import pic5 from '../../assets/png/IMG_2841.jpg';
import pic6 from '../../assets/png/IMG_2995.jpg';
import pic7 from '../../assets/png/opt1.jpg';
import pic8 from '../../assets/png/opt2.jpg';
import pic9 from '../../assets/png/tree.jpg';
import pic11 from '../../assets/png/pic11.jpg';
import pic12 from '../../assets/png/pic12.jpg';
import pic13 from '../../assets/png/pic13.jpg';
import pic14 from '../../assets/png/pic14.jpg';
import pic15 from '../../assets/png/pic15.jpg';
import pic16 from '../../assets/png/pic16.jpg';
import pic17 from '../../assets/png/pic17.jpg';
import pic18 from '../../assets/png/pic18.jpg';
import pic19 from '../../assets/png/pic19.jpg';
import pic20 from '../../assets/png/pic20.jpg';
import pic21 from '../../assets/png/pic21.jpg';
import pic22 from '../../assets/png/pic22.jpg';
import pic23 from '../../assets/png/pic23.jpg';
import pic24 from '../../assets/png/pic24.jpg';
import pic25 from '../../assets/png/pic25.jpg';
import pic26 from '../../assets/png/pic26.jpg';
import most from '../../assets/png/most.jpg'








function PortfolioPage() {

   
    const { theme } = useContext(ThemeContext);
    const [ images, setImages ] = useState([
        {
            src: opt3,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: picture,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic1,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic2,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic3,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic4,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic5,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic6,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic19,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic8,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic9,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic11,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic12,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic13,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic14,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic15,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic16,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic17,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic18,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic7,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic25,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic21,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic22,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic23,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic24,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: pic20,
            desc: "Nature photography",
            sub: "druid's photos"
        },

        {
            src: pic26,
            desc: "Nature photography",
            sub: "druid's photos"
        },
        {
            src: most,
            desc: "Nature photography",
            sub: "druid's photos"
        },


    ]
);




   

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
       
            <Header title="Portfolio"></Header>
            <div className="projectPage-content">
                <Lightroom className="lightroom" images={images} settings={gallerySettings} />
            </div>

             <Footer2 className="footer-2"></Footer2>
        </div>
    )
}

export default PortfolioPage