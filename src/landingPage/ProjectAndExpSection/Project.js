import React, { useState } from 'react';
import { motion } from 'framer-motion';




function Project() {

    const [isClick,setISclick]=useState(false);


    return ( 
        <motion.div

        onClick={()=>{setISclick(!isClick)}}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
           initial={{x:200,opacity:0}}
           animate={{x:0,opacity:1}}
           whileHover={{scale:1.05,
            transition:{duration:0.3,delay:0.1}}}
           transition={{duration:0.5,delay:0.5}}
           
        className='Project-container'> 
            <img  src="/project2.png" alt="" />
            <div className="overlay-text">PROJECTS</div>
        </motion.div>
     );
}

export default Project;