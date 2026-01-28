"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white bg-black fixed w-full z-50">
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">

        <p className="text-2xl font-bold">Shiza</p>

        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-amber-600">Home</a>
          <a href="#about" className="hover:text-amber-600">About</a>
          <a href="#skills" className="hover:text-amber-600">Skills</a>
          <a href="#work" className="hover:text-amber-600">Work</a>
          <a href="#contact" className="hover:text-amber-600">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Icon icon="mdi:menu" className="text-2xl" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <a href="#home" className="block py-2">Home</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#skills" className="block py-2">Skills</a>
          <a href="#work" className="block py-2">Work</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </div>
  );
}
