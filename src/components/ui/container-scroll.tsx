"use client";

import { useRef, useState, useEffect, useLayoutEffect, ReactNode } from "react";

interface ContainerScrollProps {
  children: ReactNode;
}

export const ContainerScroll = ({ children }: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number | null>(null);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useLayoutEffect(() => {
    const calculateProgress = () => {
      if (!containerRef.current) return 0;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.3;

      return Math.min(
        Math.max((startPoint - rect.top) / (startPoint - endPoint), 0),
        1
      );
    };

    // Set initial value synchronously before paint
    setScrollProgress(calculateProgress());
  }, []);

  useEffect(() => {
    // Trigger entrance animation after initial render
    if (scrollProgress !== null && !hasAnimatedIn) {
      const timer = setTimeout(() => setHasAnimatedIn(true), 50);
      return () => clearTimeout(timer);
    }
  }, [scrollProgress, hasAnimatedIn]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight;
      const endPoint = windowHeight * 0.3;

      const progress = Math.min(
        Math.max((startPoint - rect.top) / (startPoint - endPoint), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate transforms based on scroll progress
  const progress = scrollProgress ?? 0;
  const rotateX = 25 - progress * 25; // 25deg to 0deg
  const scale = 0.9 + progress * 0.1; // 0.9 to 1
  const translateY = 50 - progress * 50; // 50px to 0px

  // Entrance animation offset
  const entranceOffset = hasAnimatedIn ? 0 : 30;
  const entranceOpacity = hasAnimatedIn ? 1 : 0;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        perspective: "1200px",
      }}
    >
      <div
        className="w-full transition-[opacity,transform] duration-700 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) scale(${scale}) translateY(${translateY + entranceOffset}px)`,
          transformOrigin: "center top",
          opacity: scrollProgress === null ? 0 : entranceOpacity,
        }}
      >
        {children}
      </div>
    </div>
  );
};
