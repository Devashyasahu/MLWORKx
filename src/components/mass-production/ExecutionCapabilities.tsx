"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory, Workflow, ShieldCheck, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import BlueprintImage from "@/components/BlueprintImage";

const capabilities = [
  {
    title: "Vetted Supplier Network",
    description:
      "Access a global fleet of trusted, high-capacity manufacturing partners.",
    icon: Factory,
    image: "/placeholder.svg",
  },
  {
    title: "Automated Monitoring Systems",
    description:
      "Real-time tracking and automated alerts for production progress and quality.",
    icon: Workflow,
    image: "/placeholder.svg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Partner Matching",
    description:
      "Matching your project with the ideal manufacturing partners from our ecosystem.",
    icon: Factory,
  },
  {
    step: "02",
    title: "One-System Coordination",
    description:
      "All production activities coordinated through a single, transparent platform.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Visible Progress & Quality",
    description:
      "Track progress, quality checks, and timelines without manual vendor overhead.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Logistics & Delivery",
    description:
      "Streamlined shipping and delivery to your specified destination.",
    icon: Truck,
  },
];

const ExecutionCapabilities = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 relative z-10 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            Built for scale. Designed for control.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our system ensures your product scales efficiently with unwavering quality.
          </p>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-3xl shadow-lg border border-accent/30 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-border bg-secondary flex items-center justify-center">
                <BlueprintImage src={cap.image} alt={cap.title} className="rounded-xl" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <cap.icon className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {cap.title}
                </h3>
              </div>

              <p className="text-foreground text-base leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            Our Production Process
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            From partner matching to one-system coordination, full transparency.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">

          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border hidden md:block" />

          {processSteps.map((step, index) => (
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
              <div className="absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center z-10 shadow-md font-mono text-lg font-bold">
                {step.step}
              </div>

              {/* Card */}
              <div
                className={cn(
                  "bg-card p-8 rounded-3xl shadow-lg border border-accent/30 w-full md:w-5/12",
                  index % 2 === 0
                    ? "md:text-right md:items-end"
                    : "md:text-left md:items-start"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <step.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed">
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

export default ExecutionCapabilities;