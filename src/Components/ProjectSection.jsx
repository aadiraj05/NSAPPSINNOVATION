import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const containerRef = useRef(null);
  const cylinderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('product'); // 'product' or 'service'
  const rotateTimelineRef = useRef(null);

  const projectData = {
    product: [
      {
        title: "VENDOR DASHBOARD",
        category: "PRODUCT",
        stat: "100%",
        statLabel: "streamlined operations",
        description: "Complete vendor management system with intuitive UI and powerful analytics for business growth.",
        color: "#a92b4e"
      },
      {
        title: "NS APPS MOBILE",
        category: "PRODUCT",
        stat: "50K+",
        statLabel: "active users",
        description: "Android application providing seamless user experience with modern design patterns.",
        color: "#7B9FFF"
      },
      {
        title: "ANALYTICS PLATFORM",
        category: "PRODUCT",
        stat: "Real-time",
        statLabel: "data visualization",
        description: "Comprehensive analytics dashboard with live metrics and customizable reporting.",
        color: "#9FE870"
      },
      {
        title: "E-COMMERCE SUITE",
        category: "PRODUCT",
        stat: "24/7",
        statLabel: "automated processing",
        description: "Full-featured online store with inventory management and payment integration.",
        color: "#FFB87B"
      },
      {
        title: "CRM SYSTEM",
        category: "PRODUCT",
        stat: "360°",
        statLabel: "customer view",
        description: "Manage customer relationships with automated workflows and communication tools.",
        color: "#FF7B7B"
      },
      {
        title: "PROJECT TRACKER",
        category: "PRODUCT",
        stat: "AI-powered",
        statLabel: "task management",
        description: "Intelligent project management tool with team collaboration features.",
        color: "#B87BFF"
      }
    ],
    service: [
      {
        title: "WEB DEVELOPMENT",
        category: "SERVICE",
        stat: "25+",
        statLabel: "projects delivered",
        description: "Custom web applications built with React, Node.js, and modern tech stack.",
        color: "#a92b4e"
      },
      {
        title: "UI/UX DESIGN",
        category: "SERVICE",
        stat: "100%",
        statLabel: "client satisfaction",
        description: "Creating beautiful, intuitive interfaces that users love to interact with.",
        color: "#9FE870"
      },
      {
        title: "BRAND IDENTITY",
        category: "SERVICE",
        stat: "360°",
        statLabel: "brand solutions",
        description: "Complete brand development from logo design to visual identity systems.",
        color: "#7B9FFF"
      },
      {
        title: "DIGITAL MARKETING",
        category: "SERVICE",
        stat: "3x",
        statLabel: "average growth rate",
        description: "Data-driven marketing strategies to boost your online presence.",
        color: "#FFB87B"
      },
      {
        title: "CONSULTING",
        category: "SERVICE",
        stat: "Expert",
        statLabel: "technical guidance",
        description: "Strategic technology consulting to scale your digital infrastructure.",
        color: "#B87BFF"
      },
      {
        title: "MAINTENANCE",
        category: "SERVICE",
        stat: "24/7",
        statLabel: "support available",
        description: "Ongoing support and maintenance to keep your applications running smoothly.",
        color: "#FF7B7B"
      }
    ]
  };

  const currentProjects = projectData[activeTab];

  const initializeCylinder = () => {
    const radius = 800;
    const angleStep = (2 * Math.PI) / currentProjects.length;
    const cards = cylinderRef.current?.querySelectorAll('.project-card');

    if (!cards) return;

    // Position cards in a cylinder
    cards.forEach((card, index) => {
      const angle = angleStep * index;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      const rotateY = -angle * (180 / Math.PI);

      gsap.set(card, {
        x,
        z,
        rotateY,
        transformOrigin: 'center center',
        opacity: 1
      });
    });

    // Kill existing timeline
    if (rotateTimelineRef.current) {
      rotateTimelineRef.current.kill();
    }

    // Auto-rotate animation
    rotateTimelineRef.current = gsap.timeline({ repeat: -1 });
    rotateTimelineRef.current.to(cylinderRef.current, {
      rotationY: 360,
      duration: 30,
      ease: 'none'
    });

    // Scroll trigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => rotateTimelineRef.current?.play(),
      onLeave: () => rotateTimelineRef.current?.pause(),
      onEnterBack: () => rotateTimelineRef.current?.play(),
      onLeaveBack: () => rotateTimelineRef.current?.pause()
    });
  };

  useEffect(() => {
    initializeCylinder();

    return () => {
      if (rotateTimelineRef.current) {
        rotateTimelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeTab]);

  const rotateToCard = (index) => {
    const angleStep = (2 * Math.PI) / currentProjects.length;
    const targetAngle = -index * angleStep * (180 / Math.PI);
    
    gsap.to(cylinderRef.current, {
      rotationY: targetAngle,
      duration: 1,
      ease: 'power2.out'
    });
    
    setActiveIndex(index);
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    // Fade out animation
    const cards = cylinderRef.current?.querySelectorAll('.project-card');
    gsap.to(cards, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        setActiveTab(tab);
        setActiveIndex(0);
        // Fade in will happen automatically with new cards
        gsap.fromTo(
          cylinderRef.current?.querySelectorAll('.project-card'),
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 }
        );
      }
    });
  };

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Our Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our creative solutions and innovative digital experiences
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => handleTabChange('product')}
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeTab === 'product'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-600'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleTabChange('service')}
            className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
              activeTab === 'service'
                ? 'bg-white text-black'
                : 'bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-600'
            }`}
          >
            Services
          </button>
        </div>

        {/* 3D Cylinder Container */}
        <div className="relative h-[600px] flex items-center justify-center perspective-[2000px]">
          <div 
            ref={cylinderRef}
            className="relative w-full h-full preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {currentProjects.map((project, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="project-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => rotateToCard(index)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-[350px] h-[500px] bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 hover:scale-105">
                  {/* Category Badge */}
                  <div 
                    className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 text-black"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </div>

                  {/* Project Title */}
                  <h3 
                    className="text-3xl font-bold mb-8"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>

                  {/* Stat */}
                  <div className="mb-8">
                    <div className="text-6xl font-bold mb-2">
                      {project.stat}
                    </div>
                    <div className="text-sm text-gray-400">
                      {project.statLabel}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* View More Button */}
                  <button 
                    className="w-full py-3 px-6 rounded-full border border-neutral-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
                  >
                    View {activeTab === 'product' ? 'Product' : 'Service'} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "See More" Floating Button */}
          <div className="absolute bottom-8 right-8">
            <button className="w-32 h-32 rounded-full bg-white text-black flex flex-col items-center justify-center font-bold text-sm hover:scale-110 transition-transform duration-300 shadow-2xl">
              <span>SEE MORE</span>
              <span className="text-2xl mt-1">↓</span>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {currentProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => rotateToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-white w-8' 
                  : 'bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Active Tab Indicator */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Showing {currentProjects.length} {activeTab === 'product' ? 'Products' : 'Services'}
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;
