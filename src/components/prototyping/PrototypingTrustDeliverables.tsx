"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TestTube,
  TrendingUp,
  Factory,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

/* ------------------ DATA ------------------ */

const trustPoints = [
  {
    title: "In-House Testing & Validation",
    description:
      "Rigorous testing in our facilities ensures prototypes meet performance and reliability benchmarks.",
    icon: TestTube,
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Leveraging insights from diverse sectors to build robust and adaptable prototypes.",
    icon: TrendingUp,
  },
  {
    title: "Clear Path to Production",
    description:
      "Every prototype is built with manufacturability in mind, streamlining the transition to mass production.",
    icon: Factory,
  },
];

const deliverables = [
  { name: "Fully Assembled Prototypes", icon: CheckCircle },
  { name: "Tested & Validated Samples", icon: TestTube },
  { name: "Insights for Production Readiness", icon: Lightbulb },
  { name: "Clear Next Steps for Refinement or Scale", icon: ArrowRight },
];

/* ------------------ COMPONENT ------------------ */

const PrototypingTrustDeliverables = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ================= Heading ================= */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Why Prototype with MLXWORKX?
          </h2>

          <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto">
            Reduce uncertainty before committing to scale.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            Our integrated prototyping approach ensures every build informs smarter
            engineering and production decisions.
          </p>
        </motion.div>

        {/* ================= TRUST POINTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="standard-card p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <point.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3">
                {point.title}
              </h3>

              <p className="text-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= DELIVERABLES HEADING ================= */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Prototyping Deliverables
          </h2>

          <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto">
            Tangible outputs for confident technical decisions.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            Every engagement results in clear technical assets — not ambiguity.
          </p>
        </motion.div>

        {/* ================= DELIVERABLES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.name}
              className="standard-card p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-accent/20 text-accent rounded-full mb-4">
                <item.icon className="h-7 w-7" />
              </div>

              <p className="text-lg font-semibold text-foreground">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrototypingTrustDeliverables;
