import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TopNavbar = () => {
  const navRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  const navItems = [
    {
      name: "Home",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: "Cart",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
        </svg>
      )
    },
    {
      name: "Orders",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: "Profile",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div
      ref={navRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[600px]"
    >
      {/* Double Div Structure */}
      <div className="relative">
        {/* Outer Transparent Layer with White Border */}
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm rounded-full border-1 border-white shadow-[0_8px_32px_rgba(255,255,255,0.1)]"></div>
        
        {/* Inner White Solid Layer */}
        <div className="absolute inset-[6px] bg-white/50 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)]"></div>
        
        {/* Content Layer */}
        <div className="relative px-8 py-2.5 flex items-center justify-between transition-all duration-300">
          {/* Left side navigation items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(item.name)}
                className={`
                  relative flex flex-col items-center justify-center
                  px-3 py-1.5 min-w-[60px]
                  transition-all duration-300 ease-out
                  group
                  ${activeTab === item.name 
                    ? 'text-gray-800' 
                    : 'text-gray-400 hover:text-gray-700'
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  transition-all duration-300
                  ${activeTab === item.name 
                    ? 'scale-105 drop-shadow-sm' 
                    : 'group-hover:scale-105 group-hover:drop-shadow-sm'
                  }
                `}>
                  {React.cloneElement(item.icon, {
                    strokeWidth: activeTab === item.name ? 2 : 1.5,
                    className: `w-5 h-5 transition-all duration-300 ${
                      activeTab === item.name 
                        ? 'stroke-2' 
                        : 'group-hover:stroke-2'
                    }`
                  })}
                </div>
                
                {/* Label */}
                <span className={`
                  text-xs font-medium mt-0.5
                  transition-all duration-300
                  ${activeTab === item.name 
                    ? 'opacity-100 font-semibold' 
                    : 'opacity-60 group-hover:opacity-90 group-hover:font-medium'
                  }
                `}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right side Connect button with same effect */}
          <button className="relative group">
            {/* Outer Transparent Layer */}
            <div className="absolute inset-0 bg-transparent rounded-full border-2 border-gray-900/60 shadow-[0_4px_16px_rgba(0,0,0,0.1)] group-hover:border-gray-900/80 transition-all duration-300"></div>
            
            {/* Inner Black Solid Layer */}
            <div className="absolute inset-[3px] bg-gray-900 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] group-hover:bg-gray-800 transition-all duration-300"></div>
            
            {/* Content */}
            <span className="relative z-10 px-5 py-2 text-sm font-semibold text-white flex items-center space-x-2 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" 
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m0-3.839l.707-.707a4 4 0 105.656-5.656l-4 4z" />
              </svg>
              <span>Connect</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;