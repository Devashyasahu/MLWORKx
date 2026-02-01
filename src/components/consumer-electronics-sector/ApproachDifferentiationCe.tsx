"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  CheckCircle,
  Lightbulb,
  Factory,
  LucideIcon,
} from "lucide-react";

/* ------------------ Data ------------------ */

const values = [
  {
    id: "speed-reliability",
    title: "Balancing Speed & Reliability",
    description:
      "Delivering market-ready products quickly without compromising on quality or performance.",
    icon: Gauge,
  },
  {
    id: "end-launch-decisions",
    title: "Decisions for the End Launch",
    description:
      "Every design and production choice is made to avoid rework and ensure a smooth product launch.",
    icon: CheckCircle,
  },
];

const differentiators = [
  {
    id: "manufacturing-first",
    title: "Manufacturing-First Mindset",
    description:
      "Our design and engineering processes are always geared toward efficient, scalable mass production.",
    icon: Factory,
  },
  {
    id: "end-to-end-support",
    title: "Support from Early Ideas to Scale",
    description:
      "A single partner from concept development through high-volume manufacturing.",
    icon: Lightbulb,
  },
];

/* ------------------ Types ------------------ */

type FeatureCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
};

/* ------------------ Components ------------------ */

const FeatureCard = ({
  title,
  description,
  Icon,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent text-accent-foreground shadow-md">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="text-2xl font-bold text-primary mb-3">
        {title}
      </h3>

      <p className="text-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

/* ------------------ Section ------------------ */

const ApproachDifferentiationCe = () => {
  return (
    <section className="relative bg-secondary py-24 md:py-32 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Our approach to consumer electronics.
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground font-semibold">
            Balancing speed and reliability with the end launch in mind.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-28">
          {values.map((item, i) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Differentiation */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Why CE teams choose MLXWORKX.
          </h2>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground font-semibold">
            Manufacturing-first thinking with end-to-end execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {differentiators.map((item, i) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              delay={i * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApproachDifferentiationCe;