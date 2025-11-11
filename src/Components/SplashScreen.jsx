import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import texture from "/texture.png";

const SplashScreen = ({ onComplete }) => {
  const splashRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in the whole splash
    tl.fromTo(
      splashRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    ).fromTo(
      logoRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          // Blink effect
          gsap.to(logoRef.current, {
            opacity: 0.3,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    // Hide splash after 3s
    const timer = setTimeout(() => {
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >
      <img
        ref={logoRef}
        src={texture}
        alt="Logo"
        className="w-40 h-40"
      />
    </div>
  );
};

export default SplashScreen;
