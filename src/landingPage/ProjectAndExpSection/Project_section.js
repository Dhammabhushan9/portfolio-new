import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function ProjectSection() {
  const imagRef = useRef(null);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  useEffect(() => {
    // Update the scrollWidth when the component mounts or updates
    if (imagRef.current) {
      setScrollWidth(imagRef.current.scrollWidth);
    }
  }, [imagRef]);

  return (  
    <div className='project'>
      <motion.div
        ref={imagRef}
        className='outer-container'
        drag="x"
        dragConstraints={{ left: -scrollWidth || 0, right: 0 }}  // Using scrollWidth from state
        style={{ cursor: 'grab', display: 'flex' }}  
      >
        <div className='outer-card'>
          <div className='card'>
            <h3>Project 1</h3>
          </div>
          <button>Details</button>
        </div>
    
        <div className='outer-card'>
          <div className='card'>
            <h3>Project 2</h3>
          </div>
          <button>Details</button>
        </div>

        <div className='outer-card'>
          <div className='card'>
            <h3>Project 3</h3>
          </div>
          <button className='btn btn-primary'>Details</button>
        </div>
        
        
        
      </motion.div>
    </div> 
  );
}

export default ProjectSection;
