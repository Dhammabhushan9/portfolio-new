import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { Link } from 'react-router-dom';

function ProjectSection() {
  const imagRef = useRef(null);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  useEffect(() => {
    const updateScrollWidth = () => {
      if (imagRef.current) {
        setScrollWidth(imagRef.current.scrollWidth - imagRef.current.offsetWidth);
      }
    };

    updateScrollWidth();
    window.addEventListener('resize', updateScrollWidth);

    return () => window.removeEventListener('resize', updateScrollWidth);
  }, []);

  return (  
    <div className='project'>
      <Link style={{ textDecoration: 'none' }} to="/">
        <motion.button
          whileHover={{ backgroundColor: 'black', color: 'white', scale: 1.4, borderRadius: '25rem' }}
          className='btn btn-back'
        >
          <b>HOME</b>
        </motion.button>
      </Link>   

      <motion.div
      
        ref={imagRef}
        className='outer-container'
        drag="x"
        dragConstraints={{ left: -scrollWidth, right: 0 }}
        style={{ cursor: 'grab', display: 'flex' }}  
      >
        {/* Project Card 1 */}
        <motion.div 
         
        className='outer-card'>

          <div className='card'>
            <img src="/1.png" alt="Project 1" />
          </div>
          <div className='center'>
            <a href="https://github.com/Dhammabhushan9/trading-platform" target="_blank" rel="noopener noreferrer">
              <button className='btn-project'>GITHUB</button>
            </a>
            <a href="https://trading-platform-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className='btn-project'>DEMO</button>
            </a>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <div className='outer-card'>
          <div className='card'>
            <img src="/2.png" alt="Project 2" />
          </div>
          <div className='center'>
            <a href="https://github.com/Dhammabhushan9/hotel-finding-website" target="_blank" rel="noopener noreferrer">
              <button className='btn-project'>GITHUB</button>
            </a>
            <a href="https://hotel-finding-demo.com" target="_blank" rel="noopener noreferrer">
              <button className='btn-project'>DEMO</button>
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className='outer-card'>
          <div className='card'>
            <img src="/3.png" alt="Project 3" />
          </div>
          <div className='center'>
            <a href="https://github.com/Dhammabhushan9/portfolio" target="_blank" rel="noopener noreferrer">
              <button className='btn-project'>GITHUB</button>
            </a>
            <a href="https://portfolio-dhammabhushan9s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className='btn-project'> DEMO</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div> 
  );
}

export default ProjectSection;
