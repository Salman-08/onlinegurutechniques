import React from 'react';
import Header from './components/Header';
import HomePage from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ'

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Services />
      <About />
      <FAQ />
      <Contact />
      {/* Add your pages here */}
      <Footer />
    </div>
  );
}

export default App;
