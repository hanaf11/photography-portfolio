import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
              
            </Helmet>

            <Navbar />        
            <Landing />
            <Footer/>
        </div>
    )
}

export default Main
