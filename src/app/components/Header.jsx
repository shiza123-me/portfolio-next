'use client';
import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-white py-12 px-6 md:px-12 items-start gap-10">

      {/* Left */}
      <div className="md:ml-24 text-center md:text-left">
        <div className="md:ml-24 mt-6 md:mt-12">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Shiza Sultan
          </p>
          <p className="text-gray-400 text-lg md:text-xl typing">
            Front-End Developer
          </p>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6 md:ml-24">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <button className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition
            hover:cursor-pointer" >
              <Icon icon="ant-design:facebook-filled" className="w-5 h-5" />
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/shiza-sultan-aba8a4314"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 hover:cursor-pointer transition inline-flex items-center justify-center"
          >
            <Icon icon="ant-design:linkedin-filled" className="w-5 h-5" />
          </a>

          <a href="https://github.com/shiza123-me" target="_blank" rel="noreferrer">
            <button className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition hover:cursor-pointer">
              <Icon icon="ant-design:github-filled" className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="text-center md:text-left">
        <p className="text-gray-400 mb-2 text-lg md:text-xl">Hello,</p>
        <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
          I’m Shiza Sultan, a front-end developer building user-friendly web experiences with clean, pixel-perfect UI and smooth performance.
        </p>

        <div className="flex justify-center md:justify-start mt-6">
          <a
            href="/cv.pdf"
            download="Shiza_Sultan_CV.pdf"
            className="about-button relative overflow-hidden px-8 py-3 bg-white/5 backdrop-blur-lg 
              rounded-full border border-white/10 transition-all duration-300 
              text-white font-medium flex items-center justify-center gap-3 group
              cursor-pointer shadow-amber-glow"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-500 group-hover:left-0"></span>
            <Icon icon="line-md:download-loop" className="relative z-10 size-5" />
            <span className="relative z-10">Download CV</span>
          </a>
        </div>
      </div>

    </div>
  );
}
