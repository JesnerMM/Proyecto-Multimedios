import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import 'animate.css';

export function App() {
  return <Router>
      <div className="box-border flex flex-col min-h-screen bg-background-white overflow-hidden">
        <Header />
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}