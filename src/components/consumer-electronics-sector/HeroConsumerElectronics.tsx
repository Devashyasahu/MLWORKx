"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Using react-router-dom as per original code

const HeroConsumerElectronics = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground p-4 overflow-hidden rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-primary">
          Building consumer electronics that are ready for the real world.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 max-w-3xl mx-auto opacity-90 text-foreground">
          Consumer electronics move fast. At MLWORKx, we support consumer electronics teams
          through product design, prototyping, and mass production.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/start-project">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start a conversation
            </Button>
          </Link>
        </div>

        <div className="mt-20 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What makes consumer electronics challenging.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Consumer electronics development is characterized by the pressure of{" "}
            <span className="font-bold text-primary">mass adoption</span> and{" "}
            <span className="font-bold text-primary">constant pressure</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroConsumerElectronics;