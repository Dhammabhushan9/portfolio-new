import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function Contact() {
    return (
        <>
            <motion.div
            initial={{opacity:0,y:200}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.5}}
            className='Contact-container'>
            <p className='s-start'>Get in Touch</p>
 
            <h1 className='s-name'>Contact Me</h1>

           


                <div className='icons'>
                    <a href="mailto:your-email@gmail.com" target="_blank" rel="noopener noreferrer">
                        <motion.img
                            whileHover={{ scale: 1.2, boxShadow: '1px',
                                boxShadow: '10px 10px 20px rgba(0, 0, 0, 1)'
                            }}
                            transition={{ duration: 0.19 }}
                            src='/gmail.svg'
                            alt='Email'
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <motion.img
                            whileHover={{ scale: 1.2, boxShadow: '1px',
                                boxShadow: '10px 10px 20px rgba(0, 0, 0, 1)', 
                            }}
                            transition={{ duration: 0.19 }}
                            src="/linkdin.svg"
                            alt="LinkedIn"
                        />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <motion.img
                            whileHover={{ scale: 1.2, boxShadow: '1px',
                                boxShadow: '10px 10px 20px rgba(0, 0, 0, 1)', 
                             }}
                            transition={{ duration: 0.19 }}
                            src="/github.svg"
                            alt="GitHub"
                        />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <motion.img
                            whileHover={{ scale: 1.2, boxShadow: '1px',
                                boxShadow: '10px 10px 20px rgba(0, 0, 0, 1)', 
                             }}
                            transition={{ duration: 0.19 }}
                            src="/x.svg"
                            alt="Twitter"
                        />
                    </a>
                </div>
            </motion.div>
        </>
    );
}

export default Contact;
