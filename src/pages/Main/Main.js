import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
                <meta name="description" content="Nature photography" />
            </Helmet>

            <Navbar />        
            <Landing />
            <Footer/>
        </div>
    )
}

export default Main
