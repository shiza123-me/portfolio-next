'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
  const projects = [
    {
      title: "E-commerce Store",
      desc: "A full responsive e-commerce website with real-time search and product filtering.",
      tech: "Next.js  Tailwind  JavaScript",
      link: "https://api-integration-weld.vercel.app/",
      img: "/ecomerace.jpeg",
    },
    {
      title: "Restaurant Website",
      desc: "Modern food website with menu, animations, and responsive design.",
      tech: "Next.js Tailwind ",
      link: "https://restaurant-dk2v.vercel.app/",
      img: "/Restoran.jpeg",
    },
    {
      title: "Food Website",
      desc: "Modern food website with menu, animations, and responsive design.",
      tech: "Next.js Tailwind ",
      link: "https://restaurant-website-liard-psi.vercel.app/",
      img: "/food.jpeg",
    },
    {
      title: "E-commerce Store",
      desc: "A full responsive e-commerce website with real-time search and product filtering.",
      tech: "Html CSS  JavaScript",
      link: "https://web-development-theta-green.vercel.app/",
      img: "/store.jpeg",
    },
    {
      title: "Landing Page",
      desc: "A modern, responsive landing page built with Next.js and Tailwind CSS, focused on clean UI and smooth user experience.",
      tech: "Next.js  Tailwind",
      link: "https://landing-page-delta-roan-26.vercel.app/",
      img: "/landing.jpeg",
    },
    {
      title: "Quiz Website",
      desc: "An interactive quiz application built with Next.js featuring dynamic routing, score tracking, and a polished user interface.",
      tech: "Next.js Tailwind ",
      link: "https://quiz-app-d96c.vercel.app/",
      img: "/quiz.jpeg",
    },
    {
      title: "Event Management Web App",
      desc: "A complete platform for browsing events, registering attendees, and managing event details.",
      tech: "React CSS JS Firebase",
      link: "https://hackathon-w364.vercel.app/",
      img: "/Event.jpeg",
    },
    {
      title: "Calculator",
      desc: "A full responsive e-commerce website with real-time search and product filtering.",
      tech: "Next.js  Tailwind  JavaScript",
      link: "https://calculator-eta-six-74.vercel.app/",
      img: "/calculator.jpeg",
    },
    {
      title: "CRUD App",
      desc: "Simple CRUD app using local storage with dynamic UI.",
      tech: "Next.js  Tailwind  JavaScript",
      link: "https://crud-app-blush-nine.vercel.app/",
      img: "/crudapp.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className=" max-w-2xl mx-auto text-center space-y-4">
          <p className="text-5xl font-bold text-center typing">My Work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-6 hover:shadow-xl transition"
            >
              {/* Project Image */}
              <Link href={project.link} target="_blank">
                <div className="w-full h-48 relative mb-4 cursor-pointer">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover rounded-xl hover:opacity-90 transition"
                  />
                </div>
              </Link>


              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.desc}</p>
              <p className="text-sm  mb-4">{project.tech}</p>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
