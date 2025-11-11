import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import ConnectPanel from "../Bttons/ConnectPanel";
import PortfolioPanel from "../Bttons/PortfolioPanel";
import "../App.css";

const Hero = () => {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const openConnect = () => setIsConnectOpen(true);
  const closeConnect = () => setIsConnectOpen(false);
  const openPortfolio = () => setIsPortfolioOpen(true);
  const closePortfolio = () => setIsPortfolioOpen(false);

  // Animation variants
  const heroVariants = {
    normal: {
      x: 0,
      scale: 1,
      borderRadius: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    shifted: {
      x: '45%',
      scale: 0.85,
      borderRadius: 20,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Loading animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const isAnyPanelOpen = isConnectOpen || isPortfolioOpen;

  // Social media links
  const socialLinks = [
    { icon: 'instagram', url: 'https://instagram.com', color: 'from-purple-600 to-pink-500' },
    { icon: 'facebook', url: 'https://facebook.com', color: 'from-blue-600 to-blue-400' },
    { icon: 'twitter', url: 'https://twitter.com', color: 'from-blue-400 to-blue-300' },
    { icon: 'linkedin', url: 'https://linkedin.com', color: 'from-blue-700 to-blue-500' }
  ];

  return (
    <div className="relative h-[100vh] w-full overflow-hidden z-[10]">
      {/* Overlay */}
      <AnimatePresence>
        {isAnyPanelOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => {
              closeConnect();
              closePortfolio();
            }}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        className="relative w-full h-screen"
        variants={heroVariants}
        animate={isAnyPanelOpen ? 'shifted' : 'normal'}
        style={{ transformOrigin: 'center center' }}
      >
        {/* Vertical Social Media Icons - Right Side - Changed to absolute */}
        <motion.div
          className="absolute right-8 bottom-32 z-[100] hidden lg:flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
              whileHover={{ scale: 1.15, x: -5 }}
            >
              {/* Glass morphism container */}
              <div className="relative w-12 h-12 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center justify-center group-hover:bg-white/60 transition-all duration-300">
                {social.icon === 'instagram' && (
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                {social.icon === 'facebook' && (
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )}
                {social.icon === 'twitter' && (
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
              </div>

              {/* Tooltip on hover */}
              <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium capitalize whitespace-nowrap">
                  {social.icon}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Left - Team Avatar Stack - Only appears once */}
        <motion.div
          className="absolute bottom-32 left-16 z-20 hidden lg:block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div 
            className="bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            animate={floatingAnimation}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"></div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-800 font-semibold">Expert Team</p>
                <p className="text-xs text-gray-600">15+ Developers</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Lightning Icon */}
        <motion.div
          className="absolute top-1/4 right-1/4 z-20 hidden xl:block"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, -10, 0],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
        >
          <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/40">
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </motion.div>

        {/* Center-Aligned Content Container */}
        <motion.div 
          className="absolute top-5/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center max-w-4xl w-full px-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Main Heading */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <PressureText text="NS APPS" className="text-6xl md:text-[10rem]" />
          </motion.div>

          {/* Subheading with Video Icon */}
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-6"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <motion.div 
              className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-2xl border border-white/50 flex items-center justify-center overflow-hidden shadow-[0_4px_16px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              custom={1.2}
            >
              <video
                className="w-14 h-14 object-contain rounded-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/aa.webm" type="video/webm" />
              </video>
            </motion.div>
            <PressureText text="INNOVATIONS" className="text-5xl md:text-7xl" />
          </motion.div>

          {/* Description Card with Frosted Glass */}
          <motion.div
            className="relative w-full max-w-xl mb-10"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {/* Outer Transparent Layer with White Border */}
            <div className="absolute inset-0 bg-transparent backdrop-blur-sm rounded-[32px] border-1 border-white shadow-[0_8px_32px_rgba(255,255,255,0.1)]"></div>
            
            {/* Inner White Solid Layer */}
            <div className="absolute inset-[8px] bg-white/50 rounded-[28px] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"></div>

            {/* Content */}
            <div className="relative p-6 text-center">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                NS Apps is an innovation-driven company delivering interactive, 
                secure, and scalable digital solutions for your business.
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {/* Portfolio Button */}
            <motion.button
              onClick={openPortfolio}
              className="relative group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer Transparent Layer with White Border */}
              <div className="absolute inset-0 bg-transparent backdrop-blur-sm rounded-full border-2 border-white/60 shadow-[0_8px_32px_rgba(255,255,255,0.1)] group-hover:border-white/80 group-hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] transition-all duration-300"></div>
              
              {/* Inner White Solid Layer */}
              <div className="absolute inset-[4px] bg-white rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:bg-white/95 transition-all duration-300"></div>
              
              {/* Content */}
              <span className="relative z-10 px-10 py-4 text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 flex items-center">
                Portfolio
              </span>
            </motion.button>
            
            {/* Connect Button */}
            <motion.button
              onClick={openConnect}
              className="relative group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer Transparent Layer with White Border */}
              <div className="absolute inset-0 bg-transparent backdrop-blur-sm rounded-full border-2 border-white/60 shadow-[0_8px_32px_rgba(255,255,255,0.1)] group-hover:border-white/80 group-hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)] transition-all duration-300"></div>
              
              {/* Inner Black Solid Layer */}
              <div className="absolute inset-[4px] bg-gray-900 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.2)] group-hover:bg-gray-800 transition-all duration-300"></div>
              
              {/* Content */}
              <span className="relative z-10 px-10 py-4 text-lg font-semibold text-white transition-colors duration-300 flex items-center space-x-2">
                <span>Connect</span>
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.839l.707-.707a4 4 0 105.656-5.656l-4 4z" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Keep your 3D Spline model intact */}
        <Spline scene="https://prod.spline.design/qBXYgDd7378mKcb0/scene.splinecode" />
      </motion.section>

      {/* Panel Components */}
      <AnimatePresence>
        <ConnectPanel isOpen={isConnectOpen} onClose={closeConnect} />
        <PortfolioPanel isOpen={isPortfolioOpen} onClose={closePortfolio} />
      </AnimatePresence>
    </div>
  );
};

// PressureText component with solid black text
const PressureText = ({ text, className }) => {
  const containerRef = useRef(null);
  const spansRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const chars = text.split('');

  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const ease = 0.18;
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) * ease;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) * ease;

      spansRef.current.forEach((span) => {
        if (!span) return;
        
        const rect = span.getBoundingClientRect();
        const center = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };

        const distance = dist(mouseRef.current, center);
        const maxDist = 160;
        const minDist = 0;

        const ratio = Math.max(0, Math.min(1, (maxDist - distance) / (maxDist - minDist)));
        const easedRatio = ratio * ratio * (3 - 2 * ratio);

        const weight = 650 + easedRatio * 250;
        const width = 95 + easedRatio * 15;
        const italic = easedRatio * 4;

        span.style.fontVariationSettings = `"wght" ${weight}, "wdth" ${width}, "ital" ${italic}`;
        span.style.fontWeight = weight;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <h1 
      ref={containerRef}
      className={`${className} font-black leading-tight flex justify-center flex-wrap`}
      style={{
        fontVariationSettings: '"wght" 650, "wdth" 100, "ital" 0',
        transition: 'font-variation-settings 0.12s ease-out'
      }}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          ref={(el) => (spansRef.current[i] = el)}
          className="inline-block text-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          style={{
            fontVariationSettings: '"wght" 650, "wdth" 100, "ital" 0',
            transition: 'font-variation-settings 0.12s ease-out',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            willChange: 'font-variation-settings',
            transform: 'translateZ(0)'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default Hero;
