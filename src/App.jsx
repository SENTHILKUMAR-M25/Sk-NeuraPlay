import React from "react";
import Navbar from "./Componets/Navbar.jsx";
import Hero from "./Componets/Hero.jsx";
import Feature from "./Componets/Feature.jsx";
import Explore from "./Componets/Explore.jsx";
import Testimonial from "./Componets/Testimonial.jsx";
import Footer from "./Componets/Footer.jsx";
import Splash from "./Componets/Splash.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="feature" className="min-h-screen">
        <Feature />
      </section>

      <section id="explore" className="min-h-screen">
        <Explore />
      </section>

      <section id="testimonial" className="min-h-screen">
        <Testimonial />
      </section>

      <section id="footer">
        <Footer />
      </section>

      <Splash />
    </>
  );
}

export default App;
