import React from 'react';
import './styles/App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="app-main">
        <Hero />
        <Features />
        
        <section className="next-section">
          <div className="container">
            <h2>Continue exploring below...</h2>
          </div>
        </section>
      </main>
      
      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 Clinify AI - Transforming Healthcare</p>
        </div>
      </footer>
    </div>
  );
}

export default App;