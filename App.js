import React from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Service from "./Service";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;