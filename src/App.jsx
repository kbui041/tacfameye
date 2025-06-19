import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Team from './pages/Team.jsx';
import Insurance from './pages/Insurance.jsx';
import EyeLib from './pages/EyeLib.jsx';
import LocHr from './pages/LocHr.jsx';
import HIPAA from './pages/HIPAA.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/eyelib" element={<EyeLib />} />
          <Route path="/loc-hr" element={<LocHr />} />
          <Route path="/hipaa" element={<HIPAA />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
