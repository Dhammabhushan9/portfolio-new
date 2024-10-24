import React from 'react';
import { motion } from 'framer-motion';
import './About.css'

function Summary() {
    return ( 
        <motion.div 
         initial={{opacity:0,y:-200}}
         animate={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.5}}
        className='Summary-container'> 
           <p className='s-start'>Hello,i'm</p>
           <h1 className='s-name'>Dhammabhushan</h1>
           <p className='s-work'>Full stack developer</p>

            
             
         </motion.div>
     );
}

export default Summary;