import React from 'react';
import { motion } from 'framer-motion';
import './tech.css';

function Stack() {
    return ( 
        <motion.div

        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
           initial={{x:-200,opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:0.5,delay:0.5}}
            className='Stack-container'
        >
            <div className='tech-stack'>
                <h2>TECH STACK</h2>


                <p>Frontend:</p>
                <div className='frontend-section'>
                    
                    <div className='btn'>React</div>
                    <div className='btn'>Framer Motion</div>
                    <div className='btn'>HTML</div>
                    <div className='btn'>Bootstrap</div>
                </div>

                <div className='Database-section'>
                    <p>Database:</p>
                    <div className='btn'>MySQL</div>
                    <div className='btn'>MongoDB</div>
                </div>

                <div className='Backend-section'>
                    <p>Backend:</p>
                    <div className='btn'>Express</div>
                    <div className='btn'>Node.js</div>
                </div>
            </div>
        </motion.div>
    );
}

export default Stack;
