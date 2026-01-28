'use client';
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7fbww4a",
      "template_vhqyl0y",
      form.current,
      "jMzA8e22XJOBKTMKw"

    )
    .then(
      (result) => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message, please try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="min-h-screen bg-black text-white  py-10">



      <div className="max-w-2xl mx-auto text-center space-y-4 ">
          <h2 className="text-4xl font-bold typing">Contact Me</h2>
          <p className="text-gray-300">
            Feel free to reach out for any project, collaboration, or just a friendly hello.
          </p>
      </div>

      <div className="max-w-5xl mx-auto  w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8  rounded-2xl shadow-xl">
        
        {/* Left */}
        <div className="space-y-6">
          
          <div className="space-y-3 mt-24 ml-12">
            <p><strong>Email:</strong> shizasultan117@gmail.com</p>
            <p><strong>Phone:</strong> +92 3054576377</p>
            <p><strong>Location:</strong> Faisalabad, Pakistan</p>
          </div>
        </div>

        {/* Right - Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full bg-gray-200 text-black p-3 rounded-md outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full bg-gray-200 text-black p-3 rounded-md outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full bg-gray-200 p-3 text-black rounded-md outline-none h-32"
            required
          />

          <button
            type="submit"
           className="flex-1 about-button relative overflow-hidden px-8 py-3 bg-white/5 backdrop-blur-lg 
             rounded-full border border-white/10 transition-all duration-300 
             text-white font-medium flex items-center justify-center gap-3 group
             cursor-pointer shadow-amber-glow
"
>
           <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-500 group-hover:left-0"></span>
              <Icon 
                               icon="lets-icons:message-fill" 
                               className="relative z-10 size-5 text-white w-8 h-8"
                             />
             <span className="relative z-10"> Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
