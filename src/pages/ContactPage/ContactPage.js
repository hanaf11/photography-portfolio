import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
import Footer2 from '../../components/Footer2/Footer2'
import useWindowDimensions from '../../assets/helpers/windowSizing'

function ContactPage() {
    const {width}=useWindowDimensions();
    if(width>539){
        return (
            <div>
                <Helmet>
                    <title>{headerData.name}</title>
                </Helmet>
    
                <Navbar />        
                <Contacts />
                <Footer />
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
                <Contacts />
                <Footer2/>
            </div>
        )
    }
    
}

export default ContactPage
