"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Factory, Zap } from "lucide-react";

const values = [
  {
    title: "Decisions That Hold Up",
    description:
      "Engineering and design choices made for long-term performance and reliability in demanding EV environments.",
    icon: CheckCircle,
  },
  {
    title: "Safety & Reliability by Design",
    description:
      "Integrating safety protocols and robust design principles from the earliest stages of development.",
    icon: Shield,
  },
];

const differentiators = [
  {
    title: "Manufacturing-First Mindset",
    description:
      "Every design and prototype considers mass production implications, reducing future roadblocks.",
    icon: Factory,
  },
  {
    title: "Experience Across EV Electronics",
    description:
      "Proven expertise in the complex interplay of hardware, firmware, and software in electric vehicles.",
    icon: Zap,
  },
];

const EvCard = ({
  title,
  description,
  Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="
        group relative
        bg-card
        p-8
        rounded-3xl
        border border-[var(--ev-accent)]/25
        shadow-lg
        transition-all duration-300
        hover:shadow-xl
        hover:-translate-y-1
      "
    >
      {/* Accent glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,200,0.18),transparent_60%)]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <div
          className="
            w-16 h-16
            flex items-center justify-center
            rounded-full
            bg-[var(--ev-accent)]
            text-[var(--ev-accent-foreground)]
            mb-6
            shadow-md
            group-hover:shadow-lg
            transition-all
          "
        >
          <Icon className="h-8 w-8" />
        </div>

        <h3 className="text-2xl font-bold text-primary mb-3">
          {title}
        </h3>

        <p className="text-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ApproachDifferentiationEv = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-[var(--ev-accent)]/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Our Approach */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Our approach to EV projects.
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold">
            Built on a foundation of safety, reliability, and scalability.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          {values.map((v, i) => (
            <EvCard
              key={v.title}
              title={v.title}
              description={v.description}
              Icon={v.icon}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Why EV teams choose MLXWORKX.
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold">
            Manufacturing-first thinking with deep EV electronics expertise.
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {differentiators.map((d, i) => (
            <EvCard
              key={d.title}
              title={d.title}
              description={d.description}
              Icon={d.icon}
              delay={i * 0.15}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApproachDifferentiationEv;
