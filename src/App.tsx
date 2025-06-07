import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;