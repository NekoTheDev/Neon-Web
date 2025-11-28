import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MainPage } from './pages/MainPage';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0f] text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-100">
        
        {/* Global Environmental Effects */}
        <div className="scanlines" />
        <div className="cyber-grid" />
        
        <Navigation />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;