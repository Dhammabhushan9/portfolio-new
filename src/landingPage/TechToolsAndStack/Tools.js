import React from 'react';
import { motion } from 'framer-motion';
import './tech.css'; 

function Tools() {
    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className='Tools-container'
        >
            <div className='tools'>
                <motion.div className='tool-item'><img src="/vs-code.webp" alt="Visual Studio Code" /></motion.div>
                <motion.div className='tool-item'><img src="/chrome.svg" alt="Google Chrome" /></motion.div>
                <motion.div className='tool-item-gpt'><img src="/gpt.svg" alt="ChatGPT" /></motion.div>
                <motion.div className='tool-item'><img src='/framer.svg' alt='Framer' /></motion.div>
 
            </div>
        </motion.div>
    );
}

export default Tools;
