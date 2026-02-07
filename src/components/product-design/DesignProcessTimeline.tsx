"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  GitBranch,
  HardHat,
  CheckCircle,
  Factory,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------ Data ------------------ */

const designSteps = [
  {
    step: "01",
    title: "Requirements Intake",
    description:
      "Detailed collection of functional, performance, and regulatory specifications.",
    icon: FileText,
  },
  {
    step: "02",
    title: "System Architecture",
    description:
      "Defining the core structure, components, and interfaces of your product.",
    icon: GitBranch,
  },
  {
    step: "03",
    title: "Prototyping & Iteration",
    description:
      "Rapid development of functional prototypes for testing and refinement.",
    icon: HardHat,
  },
  {
    step: "04",
    title: "Validation & Testing",
    description:
      "Rigorous testing against requirements, ensuring reliability and compliance.",
    icon: CheckCircle,
  },
  {
    step: "05",
    title: "Production Readiness",
    description:
      "Finalizing designs, documentation, and tooling for seamless manufacturing.",
    icon: Factory,
  },
];

/* ------------------ Section ------------------ */

const DesignProcessTimeline = () => {
  return (
    <section
      id="design-process"
      className="
        bg-background
        py-24 md:py-32
        rounded-b-[3rem] md:rounded-b-[6rem]
        relative z-0
        border-b border-accent/20
      "
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* ================= Heading ================= */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Our Design Process
          </h2>

          <p className="text-xl md:text-2xl text-foreground font-semibold max-w-3xl mx-auto">
            An engineering flowchart for predictable product development.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We follow a structured, iterative approach to ensure your product is
            designed for success, from concept to production.
          </p>
        </motion.div>

        {/* ================= Timeline ================= */}
        <div className="relative flex flex-col items-center">

          {/* Glowing vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 hidden md:block bg-border timeline-line-glow" />

          {designSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                className={cn(
                  "relative flex flex-col md:flex-row items-center w-full max-w-4xl my-10 md:my-14",
                  isEven ? "md:pr-20" : "md:pl-20"
                )}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateY: isEven ? -45 : 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.35 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Step Marker */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center z-10 shadow-md font-mono text-lg font-bold">
                  {step.step}
                </div>

                {/* Card */}
                <div
                  className={cn(
                    "timeline-glow bg-card p-8 rounded-3xl shadow-lg border border-accent/30 w-full md:w-5/12",
                    isEven
                      ? "md:text-right md:ml-auto"
                      : "md:text-left md:mr-auto"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DesignProcessTimeline;
