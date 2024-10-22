import React from 'react';

import './Hero.css'

//importing other fils
import Project from './Project'
import Experience from './Experience'

function Hero() {
    return ( 
         <div className='Hero-container'>
                <Project/>
                <Experience/>
         </div>
     );
}

export default Hero;