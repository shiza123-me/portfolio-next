"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
   <div className="relative bg-[#0A0A0A] pt-12 overflow-x-hidden">


<section id="header" className="pt-16 relative z-10" data-aos="fade-right">
  <Header />
</section>

<section id="about" className="pt-16 relative z-10" data-aos="fade-left">
  <About />
</section>

<section id="skills" className="pt-16 relative z-10" data-aos="zoom-in">
  <Skills />
</section>

<section id="work" className="pt-16 relative z-10" data-aos="fade-up">
  <Work />
</section>

<section id="contact" className="pt-16 relative z-10" data-aos="fade-left">
  <Contact />
</section>
    </div>
  );
}
