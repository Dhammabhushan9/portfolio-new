import React from 'react';

import './tech.css'
//importing other files
import Stack from './Stack';
import Tools from './Tools';
import Certification from './Certification';
import { div } from 'framer-motion/client';

function TechHero() {
    return ( 

          <div className='TechHero-container'>

              <Stack/>
              <Tools/>
                <Certification/>

          </div>
        
      );
}

export default TechHero;