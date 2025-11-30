"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface ContainerScrollProps {
  children: ReactNode;
}

export const ContainerScroll = ({ children }: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on element position
      // Start animation when element enters viewport, end when it's at the top
      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.3;

      const progress = Math.min(
        Math.max((startPoint - rect.top) / (startPoint - endPoint), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transforms based on scroll progress
  const rotateX = 25 - scrollProgress * 25; // 25deg to 0deg
  const scale = 0.9 + scrollProgress * 0.1; // 0.9 to 1
  const translateY = 50 - scrollProgress * 50; // 50px to 0px

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        perspective: "1200px",
      }}
    >
      <div
        className="w-full transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) scale(${scale}) translateY(${translateY}px)`,
          transformOrigin: "center top",
        }}
      >
        {children}
      </div>
    </div>
  );
};
