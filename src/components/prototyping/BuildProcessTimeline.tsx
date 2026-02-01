"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Settings, TestTube, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const buildSteps = [
  {
    step: "01",
    title: "Component Integration",
    description:
      "Seamless integration of electronics, mechanical parts, and enclosures.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Assembly & Fabrication",
    description:
      "Precision assembly and fabrication into working samples.",
    icon: Package,
  },
  {
    step: "03",
    title: "Real-World Evaluation",
    description:
      "Rigorous testing and evaluation under real-world conditions.",
    icon: TestTube,
  },
  {
    step: "04",
    title: "Feedback & Refinement",
    description:
      "Collecting insights for iterative refinement and optimization.",
    icon: Truck,
  },
];

const BuildProcessTimeline = () => {
  return (
    <section className="bg-background py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] relative z-0 border-b border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            How Prototyping Comes to Life
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            An integrated approach to functional prototype development.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We focus on the seamless integration of all elements, followed by
            rigorous real-world evaluation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">

          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border hidden md:block" />

          {buildSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className={cn(
                "relative flex flex-col md:flex-row items-center w-full max-w-4xl my-8 md:my-12",
                index % 2 === 0 ? "md:pr-20" : "md:pl-20"
              )}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Step Marker */}
              <div className="absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center z-10 shadow-md mb-4 md:mb-0 font-mono text-lg font-bold">
                {step.step}
              </div>

              {/* Card */}
              <div
                className={cn(
                  "bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/30 w-full md:w-5/12",
                  index % 2 === 0
                    ? "md:text-right md:items-end"
                    : "md:text-left md:items-start"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="text-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildProcessTimeline;