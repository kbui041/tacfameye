import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Insurance from './pages/Insurance';
import EyeLib from './pages/EyeLib';
import LocHr from './pages/LocHr';
import HIPAA from './pages/HIPAA';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/eyelib" element={<EyeLib />} />
            <Route path="/location" element={<LocHr />} />
            <Route path="/hipaa" element={<HIPAA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
