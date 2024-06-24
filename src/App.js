import './App.css';
import Hero from './components/Hero';
import './assets/css/root.css'
import About from './components/About';
import Questions from './components/Questions';
import Fully from './components/Fully';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Smart from './components/Smart';
import Roadmap from './components/Roadmap';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  
  useEffect(() => {
    AOS.init({
      once:true,
    });
  }, [])
  return (
    <>    
    <Hero/>
     <About/>
    <Smart/>
    <Tokenomics/>
    <Fully />
    <Roadmap/>
    <Questions />
    <Socials />
    <Footer/> 
    </>

  );
}

export default App;
