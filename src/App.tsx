import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rules from './components/Rules';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <>
      <div className="background-blobs">
        <div className="background-blob red"></div>
        <div className="background-blob amber"></div>
        <div className="background-blob orange"></div>
      </div>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Rules />
        <Timeline />
        <Prizes />
        <Registration />
        <Footer />
      </div>
    </>
  );
}

export default App;