"use client";

import React, { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import {
  Factory,
  Workflow,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BlueprintImage from "@/components/BlueprintImage";

/* =========================
   DATA
   ========================= */

const capabilities = [
  {
    title: "Vetted Supplier Network",
    description:
      "Access a global fleet of trusted, high-capacity manufacturing partners.",
    icon: Factory,
    image: "/images/robot.jpg",
  },
  {
    title: "Automated Monitoring Systems",
    description:
      "Real-time tracking and automated alerts for production progress and quality.",
    icon: Workflow,
    image: "/images/robot.jpg",
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

/* =========================
   MOTION VARIANTS
   ========================= */

const flipFromLeft: Variants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const flipFromRight: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* =========================
   COMPONENT
   ========================= */

const ExecutionCapabilities = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  /* Scroll-linked line growth */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ================= Heading ================= */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Built for scale. Designed for control.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our system ensures your product scales efficiently with unwavering quality.
          </p>
        </motion.div>

        {/* ================= Capability Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="capability-card bg-card p-6 rounded-3xl border border-accent/30"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-border bg-secondary">
                <BlueprintImage
                  src={cap.image}
                  alt={cap.title}
                  className="capability-image w-full h-full object-cover"
                />
              </div>

              <div className="capability-content">
                <div className="flex items-center gap-3 mb-3">
                  <cap.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= Process Timeline ================= */}
        <div ref={timelineRef} className="relative flex flex-col items-center">

          {/* Scroll-linked glowing line */}
          <motion.div
            className="
              timeline-line-glow
              absolute left-1/2 -translate-x-1/2
              h-full w-1 origin-top hidden md:block
            "
            style={{ scaleY: lineScale }}
          />

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                className={cn(
                  "relative flex flex-col md:flex-row items-center w-full max-w-4xl my-10 md:my-14",
                  isEven ? "md:pr-20" : "md:pl-20"
                )}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.35 }}
              >
                {/* Marker */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center z-10 shadow-md font-mono text-lg font-bold">
                  {step.step}
                </div>

                {/* Card */}
                <motion.div
                  variants={isEven ? flipFromLeft : flipFromRight}
                  className={cn(
                    "timeline-glow bg-card p-8 rounded-3xl shadow-lg border border-accent/30 w-full md:w-5/12",
                    isEven
                      ? "md:text-right md:ml-auto"
                      : "md:text-left md:mr-auto"
                  )}
                  style={{ transformStyle: "preserve-3d" }}
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
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExecutionCapabilities;
