import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import RainDrops from './components/Rain';
import Experience from './components/Experience';
import AI from './components/Chat';

function AppContent() {
  const [showRain, setShowRain] = useState(true);
  const location = useLocation();

  const handleToggleRain = () => {
    setShowRain(prevState => !prevState);
  };

  return (
    <div className="min-h-screen relative">
      {showRain && <RainDrops />}
      <Header showRain={showRain} setShowRain={handleToggleRain} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
              </>
            }
          />
          <Route path="/chat" element={<AI />} />
        </Routes>
      </main>
      {location.pathname !== '/chat' && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}