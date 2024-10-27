import React from 'react';
import { motion } from 'framer-motion';
import './tech.css';

function TechButton({ children }) {
    return (
        <div className='btn'>{children}</div>
    );
}

function Stack() {
    return ( 
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='Stack-container'
        >
            <div className='tech-stack'>
                <h2>TECH STACK</h2>

                <p>Frontend:</p>
                <div className='frontend-section'>
                    <TechButton>React</TechButton>
                    <TechButton>Framer Motion</TechButton>
                    <TechButton>HTML</TechButton>
                    <TechButton>Bootstrap</TechButton>
                </div>

                <p>Database:</p>
                <div className='Database-section'>
                    <TechButton>MySQL</TechButton>
                    <TechButton>MongoDB</TechButton>
                </div>

                <p>Backend:</p>
                <div className='Backend-section'>
                    <TechButton>Express</TechButton>
                    <TechButton>Node.js</TechButton>
                </div>
            </div>
        </motion.div>
    );
}

export default Stack;