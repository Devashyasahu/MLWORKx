"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FileText,
  Users,
  ShieldCheck,
  Truck,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------ Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ Data ------------------ */

type ProcessStep = {
  id: string;
  tag: string;
  headline: string;
  description: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    id: "requirement-intake",
    tag: "STEP 01",
    headline: "Requirement Intake",
    description:
      "Collecting technical drawings, CAD files, and specifications to fully understand your needs.",
    icon: FileText,
  },
  {
    id: "supplier-matching",
    tag: "STEP 02",
    headline: "Supplier Matching",
    description:
      "Matching your project with vetted, high-capacity manufacturing partners from our ecosystem.",
    icon: Users,
  },
  {
    id: "quality-validation",
    tag: "STEP 03",
    headline: "Quality & Validation",
    description:
      "Continuous inspections, testing, and compliance checks at every critical stage.",
    icon: ShieldCheck,
  },
  {
    id: "production-delivery",
    tag: "STEP 04",
    headline: "Production & Delivery",
    description:
      "Transparent manufacturing oversight, efficient production, and final delivery logistics.",
    icon: Truck,
  },
];

/* ------------------ Section ------------------ */

const ProcessTimeline = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-primary mb-6"
          >
            Our Streamlined Process
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground"
          >
            A predictable, four-step journey that removes chaos from complex
            manufacturing sourcing.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border hidden md:block" />

          {processSteps.map(
            ({ id, tag, headline, description, icon: Icon }, index) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className={cn(
                  "relative flex flex-col md:flex-row items-center w-full max-w-4xl my-8 md:my-12",
                  index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                )}
              >
                {/* Marker */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center z-10 shadow-md">
                  {index + 1}
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
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="font-mono text-accent text-sm uppercase">
                      {tag}
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {headline}
                  </h3>

                  <p className="text-foreground text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Closing */}
        <motion.p
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our goal: to prove MLXWORKX is a managed system — not a chaotic
          marketplace.
        </motion.p>

      </div>
    </section>
  );
};

export default ProcessTimeline;