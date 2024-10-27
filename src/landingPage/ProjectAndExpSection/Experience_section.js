import React from 'react';

import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

function ExperienceSection() {
    return (
        <div className='outer-exp-section'>
            <h1>Experience</h1>
            <Link style={{ textDecoration: 'none' }} to="/">
        <motion.button
          whileHover={{ backgroundColor: 'black', color: 'white', scale: 1.4, borderRadius: '25rem' }}
          className='btn btn-back'
        >
          <b>HOME</b>
        </motion.button>
      </Link>  

            <div className='Experience_section-container'>

                {/* Full Stack Intern Experience */}
                <div className='exp-card-left'>
                    <h1>Full Stack Intern</h1>
                    <p>Main Flow Services and Technologies</p>
                    <p><i>Jul. 2024 – Aug. 2024</i></p>
                    <ul>
                        <li>Developed full-stack web applications using EJS, JavaScript, HTML, CSS, and SQL.</li>
                        <li>Streamlined project workflows, enhancing overall efficiency by 25%.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features, reducing feature delivery time by 25%.</li>
                    </ul>
                </div>

                {/* Front-End Engineer Intern Experience */}
                <div className='exp-card-left'>
                    <h1>Front-End Engineer Intern</h1>
                    <p>Skyscanner</p>
                    <p><i>July 2024</i></p>
                    <ul>
                        <li>Built a web application using React as a front-end engineer.</li>
                        <li>Developed a page for selecting a travel date using Skyscanner’s open-source Backpack React library.</li>
                        <li>Customized the application and ran automated tests to ensure proper rendering.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default ExperienceSection;
