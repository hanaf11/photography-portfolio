import React, { useContext } from 'react'
import './Footer2.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import {FaInstagram} from 'react-icons/fa'
import {socialsData} from '../../data/socialsData'

function Footer2() {

   

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer2" >
            <p style={{color: theme.tertiary}}>
                Made with love
                 by Hana
            </p>
            <div className='links2'>
                    
                    {socialsData.instagram && (
                        <a
                            href={socialsData.instagram}
                            target='_blank'
                            rel='noreferrer'
                        >
                        
                            <FaInstagram
                                className='landing--social'
                                style={{ color: theme.primary }}
                                aria-label='Instagram'
                            />
                        </a>
                    )}
            </div>
        </div>
    )
}

export default Footer2

