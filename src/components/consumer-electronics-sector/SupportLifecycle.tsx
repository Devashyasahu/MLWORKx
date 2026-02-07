"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, HardHat, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Product Design",
    description:
      "From concept to manufacturing-ready designs, covering electronics, firmware, and mechanical aspects.",
    icon: Layout,
    link: "/services/product-design",
  },
  {
    title: "Prototyping",
    description:
      "Rapid prototyping and validation to ensure usability and production readiness for mass markets.",
    icon: HardHat,
    link: "/services/prototyping",
  },
  {
    title: "Mass Production",
    description:
      "Large-scale manufacturing with pre-vetted suppliers and continuous quality monitoring for consumer products.",
    icon: Factory,
    link: "/services/mass-production",
  },
];

const SupportLifecycle = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            How MLXWORKX supports consumer electronics teams.
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-semibold">
            End-to-end execution from concept to mass production.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div
                className="
                  group relative h-full
                  bg-card rounded-3xl p-8
                  border border-accent/25
                  shadow-lg
                  transition-all duration-500
                  hover:shadow-xl
                  hover:border-accent/60
                "
              >
                {/* Glow layer */}
                <div
                  className="
                    pointer-events-none absolute inset-0 rounded-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                  style={{
                    boxShadow: "0 0 0 1px rgba(0,255,255,0.35), 0 0 32px rgba(0,255,255,0.15)",
                  }}
                />

                {/* Icon */}
                <div
                  className="
                    w-16 h-16 mb-6 rounded-full
                    flex items-center justify-center
                    bg-accent/20 text-accent
                    transition-all duration-500
                    group-hover:bg-accent/30
                    group-hover:shadow-[0_0_20px_rgba(0,255,255,0.35)]
                  "
                >
                  <service.icon className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="
                    mt-auto inline-flex items-center gap-2
                    font-semibold text-accent
                    transition-colors
                    hover:text-accent/80
                  "
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupportLifecycle;
