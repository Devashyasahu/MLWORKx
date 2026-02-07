"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroProductDesign = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground px-4 py-28 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Eyebrow */}
        <motion.p
          className="font-mono text-accent uppercase tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Product Design
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-primary max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Product design that survives contact with manufacturing.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto mt-8 text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          We design custom electronics with real production constraints in mind —
          so your product doesn’t fall apart when it leaves the prototype stage.
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-24 h-px bg-accent/40 mx-auto my-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Narrative Block */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What product design means at MLXWORKX.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From{" "}
            <span className="font-semibold text-primary">
              early architecture decisions
            </span>{" "}
            to{" "}
            <span className="font-semibold text-primary">
              manufacturing-ready documentation
            </span>
            , our design process exists to eliminate surprises before production
            ever begins.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroProductDesign;
