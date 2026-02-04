"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroPrototyping = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground p-4 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
      <div className="text-center max-w-5xl mx-auto relative z-20">

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-primary"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Turning designs into working prototypes.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl mx-auto opacity-90 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Prototyping is where designs are tested in the real world. At MLWORKx,
          we build and validate functional prototypes that help teams understand
          performance, reliability, and production readiness.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Link to="/start-project">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discuss prototyping requirements
            </Button>
          </Link>
        </motion.div>

        {/* Narrative Block */}
        <motion.div
          className="mt-20 md:mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What prototyping means at MLWORKx.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Prototyping is about learning early and reducing uncertainty. Treat
            every prototype as a critical step toward a reliable and
            manufacturable product.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroPrototyping;