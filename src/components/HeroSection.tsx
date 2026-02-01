"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

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

/* ------------------ Section ------------------ */

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/robot.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-primary drop-shadow-lg"
        >
          Manufacturing.
          <br />
          Without sourcing chaos.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl font-medium mb-6 max-w-2xl mx-auto text-foreground"
        >
          MLXWORKX helps you move from requirement to reliable production through
          a trusted manufacturing ecosystem.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg mb-10 text-muted-foreground"
        >
          Built for startups, OEMs, and enterprise teams.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 md:px-10">
            Start a manufacturing inquiry
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 md:px-10"
          >
            See how it works
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;