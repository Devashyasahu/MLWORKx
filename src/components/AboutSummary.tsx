"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitPullRequestClosed,
  Network,
  Lightbulb,
  CheckCircle,
  Clock,
} from "lucide-react";

const pillars = [
  {
    title: "Simplified Sourcing, Production & Quality",
    description:
      "We streamline the complex triad of manufacturing, making it accessible and efficient for you.",
    icon: GitPullRequestClosed,
  },
  {
    title: "Vetted Network Logic",
    description:
      "Access our reliable, pre-qualified manufacturing partners, so you don't have to search for them.",
    icon: Network,
  },
];

const values = [
  { name: "Clarity", icon: Lightbulb },
  { name: "Reliability", icon: CheckCircle },
  { name: "Long-term Execution", icon: Clock },
];

const AboutSummary = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10 border-t border-accent/20">
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
            About MLXWORKX
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            MLXWORKX is a Manufacturing Services Platform.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We move beyond just providing a service to embodying an entity dedicated
            to transforming manufacturing.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <pillar.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-foreground text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Core Values
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-md border border-accent/20 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-accent/20 text-accent rounded-full mb-4">
                <value.icon className="h-7 w-7" />
              </div>
              <p className="text-lg font-semibold text-foreground">
                {value.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Line */}
        <motion.p
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our goal: To humanize the brand and show the mission behind the technology.
        </motion.p>

      </div>
    </section>
  );
};

export default AboutSummary;