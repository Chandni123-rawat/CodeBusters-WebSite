import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import siteBg from './assets/site-bg.jpg';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#060A15] text-[#F3F5FB] relative selection:bg-[#2E5CFF] selection:text-white flex flex-col justify-between">
        
        <div 
          className="fixed inset-0 z-0 opacity-35 pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${siteBg})` }}
        />


        <div className="relative z-10 flex flex-col min-h-screen justify-between">
          <div>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
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