"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Rocket,
  Cpu,
  Lightbulb,
  Factory,
  Repeat2,
  Scale,
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

type IconItem = {
  id: string;
  name?: string;
  title?: string;
  description?: string;
  icon: LucideIcon;
};

const industries: IconItem[] = [
  { id: "robotics", name: "Robotics", icon: Rocket },
  { id: "aerospace", name: "Aerospace", icon: Cpu },
  { id: "consumer-electronics", name: "Consumer Electronics", icon: Lightbulb },
  { id: "industrial-automation", name: "Industrial Automation", icon: Factory },
];

const scaleIndicators: IconItem[] = [
  {
    id: "early-stage",
    title: "Early-Stage Builds",
    description:
      "From concept to first prototype, we support your initial vision.",
    icon: Lightbulb,
  },
  {
    id: "scaled-production",
    title: "Scaled Production",
    description:
      "Seamless transition to high-volume manufacturing for market readiness.",
    icon: Scale,
  },
  {
    id: "repeat-engagements",
    title: "Repeat Engagements",
    description:
      "Trusted by teams for ongoing projects and long-term manufacturing needs.",
    icon: Repeat2,
  },
];

/* ------------------ Components ------------------ */

const SocialProofSection = () => {
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
            Trusted by Innovators
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground font-medium"
          >
            From ambitious startups to established enterprises, teams trust
            MLXWORKX to deliver.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4"
          >
            Validation through experience — projects like yours, delivered
            successfully.
          </motion.p>
        </motion.div>

        {/* Industries */}
        <motion.div
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-primary mb-10"
          >
            Industries We Serve
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {industries.map(({ id, name, icon: Icon }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                className="bg-card p-6 rounded-2xl shadow-md border border-accent/20 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-4">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-lg font-semibold text-foreground">
                  {name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scale Indicators */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {scaleIndicators.map(({ id, title, description, icon: Icon }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent text-accent-foreground mb-6 shadow-md">
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

        {/* Closing Line */}
        <motion.p
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Answering the real question clients ask internally:
          <br />
          <span className="text-muted-foreground">
            “Has someone like me done this with them before?”
          </span>
        </motion.p>

      </div>
    </section>
  );
};

export default SocialProofSection;