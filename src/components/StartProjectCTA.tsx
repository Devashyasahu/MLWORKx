"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StartProjectCTA = () => {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-accent/20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 md:px-8 text-center max-w-4xl"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
          Start Your Project
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-10">
          Have a manufacturing requirement?  
          Talk to our team and get expert guidance from day one.
        </p>

        <Link to="/start-project">
          <Button size="lg" className="rounded-full px-10">
            Get Started
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default StartProjectCTA;