import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import Legal from './components/Legal/Legal';
import Veronica from './components/Veronica/Veronica';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FloatingCTA from './components/FloatingCTA/FloatingCTA';

function App() {
  const basename = import.meta.env.PROD ? '/Health' : '';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="app">
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        <Footer />
        <Veronica />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;