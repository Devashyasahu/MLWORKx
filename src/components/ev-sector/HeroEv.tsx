"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroEv = () => {
  return (
    <section id="ev-hero" className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground p-4 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-[var(--ev-accent)]/20">
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Building EV systems that are ready to scale.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl mx-auto opacity-90 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          Electric vehicle products operate in demanding conditions. They must be reliable, safe, and ready for scale from day one. At MLWORKx, we support EV teams across product design, prototyping, and mass production.
        </motion.p>

        {/* EV Challenges Section (moved before CTA for better flow) */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What makes EV development challenging.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            EV development is characterized by the complex integration of{" "}
            <span className="font-bold text-primary">
              hardware, electronics, and software
            </span>
            . Small issues at early stages turn into large risks at scale,
            demanding precision and foresight.
          </p>
        </motion.div>

        {/* CTA (placed after challenges) */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          viewport={{ once: true }}
        >
          {/* Primary CTA → Start Project Form Page */}
          <Link to="/start-project">
            <Button size="lg" className="rounded-full px-8 md:px-10">
              Start an EV inquiry
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroEv;