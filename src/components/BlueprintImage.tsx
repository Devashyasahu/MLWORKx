"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BlueprintImageProps {
  src: string;
  alt: string;
  className?: string;
  dimensions?: string[]; // e.g., ["W: 120mm", "H: 80mm"]
}

const BlueprintImage: React.FC<BlueprintImageProps> = ({ src, alt, className, dimensions }) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden rounded-2xl", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
      />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div> {/* Tailwind grid pattern */}
      </div>
      {/* Technical dimensions in corners */}
      {dimensions && (
        <div className="absolute inset-0 p-4 text-xs font-mono text-accent opacity-70 pointer-events-none">
          {dimensions[0] && <span className="absolute top-4 left-4">{dimensions[0]}</span>}
          {dimensions[1] && <span className="absolute top-4 right-4">{dimensions[1]}</span>}
          {dimensions[2] && <span className="absolute bottom-4 left-4">{dimensions[2]}</span>}
          {dimensions[3] && <span className="absolute bottom-4 right-4">{dimensions[3]}</span>}
        </div>
      )}
    </div>
  );
};

export default BlueprintImage;