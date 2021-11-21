import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer, About} from '../../components'
import { headerData } from '../../data/headerData'
import Footer2 from '../../components/Footer2/Footer2'
import useWindowDimensions from '../../assets/helpers/windowSizing'
    

function AboutMePage() {
    const {width}=useWindowDimensions();
    if(width>766){
        return (
            <div>
                <Helmet>
                    <title>{headerData.name}</title>
                </Helmet>
    
                <Navbar />        
                <About />
                <Footer></Footer>
        
                
            </div>
        )
    }
    else{
        return (
            <div>
                <Helmet>
                    <title>{headerData.name}</title>
                </Helmet>
    
                <Navbar />        
                <About />
                <Footer2/>
        
                
            </div>
        )

    }
    
}

export default AboutMePage
