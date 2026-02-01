"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ClipboardCheck,
  Factory,
  Award,
  Layers,
  LucideIcon,
} from "lucide-react";

/* ------------------ Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

type TrustIndicator = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const trustIndicators: TrustIndicator[] = [
  {
    id: "qa-protocols",
    title: "Standardized QA Protocols",
    description:
      "Implementing robust, standardized quality assurance protocols across all manufacturing stages.",
    icon: ClipboardCheck,
  },
  {
    id: "supplier-validation",
    title: "Rigorous Supplier Validation",
    description:
      "Thorough validation processes, including on-site factory floor checks, to ensure partner capabilities.",
    icon: Factory,
  },
  {
    id: "industry-compliance",
    title: "Industry-Specific Compliance",
    description:
      "Adherence to critical industry standards and certifications (e.g., ISO) to meet regulatory requirements.",
    icon: Award,
  },
  {
    id: "multi-stage-verification",
    title: "Multi-Stage Verification",
    description:
      "Comprehensive verification at pre-production, during production, and post-production phases for consistent quality.",
    icon: Layers,
  },
];

/* ------------------ Section ------------------ */

const QualityComplianceBanners = () => {
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
            className="text-5xl md:text-7xl font-extrabold text-primary mb-6 drop-shadow-lg"
          >
            Quality & Compliance
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground font-medium"
          >
            Manufacturing is high-stakes — we back our promises with real
            technical rigor.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4"
          >
            Defined quality standards and multi-stage inspection processes.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trustIndicators.map(({ id, title, description, icon: Icon }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent text-accent-foreground mb-6 shadow-md">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3 leading-snug">
                {title}
              </h3>

              <p className="text-foreground text-base leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Line */}
        <motion.p
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our goal: to reduce perceived risk for OEMs and enterprise teams.
        </motion.p>

      </div>
    </section>
  );
};

export default QualityComplianceBanners;