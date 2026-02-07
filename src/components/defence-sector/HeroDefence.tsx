"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroDefence = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background text-foreground px-6 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-20"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Authority Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-primary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Engineering defence systems
          <br />
          with discipline and precision.
        </motion.h1>

        {/* Context Statement */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium mb-20 max-w-4xl mx-auto text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          viewport={{ once: true }}
        >
          Defence programs demand absolute reliability, strict compliance, and
          long-term execution. MLXWORKX supports defence teams through structured
          product design, controlled prototyping, and disciplined manufacturing.
        </motion.p>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-accent mx-auto mb-16 opacity-60" />

        {/* Narrative Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Defence is not about speed.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            It is about{" "}
            <span className="font-semibold text-primary">
              predictability, validation, and trust
            </span>
            . Every system must perform under extreme conditions and over long
            operational lifecycles. Our approach is built to respect that reality.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroDefence;
