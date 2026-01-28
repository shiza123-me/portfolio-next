'use client';
import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Intermediate" },
    { name: "React.js", icon: <FaReact />, level: "Intermediate" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "Intermediate" },
    { name: "Git & GitHub", icon: <FaGitAlt />, level: "Intermediate" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold typing">Skills</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          I specialize in building responsive, modern web applications using
          industry-standard tools and frameworks, focusing on clean UI and
          performance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-6
              flex flex-col items-center gap-4
              hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500
              transition-all duration-300"
          >
            <div className="text-5xl text-amber-500">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <span className="text-sm text-gray-400">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
