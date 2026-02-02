"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroDefence = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground p-4 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
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
          Building defence systems with precision and reliability.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl mx-auto opacity-90 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          Defence products operate in high-stakes environments. Reliability,
          consistency, and compliance are not optional. At MLWORKx, we support
          defence and strategic programs through structured product development,
          prototyping, and manufacturing.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="#inquiry-form">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start a conversation
            </Button>
          </Link>
        </motion.div>

        {/* Defence Landscape */}
        <motion.div
          className="mt-20 md:mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What makes defence systems different.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Defence projects are characterized by{" "}
            <span className="font-bold text-primary">
              long validation cycles
            </span>{" "}
            and{" "}
            <span className="font-bold text-primary">
              demanding operational conditions
            </span>
            . Every component must meet stringent reliability, consistency, and
            compliance standards. Our approach is built to navigate these
            complexities with a serious and focused tone.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroDefence;