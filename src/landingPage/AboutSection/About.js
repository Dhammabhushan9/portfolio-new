import React from 'react';

import './About.css'

//importing other files
import Contact from './Contact';
import Summary from './Summary';
 

function About() {
    return ( 
            <div className='About-container'>

                <div className='About-pic'></div>
                <Summary/>
                <Contact/>

            </div>
     );
}

export default About
 