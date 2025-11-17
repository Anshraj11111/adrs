import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Workshop from "./pages/Workshop";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import ADRSSpark from "./pages/ADRSSpark";

export default function App() {
  // ------- GLOBAL DARK MODE -------
  const [darkMode, setDarkMode] = useState(() => {
    // store theme in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      {/* PASS darkMode + setDarkMode to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/products" element={<Products />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adrs-spark" element={<ADRSSpark />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
