 
import { motion } from 'framer-motion';
import React from 'react';

function Certification() {
    return ( 

        <motion.div 
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
           initial={{x:-200,opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:0.5,delay:0.5}}
        className='Certification-container'></motion.div>
      );
}

export default Certification;