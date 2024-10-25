 
import './App.css';
import Tools from './landingPage/TechToolsAndStack/TechHero'
import About from './landingPage/AboutSection/About'
import ProjectAndExp from './landingPage/ProjectAndExpSection/Hero'
import Project_section from './landingPage/ProjectAndExpSection/Project_section';
import Experience_section from './landingPage/ProjectAndExpSection/Experience_section';
import Certification_section from './landingPage/TechToolsAndStack/Certification_section';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Project_section/>}/>
          <Route path='/' element={<Experience_section/>}/>
          <Route path='/certification' element={<Certification_section/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
function Home(){
  return<>
  
  <Tools/>
  <About/>
  <ProjectAndExp/>
  </>
}


export default App;
