"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* ------------------ Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ Hero Section ------------------ */

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause video when hero leaves viewport
  useEffect(() => {
    const section = document.getElementById("hero-section");
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? video.play() : video.pause();
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero-section"
      className="relative h-[100svh] overflow-hidden border-b border-accent/20"
    >
      {/* 🎥 Video (SCOPED to hero only) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/videos/pcb-assembly.mp4" type="video/mp4" />
      </video>

      {/* Overlay (ONLY hero) */}
      <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center pt-24">
        <motion.div
          className="text-center max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white"
          >
            Manufacturing.
            <br />
            Without sourcing chaos.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl font-medium mb-6 max-w-2xl mx-auto text-gray-200"
          >
            MLWORKx helps you move from requirement to reliable production through
            a trusted manufacturing ecosystem.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg mb-10 text-gray-400"
          >
            Built for startups, OEMs, and enterprise teams.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/start-project">
              <Button size="lg" className="rounded-full px-8 md:px-10">
                Start a manufacturing inquiry
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 md:px-10 text-white border-white/30"
            >
              See how it works
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;