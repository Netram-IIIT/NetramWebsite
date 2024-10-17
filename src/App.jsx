import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import HomePage from "./components/HomePage";
import About from "./components/About ";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
      </Router>
      <div id='contact'>
        <Contact />
      </div>
    </>
  );
}

export default App;
