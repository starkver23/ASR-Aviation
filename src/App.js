// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Fleet from "./pages/Fleet";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        {/* Navbar at the top */}
        <Navbar />

        {/* Conditionally render Carousel based on route */}
        <MainContent />

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Show Carousel only on the home page */}
      {location.pathname === "/" && <Carousel />}

      {/* Routes */}
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact" element={<div>Contact Us</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
