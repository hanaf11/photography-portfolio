import React, { useContext } from 'react'
import './Footer2.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import {FaInstagram} from 'react-icons/fa'
import {socialsData} from '../../data/socialsData'

function Footer2() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer2" >
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
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

