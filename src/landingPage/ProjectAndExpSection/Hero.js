import React from 'react';

import './Hero.css'

//importing other fils
import Project from './Project'
import Experience from './Experience'
import { Link } from 'react-router-dom';



function Hero() {
    return ( 
        
         <div className='Hero-container'>
               <Link to='/project'> <Project/></Link>
              <Link to='/experience' ><Experience/></Link> 
         </div>
     );
}

export default Hero;