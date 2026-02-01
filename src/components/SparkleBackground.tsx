"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparkleProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  duration?: number;
  className?: string;
}

const SparkleBackground: React.FC<SparkleProps> = ({
  count = 30,
  minSize = 1,
  maxSize = 3,
  duration = 3,
  className,
}) => {
  const sparkles = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * duration;
    const opacity = Math.random() * 0.5 + 0.2; // Random opacity between 0.2 and 0.7

    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-sparkle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          opacity: opacity,
          filter: `blur(${size / 4}px)`, // Subtle blur for glow effect
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [opacity, 0.1, opacity],
          scale: [0.5, 1, 0.5],
          y: [0, Math.random() * 20 - 10, 0], // Subtle vertical movement
          x: [0, Math.random() * 20 - 10, 0], // Subtle horizontal movement
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "easeOut",
          repeatType: "reverse",
        }}
      />
    );
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {sparkles}
    </div>
  );
};

export default SparkleBackground;