'use client';
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function About() {
  return (
    <>
    <div className="flex  text-white bg-black py-12 px-12 mt-8  items-center gap-6 max-w-2xl mx-auto text-center space-y-4">
      <div>
        
        <p className="text-3xl text-white ">
           Shiza Sultan a Frontend developer
        </p>
        <p className="text-xl text-gray-400">
  I’m Shiza Sultan, a front-end developer building user-friendly web experiences with clean, pixel-perfect UI and smooth performance. I specialize in crafting responsive and accessible interfaces that look great on every device. I’m passionate about creating intuitive user journeys, optimizing performance, and translating design concepts into functional code using modern technologies like React and Next.js.
</p>


<div className="mt-5">
     <a
  href="#contact"
  className="flex-1 about-button relative overflow-hidden px-8 py-3 bg-white/5 backdrop-blur-lg 
             rounded-full border border-white/10 transition-all duration-300 
             text-white font-medium flex items-center justify-center gap-3 group
             cursor-pointer shadow-amber-glow
"
>
  <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-500 group-hover:left-0"></span>
   <Icon 
                    icon="tdesign:call" 
                    className="relative z-10 size-5 text-white w-8 h-8"
                  />
  <span className="relative z-10">Get In Touch</span>
</a>

</div>    
      </div>
    </div>


{/*Education*/}
<div className="bg-black text-white pt-10 pb-10 animate">
  <div className="max-w-2xl mx-auto text-center space-y-4">
    <p className="text-4xl font-bold typing">Education</p>

    <div className="space-y-2">
      <p className="text-xl font-semibold"
      >Bachelor’s degree in Computer Science</p>
      <p className="text-base text-gray-400">
        Pursuing a Bachelor’s degree in Computer Science (BSCS) from Govt College University, with a focus on programming, data structures, web technologies, and software engineering. This academic journey has strengthened my problem-solving skills and deepened my understanding of building efficient, scalable, and user-friendly web applications.
      </p>
    </div>

  
  {/*Web designing*/}
  <p  className="text-xl font-semibold">Web designing</p>
  <p className="text-base text-gray-400">I completed a web designing course from SMIT Institute, where I gained practical experience in web design, responsive layouts, and front-end development using HTML, CSS, and JavaScript.</p>
  
  {/*dev*/}
  <p  className="text-xl font-semibold">Web Development</p>
  <p className="text-base text-gray-400">I completed a Web Development (MERN Stack) course from SMIT Institute, where I gained hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. The course helped me strengthen my skills in front-end development, API integration, and database management, and it taught me how to create dynamic, responsive, and scalable web projects.</p>
  
  </div>
</div>


    </>
  );
}
