import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import Events from './pages/Events';
import AmbientBackground from './components/AmbientBackground';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-[#F3F5FB] relative selection:bg-[#2E5CFF] selection:text-white flex flex-col justify-between">
        <AmbientBackground />
        <AnimatedCursor />


        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <div>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;