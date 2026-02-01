"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroProductDesign = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground p-4 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
      <div className="text-center max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-primary"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          We help you design products that can actually be built.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl mx-auto opacity-90 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Our product design services are centered on scalability, ensuring your
          innovations move seamlessly from concept to production-ready engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Link to="#inquiry-form">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Talk to our team
            </Button>
          </Link>

          <Link to="#design-process">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See our design process
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroProductDesign;