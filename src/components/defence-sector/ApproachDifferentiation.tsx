"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Repeat2, FileText, HardHat } from "lucide-react";

const values = [
  {
    title: "Unwavering Reliability",
    description:
      "Engineering for mission-critical performance in the most demanding environments.",
    icon: ShieldCheck,
  },
  {
    title: "Repeatable Processes",
    description:
      "Standardized workflows and rigorous controls ensure consistent quality and execution.",
    icon: Repeat2,
  },
  {
    title: "Full Compliance & Documentation",
    description:
      "Adherence to industry standards and comprehensive documentation for every project.",
    icon: FileText,
  },
];

const differentiators = [
  {
    title: "Disciplined Engineering Mindset",
    description:
      "Our team operates with the precision and rigor required for defence applications.",
    icon: HardHat,
  },
  {
    title: "Experience with High-Reliability Systems",
    description:
      "Proven track record in developing and manufacturing systems where failure is not an option.",
    icon: ShieldCheck,
  },
];

const ApproachDifferentiation = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Our Approach */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Our approach to defence projects.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Built on a foundation of reliability, repeatability, and strict compliance.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/30 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Why defence teams choose MLXWORKX.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our commitment to disciplined engineering and high-reliability systems sets us apart.
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {differentiators.map((diff, i) => (
            <motion.div
              key={diff.title}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/30 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <diff.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                {diff.title}
              </h3>
              <p className="text-foreground">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApproachDifferentiation;