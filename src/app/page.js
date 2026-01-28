"use client";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-black pt-12">
      
<section id="header" className="pt-16">
        <Header />
      </section>
      
        <section id="about" className="pt-16">
        <About />
      </section>
      

      <section id="skills" className="pt-16">
        <Skills />
      </section>

      <section id="work" className="pt-16">
        <Work />
      </section>

      <section id="contact" className="pt-16">
        <Contact />
      </section>
    </div>
  );
}
