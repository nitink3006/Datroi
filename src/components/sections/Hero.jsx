import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with refined gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a2d] to-[#0d3a6d] z-0"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-[100px]"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[120px]"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Premium badge */}
            <motion.div 
              className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wider text-white/90">PREMIUM CONGLOMERATE</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">Driving Innovation</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">and Impact Across</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
                Industries That Shape the Future
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            {/* <motion.p 
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We unite expertise across HR, Real Estate, Education, Research, and Investments to build transformative solutions that drive progress and create lasting value.
            </motion.p> */}
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </div>
              </Link>
              
              {/* <Link to="/business" className="relative inline-block group">
                <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"></div>
                <div className="relative text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                  Explore Sectors
                </div>
              </Link> */}
            </motion.div>
            
            {/* Stats section */}
            {/* <motion.div 
              className="mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:text-left">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "200+", label: "Team Members" },
                  { value: "5", label: "Core Sectors" },
                  { value: "10K+", label: "Clients Served" }
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center lg:items-start">
                    <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
          
          {/* Visual elements - floating cards */}
         <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="hidden lg:block"
>
  <div className="relative h-[500px] flex items-center justify-center">
    {/* Central element - Enhanced with pulsing animation */}
    <motion.div
      className="w-64 h-64 rounded-full border-2 border-white/10 flex items-center justify-center"
      animate={{ 
        scale: [1, 1.05, 1],
        boxShadow: ["0 0 0 0 rgba(6, 182, 212, 0.3)", "0 0 0 20px rgba(6, 182, 212, 0)", "0 0 0 0 rgba(6, 182, 212, 0)"]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm w-56 h-56 rounded-full flex items-center justify-center">
        <div className="bg-gradient-to-br from-cyan-600 to-teal-600 w-40 h-40 rounded-full flex items-center justify-center shadow-xl">
          <span className="text-white font-bold text-xl tracking-wider">DATROI</span>
        </div>
      </div>
    </motion.div>
    
    {/* Floating industry cards in circular arrangement */}
    {[
      { 
        title: "Education", 
        color: "bg-gradient-to-br from-emerald-600 to-green-700",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        )
      },
      { 
        title: "Real Estate", 
        color: "bg-gradient-to-br from-amber-600 to-orange-600",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        )
      },
      { 
        title: "Research", 
        color: "bg-gradient-to-br from-rose-600 to-pink-600",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      },
      { 
        title: "Investments", 
        color: "bg-gradient-to-br from-blue-600 to-indigo-700",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      { 
        title: "Human Resources", 
        color: "bg-gradient-to-br from-purple-600 to-indigo-800",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      }
    ].map((sector, index) => {
      const angle = (index / 5) * Math.PI * 2;
      const radius = 200; // Distance from center
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return (
        <motion.div 
          key={index}
          className="absolute w-24 h-24 rounded-xl shadow-xl flex flex-col items-center justify-center p-3 z-20"
          style={{
            background: sector.color
          }}
          initial={{ 
            x: 0,
            y: 0,
            scale: 0.8
          }}
          animate={{ 
            x: [x, x * 1.1, x],
            y: [y, y * 1.1, y],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        >
          <div className="bg-white/20 p-2 rounded-lg mb-2">
            {sector.icon}
          </div>
          <span className="text-xs font-semibold text-center text-white">{sector.title}</span>
        </motion.div>
      )
    })}
  </div>
</motion.div>
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm mb-2">Discover More</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;