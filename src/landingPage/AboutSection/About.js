import React from 'react';

import './About.css'
import { motion } from 'framer-motion';
//importing other files
import Contact from './Contact';
import Summary from './Summary';
 

function About() {
    return ( 
            <motion.div 
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
               initial={{ opacity:0}}
               animate={{opacity:1}}
               transition={{duration:1,delay:0.5}}
            
            className='About-container'>

                <div className='About-pic'>
                  <img src=" " alt="profile pic" />
                </div>
                <Summary/>
                <Contact/>

            </motion.div>
     );
}

export default About
 