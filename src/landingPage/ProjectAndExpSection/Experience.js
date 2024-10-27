
import React from 'react';
import { motion } from 'framer-motion';

function Experience () {
    return ( 
         <motion.div 
         drag
         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{x:200,opacity:0}}
            animate={{x:0,opacity:1}}
            whileHover={{scale:1.05}}
            transition={{duration:0.5,delay:0.5}}
         className='Experience-container' >
             <img  src="/exp.jpeg" alt="" />
             <div style={{marginTop:'1vh' }} className="overlay-text"> EXPERIENCE</div>
         </motion.div>
     );
}

export default Experience ;