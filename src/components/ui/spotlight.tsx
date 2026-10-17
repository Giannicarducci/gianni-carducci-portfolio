'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from "../../lib/utils";

interface SpotlightProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export function Spotlight({
  className,
  size = 250,
  style
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }, []);

  useEffect(() => {
    const element = containerRef.current?.parentElement;
    if (!element) return;

    element.style.position = 'relative';
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_70%)] blur-lg transition-opacity duration-200',
        'from-white/30 via-white/15 to-transparent',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      animate={{
        x: position.x - size / 2,
        y: position.y - size / 2
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.5
      }}
      style={{
        width: size,
        height: size,
        ...style
      }}
    />
  );
}
