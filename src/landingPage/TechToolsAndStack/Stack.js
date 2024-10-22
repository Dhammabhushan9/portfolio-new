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

                <div className='frontend-section'>
                    <p>Frontend:</p>
                    <button className='btn'>React</button>
                    <button className='btn'>Framer Motion</button>
                    <button className='btn'>HTML</button>
                    <button className='btn'>Bootstrap</button>
                </div>

                <div className='Database-section'>
                    <p>Database:</p>
                    <button className='btn'>MySQL</button>
                    <button className='btn'>MongoDB</button>
                </div>

                <div className='Backend-section'>
                    <p>Backend:</p>
                    <button className='btn'>Express</button>
                    <button className='btn'>Node.js</button>
                </div>
            </div>
        </motion.div>
    );
}

export default Stack;
