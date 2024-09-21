"use client";

import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

const Fala = ({ animationData }) => {
  const containerRef = useRef(null);
  const animationInstance = useRef(null);
  const lastScrollTop = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    animationInstance.current = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const direction = st > lastScrollTop.current ? "down" : "up";
      lastScrollTop.current = st <= 0 ? 0 : st;

      if (!isScrolling.current) {
        isScrolling.current = true;
      }

      clearTimeout(isScrolling.current);
      isScrolling.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150); // Adjust the timeout as needed

      const currentFrame = animationInstance.current.currentFrame;
      const totalFrames = animationInstance.current.totalFrames;

      if (direction === "down") {
        if (currentFrame < totalFrames - 1) {
          animationInstance.current.goToAndStop(currentFrame + 1, true);
        }
      } else {
        if (currentFrame > 0) {
          animationInstance.current.goToAndStop(currentFrame - 1, true);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      },
      {
        threshold: 0.5, // Adjust based on when you want the animation to trigger
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [animationData]);

  return <div className="mt-0 xl:mt-[-120px]" ref={containerRef} />;
};

export default Fala;
