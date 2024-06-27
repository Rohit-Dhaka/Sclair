import './App.css';
import './assets/css/root.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';
import TokenomicsSection from './components/TokenomicsSection';
import SocialsSection from './components/SocialsSection';
import QuestionsSection from './components/QuestionsSection';
import RoadmapSection from './components/RoadmapSection';
import SmartSection from './components/SmartSection';
import FullySection from './components/FullySection';

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])
  return (
    <>    
      <HeroSection />
      <AboutSection />
      <SmartSection />
      <TokenomicsSection />
      <FullySection />
      <RoadmapSection />
      <QuestionsSection />
      <SocialsSection />
      <FooterSection />
    </>
  );
}

export default App;
