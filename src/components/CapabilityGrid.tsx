"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui";
import { showError } from "@/utils/toast";
import { Play } from "lucide-react";

/* ------------------ Types ------------------ */

interface ServiceItem {
  tag: string;
  headline: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
}

/* ------------------ Data ------------------ */

const services: ServiceItem[] = [
  {
    tag: " NODE 01",
    headline: "CNC Machining",
    description: "Precision parts with predictable lead times.",
    videoSrc: "/videos/video1.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: " NODE 02",
    headline: "Sheet Metal Fabrication",
    description: "From rapid prototyping to scalable production.",
    videoSrc: "/videos/video2.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: " NODE 03",
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

/* ------------------ Component ------------------ */

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
            viewport={{ once: true, amount: 0.3 }}
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
                "relative w-full aspect-video rounded-[48px] border-8 border-card shadow-xl overflow-hidden group",
                index % 2 === 1 ? "md:order-1" : "md:order-2"
              )}
            >
              <VideoPlayer videoSrc={service.videoSrc} posterSrc={service.posterSrc} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ------------------ Video Player ------------------ */

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
}

const VideoPlayer = ({ videoSrc, posterSrc }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStartedPlayback, setHasStartedPlayback] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [preloadStarted, setPreloadStarted] = useState(false);

  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  // Intersection Observer with 200px margin for early preload
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-play on mobile/touch or when it comes into view
          if (videoRef.current && !hasError) {
            videoRef.current.play().catch(() => {
              // Autoplay might be blocked; user can hover to play
            });
            setHasStartedPlayback(true);
            setIsPlaying(true);
          }
        } else {
          // Pause when out of view (optional, for performance)
          if (videoRef.current && !isTouch) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "200px" // Start loading 200px before visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasError, isTouch]);

  const play = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.play();
      setHasStartedPlayback(true);
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (videoRef.current && !hasError) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlayButtonClick = () => {
    play();
  };

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-[40px]" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-destructive/10 text-destructive rounded-[40px]">
          <p className="text-sm font-medium">Video failed to load</p>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            src={isVisible ? videoSrc : undefined}
            poster={posterSrc}
            loop
            muted
            playsInline
            preload={isVisible ? "auto" : "metadata"}
            className={cn(
              "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
              showError(`Failed to load video: ${videoSrc}`);
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Play Button Overlay - Always Visible Until Playing */}
          {!isPlaying && !isLoading && (
            <button
              onClick={handlePlayButtonClick}
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer"
              aria-label="Play video"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
              </div>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CapabilityGrid;