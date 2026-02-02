"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Factory, Zap } from "lucide-react";

const values = [
  {
    title: "Decisions That Hold Up",
    description:
      "Engineering and design choices made for long-term performance and reliability in demanding EV environments.",
    icon: CheckCircle,
  },
  {
    title: "Safety & Reliability by Design",
    description:
      "Integrating safety protocols and robust design principles from the earliest stages of development.",
    icon: Shield,
  },
];

const differentiators = [
  {
    title: "Manufacturing-First Mindset",
    description:
      "Every design and prototype considers mass production implications, reducing future roadblocks.",
    icon: Factory,
  },
  {
    title: "Experience Across EV Electronics",
    description:
      "Proven expertise in the complex interplay of hardware, firmware, and software in electric vehicles.",
    icon: Zap,
  },
];

const ApproachDifferentiationEv = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10 border-t border-[var(--ev-accent)]/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Our Approach */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Our approach to EV projects.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Built on a foundation of safety, reliability, and scalability.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--ev-accent)]/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[var(--ev-accent)] text-[var(--ev-accent-foreground)] rounded-full mb-6 shadow-md">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Why EV teams choose MLXWORKX.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our manufacturing-first mindset and deep expertise in EV electronics set us apart.
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {differentiators.map((diff, i) => (
            <motion.div
              key={diff.title}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--ev-accent)]/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[var(--ev-accent)] text-[var(--ev-accent-foreground)] rounded-full mb-6 shadow-md">
                <diff.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {diff.title}
              </h3>
              <p className="text-foreground">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApproachDifferentiationEv;