import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import RainDrops from './components/Rain';
import Experience from './components/Experience';

function App() {

  const [showRain, setShowRain] = useState(true);

  const handleToggleRain = () => {
    setShowRain(prevState => !prevState);
  }

  return (
    <div className="min-h-screen relative">

      {showRain && <RainDrops />}

      <Header showRain={showRain} setShowRain={handleToggleRain} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;