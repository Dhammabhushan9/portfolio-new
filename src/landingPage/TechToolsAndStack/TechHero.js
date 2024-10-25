import React from 'react';

import './tech.css'
//importing other files
import Stack from './Stack';
import Tools from './Tools';
import Certification from './Certification';
import { Link } from 'react-router-dom';

function TechHero() {
    return ( 

          <div className='TechHero-container'>

              <Stack/>
              <Tools/>
         <Link to='/certification'><Certification/></Link>

          </div>
        
      );
}

export default TechHero;