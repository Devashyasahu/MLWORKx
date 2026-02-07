"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Factory,
  TrendingUp,
} from "lucide-react";

const signals = [
  { label: "Predictable Lead Times", icon: CheckCircle },
  { label: "Quality Locked", icon: ShieldCheck },
  { label: "Multi-Factory Scale", icon: Factory },
  { label: "Volume Ready", icon: TrendingUp },
];

const HeroMassProduction = () => {
  return (
    <section
      className="
        hero-industrial
        relative min-h-[80vh]
        flex items-center justify-center
        bg-background text-foreground
        p-4 overflow-hidden
        rounded-b-[3rem] md:rounded-b-[6rem]
        border-b border-accent/20
      "
    >
      <motion.div
        className="text-center max-w-5xl mx-auto relative z-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-primary">
          Take your product to scale.
          <br />
          Deliver with confidence.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-14 max-w-3xl mx-auto text-foreground/90">
          This is where products stop being plans and start becoming shipments.
          At MLXWORKX, mass production is about scaling without losing control.
        </p>

        {/* === SYSTEM MOTION STRIP === */}
        <div className="hero-signal max-w-full">
          <div className="hero-signal-track">
            {[...signals, ...signals].map(({ label, icon: Icon }, idx) => (
              <div key={idx} className="hero-signal-item">
                <Icon className="h-4 w-4 text-accent" />
                <span className="text-sm md:text-base">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Anchor */}
        <div className="mt-20 md:mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What mass production means at MLXWORKX
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground">
            From{" "}
            <span className="font-semibold text-primary">
              vendor chaos
            </span>{" "}
            to{" "}
            <span className="font-semibold text-primary">
              data-driven execution
            </span>.
            Our system ensures production remains predictable — even at scale.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroMassProduction;
