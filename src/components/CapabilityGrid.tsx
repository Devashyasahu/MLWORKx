"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui";
import { Play } from "lucide-react";
import { showError } from "@/utils/toast";

/* ------------------ Types ------------------ */

interface ServiceItem {
  tag: string;
  headline: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
}

interface VideoProps {
  videoSrc: string;
  posterSrc?: string;
}

/* ------------------ Data ------------------ */

const services: ServiceItem[] = [
  {
    tag: "NODE 01",
    headline: "CNC Machining",
    description: "Precision parts with predictable lead times.",
    videoSrc: "/videos/video1.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: "NODE 02",
    headline: "Sheet Metal Fabrication",
    description: "From rapid prototyping to scalable production.",
    videoSrc: "/videos/video2.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: "NODE 03",
    headline: "Casting & Forging",
    description: "Reliable sourcing with consistent quality control.",
    videoSrc: "/videos/video3.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: "NODE 04",
    headline: "Assembly & Finishing",
    description: "End-to-end manufacturing support.",
    videoSrc: "/videos/video4.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: "NODE 05",
    headline: "Custom Manufacturing",
    description: "Built to specification, not templates.",
    videoSrc: "/videos/video1.mp4",
    posterSrc: "/images/robot.jpg",
  },
];

/* ------------------ Global Video Lock ------------------ */

let activeVideo: HTMLVideoElement | null = null;

/* ------------------ Main Component ------------------ */

const CapabilityGrid = () => {
  return (
    <section className="bg-background py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8">
        {services.map((service, index) => (
          <motion.div
            key={service.tag}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center",
              index % 2 === 1 && "md:grid-flow-col-dense",
              index > 0 && "mt-24 md:mt-32"
            )}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Text */}
            <div
              className={cn(
                "flex flex-col justify-center",
                index % 2 === 1 ? "md:order-2" : "md:order-1"
              )}
            >
              <p className="font-mono text-accent text-sm uppercase mb-2">
                {service.tag}
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase text-primary mb-6 leading-tight">
                {service.headline}
              </h2>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Video */}
            <div
              className={cn(
                "relative w-full aspect-video rounded-[48px] border-8 border-card shadow-xl overflow-hidden",
                index % 2 === 1 ? "md:order-1" : "md:order-2"
              )}
            >
              <UltraOptimizedVideo
                videoSrc={service.videoSrc}
                posterSrc={service.posterSrc}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ------------------ Ultra Optimized Video ------------------ */

const UltraOptimizedVideo = ({ videoSrc, posterSrc }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  const idle =
    typeof window !== "undefined" && "requestIdleCallback" in window
      ? (cb: () => void) =>
          (window as any).requestIdleCallback(cb)
      : (cb: () => void) => setTimeout(cb, 200);

  const startPlayback = () => {
    if (hasError) return;

    setMounted(true);

    idle(() => {
      if (!videoRef.current) return;

      if (activeVideo && activeVideo !== videoRef.current) {
        activeVideo.pause();
      }

      videoRef.current
        .play()
        .then(() => {
          activeVideo = videoRef.current;
          setIsPlaying(true);
        })
        .catch(() => {});
    });
  };

  const stopPlayback = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full h-full bg-black/5">
      {/* Poster only */}
      {!mounted && posterSrc && (
        <>
          <img
            src={posterSrc}
            alt="Capability preview"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />

          <button
            onClick={startPlayback}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
            aria-label="Play video"
          >
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
              <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
            </div>
          </button>
        </>
      )}

      {/* Video mounts only after interaction */}
      {mounted && !hasError && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-500",
            isPlaying ? "grayscale-0" : "grayscale"
          )}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            setHasError(true);
            showError("Failed to load video");
          }}
          onMouseEnter={!isTouch ? startPlayback : undefined}
          onMouseLeave={!isTouch ? stopPlayback : undefined}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-destructive text-sm">
          Video unavailable
        </div>
      )}
    </div>
  );
};

export default CapabilityGrid;