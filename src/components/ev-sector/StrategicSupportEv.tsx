"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, HardHat, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Product Design for EV",
    description:
      "Structured product development focused on safety-critical EV electronics and robust system architecture.",
    icon: Layout,
    link: "/services/product-design",
  },
  {
    title: "Prototyping & Validation",
    description:
      "Building and validating functional prototypes to test performance and reliability in real-world EV conditions.",
    icon: HardHat,
    link: "/services/prototyping",
  },
  {
    title: "Mass Production for EV",
    description:
      "Disciplined manufacturing execution with pre-vetted suppliers for scaled automotive runs and consistent quality.",
    icon: Factory,
    link: "/services/mass-production",
  },
];

const StrategicSupportEv = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 relative z-10 border-t border-[var(--ev-accent)]/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            How MLXWORKX supports EV teams.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            We provide structured product development, prototyping, and manufacturing with unwavering focus on safety, scalability, and dependable execution.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start border border-[var(--ev-accent)]/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[var(--ev-accent)] text-[var(--ev-accent-foreground)] rounded-full mb-6 shadow-md">
                <service.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-foreground text-base mb-4">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="mt-auto text-[var(--ev-accent)] hover:text-[var(--ev-accent)]/80 font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicSupportEv;