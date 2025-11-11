import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';


const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');
  const [activeSection, setActiveSection] = useState('designers');
  
  // Refs for scroll animations
  const whoWeAreRef = useRef(null);
  const isWhoWeAreInView = useInView(whoWeAreRef, { once: true, amount: 0.3 });


  const sections = [
    {
      id: 'designers',
      title: 'We are designers',
      description: 'We focus on process and value over hours in order to provide a tailor-made approach to meet your needs. From an idea to the ready solution. Through design, we create answers to important and unexpected problems.',
      services: ['Product Design', 'Software Development', 'Innovation Consulting']
    },
    {
      id: 'developers',
      title: 'We are developers',
      description: 'We build robust, scalable applications using cutting-edge technologies. Our development process ensures high-quality code, optimal performance, and seamless user experiences across all platforms.',
      services: ['Mobile App Development', 'Web Development', 'API Integration']
    },
    {
      id: 'innovators',
      title: 'We are innovators',
      description: 'We transform ideas into reality through strategic thinking and creative problem-solving. Our innovation consulting helps businesses stay ahead in the digital landscape.',
      services: ['Digital Strategy', 'Technology Consulting', 'Process Optimization']
    }
  ];


  // SVG Components with animations
  const DesignerSVG = () => (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      className="w-full h-full"
      initial="hidden"
      animate="visible"
    >
      <motion.rect
        x="50"
        y="40"
        width="40"
        height="80"
        rx="5"
        fill="#6366f1"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
        }}
      />
      <motion.rect
        x="100"
        y="30"
        width="40"
        height="90"
        rx="5"
        fill="#4f46e5"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }
        }}
      />
      <motion.path
        d="M180 50 Q200 30 220 50 Q240 70 220 90 Q200 110 180 90 Q160 70 180 50"
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: { pathLength: 1, opacity: 1, transition: { delay: 0.6, duration: 1.2 } }
        }}
      />
      <motion.circle
        cx="250"
        cy="100"
        r="20"
        fill="#6366f1"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.8, duration: 0.6 } }
        }}
      />
    </motion.svg>
  );


  const DeveloperSVG = () => (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      className="w-full h-full"
      initial="hidden"
      animate="visible"
    >
      <motion.rect
        x="40"
        y="40"
        width="80"
        height="15"
        rx="3"
        fill="#6366f1"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { delay: 0.2, duration: 0.8 } }
        }}
      />
      <motion.rect
        x="40"
        y="65"
        width="120"
        height="15"
        rx="3"
        fill="#4f46e5"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { delay: 0.4, duration: 0.8 } }
        }}
      />
      <motion.rect
        x="40"
        y="90"
        width="60"
        height="15"
        rx="3"
        fill="#6366f1"
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { delay: 0.6, duration: 0.8 } }
        }}
      />
      <motion.rect
        x="180"
        y="40"
        width="100"
        height="80"
        rx="8"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.6 } }
        }}
      />
      <motion.circle cx="195" cy="55" r="3" fill="#ff5f56" 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1.0, duration: 0.3 } }
        }}
      />
      <motion.circle cx="210" cy="55" r="3" fill="#ffbd2e"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1.1, duration: 0.3 } }
        }}
      />
      <motion.circle cx="225" cy="55" r="3" fill="#27ca3f"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 1.2, duration: 0.3 } }
        }}
      />
    </motion.svg>
  );


  const InnovatorSVG = () => (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      className="w-full h-full"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="150"
        cy="80"
        r="30"
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.6 } }
        }}
      />
      <motion.rect
        x="140"
        y="110"
        width="20"
        height="15"
        rx="2"
        fill="#4f46e5"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }
        }}
      />
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x1 = 150 + Math.cos(angle) * 45;
        const y1 = 80 + Math.sin(angle) * 45;
        const x2 = 150 + Math.cos(angle) * 60;
        const y2 = 80 + Math.sin(angle) * 60;
        
        return (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            variants={{
              hidden: { opacity: 0, pathLength: 0 },
              visible: { 
                opacity: 1, 
                pathLength: 1, 
                transition: { 
                  delay: 0.6 + i * 0.1, 
                  duration: 0.4 
                } 
              }
            }}
          />
        );
      })}
    </motion.svg>
  );


  const getSVGComponent = (sectionId) => {
    switch (sectionId) {
      case 'designers':
        return <DesignerSVG />;
      case 'developers':
        return <DeveloperSVG />;
      case 'innovators':
        return <InnovatorSVG />;
      default:
        return <DesignerSVG />;
    }
  };


  const currentSection = sections.find(section => section.id === activeSection);


  const whoWeAreContent = [
    {
      icon: '',
      text: 'NS Apps Innovations is a creative tech company focused on building modern websites, Android apps, and AI tools with exceptional design and performance.'
    },
    {
      text: "We're a passionate team of developers and designers who believe in blending innovation, creativity, and technology to craft experiences that truly stand out."
    },
    {
      text: 'Our goal is simple — to turn bold ideas into interactive, meaningful digital experiences that inspire.'
    }
  ];


  return (
    <section className="relative bg-gray-50 py-20 px-4 z-[50] ">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation with Animated Underlines */}
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-12">
            {/* WHO WE ARE Tab */}
            <button
              onClick={() => setActiveTab('who-we-are')}
              className="relative group"
            >
              <h3 className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeTab === 'who-we-are' ? 'text-gray-900' : 'text-gray-400'
              } group-hover:text-gray-900`}>
                WHO WE ARE
              </h3>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-500"
                initial={false}
                animate={{
                  scaleX: activeTab === 'who-we-are' ? 1 : 0,
                  originX: 0
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: activeTab === 'who-we-are' ? 0 : 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{ originX: 0 }}
              />
            </button>


            {/* WHAT WE DO Tab */}
            <button
              onClick={() => setActiveTab('what-we-do')}
              className="relative group"
            >
              <h3 className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeTab === 'what-we-do' ? 'text-gray-900' : 'text-gray-400'
              } group-hover:text-gray-900`}>
                WHAT WE DO
              </h3>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-500"
                initial={false}
                animate={{
                  scaleX: activeTab === 'what-we-do' ? 1 : 0,
                  originX: 0
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: activeTab === 'what-we-do' ? 0 : 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{ originX: 0 }}
              />
            </button>
          </div>
        </motion.div>


        {/* Content Area */}
        <AnimatePresence mode="wait">
          {/* WHO WE ARE CONTENT */}
          {activeTab === 'who-we-are' && (
            <motion.div
              key="who-we-are"
              ref={whoWeAreRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              {/* Left Content */}
              <div className="space-y-6 pt-16">
                {whoWeAreContent.map((item, index) => (
                  <motion.p
                    key={index}
                    className="text-base text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isWhoWeAreInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.text}
                  </motion.p>
                ))}
              </div>


              {/* Right Side - Logo Space */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isWhoWeAreInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    {/* Logo Placeholder */}
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-white text-6xl font-black">NS</span>
                    </div>
                    <p className="mt-8 text-2xl font-bold text-gray-900">NS Apps Innovations</p>
                    <p className="mt-2 text-sm text-gray-500 uppercase tracking-wider">Building the Future</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}


          {/* WHAT WE DO CONTENT */}
          {activeTab === 'what-we-do' && (
            <motion.div
              key="what-we-do"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left Content */}
              <motion.div className="space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-5xl md:text-6xl font-normal text-black mb-8 leading-tight">
                      {currentSection.title}
                    </h2>
                    <p className="text-base text-gray-500 leading-relaxed mb-12 max-w-md">
                      {currentSection.description}
                    </p>
                    
                    <motion.button 
                      className="inline-flex items-center text-black font-medium text-base hover:text-indigo-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more 
                      <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </AnimatePresence>


                {/* Service Navigation */}
                <div className="space-y-6 pt-16">
                  {currentSection.services.map((service, index) => (
                    <motion.div
                      key={service}
                      className="text-gray-400 font-normal text-base cursor-pointer hover:text-indigo-600 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      onClick={() => {
                        if (index === 0 && activeSection !== 'designers') setActiveSection('designers');
                        if (index === 1 && activeSection !== 'developers') setActiveSection('developers');
                        if (index === 2 && activeSection !== 'innovators') setActiveSection('innovators');
                      }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </div>
              </motion.div>


              {/* Right SVG Area */}
              <div className="relative">
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="aspect-[3/2] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        {getSVGComponent(activeSection)}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};


export default AboutUsSection;
