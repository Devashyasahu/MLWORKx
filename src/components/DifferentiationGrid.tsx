"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ZapOff,
  ShieldCheck,
  TrendingUp,
  Handshake,
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

type Pillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const pillars: Pillar[] = [
  {
    id: "vendor-chaos",
    title: "Eliminating Vendor Chaos",
    description:
      "We streamline your supply chain, removing the complexity and uncertainty of managing multiple vendors.",
    icon: ZapOff,
  },
  {
    id: "vetted-ecosystem",
    title: "A Vetted Supplier Ecosystem",
    description:
      "Access to a closed network of high-capacity, quality-controlled manufacturing partners.",
    icon: ShieldCheck,
  },
  {
    id: "scalable-production",
    title: "Scalability On Demand",
    description:
      "Seamlessly transition from a single prototype to 10,000+ units without compromising quality.",
    icon: TrendingUp,
  },
  {
    id: "long-term-partnership",
    title: "Long-Term Partnership",
    description:
      "We focus on building lasting relationships, supporting your growth beyond one-off transactions.",
    icon: Handshake,
  },
];

/* ------------------ Section ------------------ */

const DifferentiationGrid = () => {
  return (
    <section className="bg-background py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
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
            Why Choose MLXWORKX?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold text-foreground"
          >
            Not a marketplace. A manufacturing system.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-4xl mx-auto mt-4 text-muted-foreground"
          >
            We explain why choosing MLXWORKX beats traditional vendors or generic platforms.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map(({ id, title, description, icon: Icon }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3">
                {title}
              </h3>

              <p className="text-foreground text-base leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
        >
          Our goal: to remove sourcing headaches so clients can focus on building products.
        </motion.p>

      </div>
    </section>
  );
};

export default DifferentiationGrid;