"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, HardHat, Factory } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Product Design for Defence",
    description:
      "Structured product development with emphasis on documentation, compliance, and long-term support.",
    icon: Layout,
    link: "/services/product-design",
  },
  {
    title: "Prototyping & Controlled Evaluation",
    description:
      "Building and validating functional prototypes under controlled conditions for rigorous testing.",
    icon: HardHat,
    link: "/services/prototyping",
  },
  {
    title: "Mass Production & Supply Chain",
    description:
      "Disciplined manufacturing execution with end-to-end visibility and quality control for strategic programs.",
    icon: Factory,
    link: "/services/mass-production",
  },
];

const StrategicSupport = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ================= HEADING ================= */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            How MLXWORKX supports defence programs.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Structured design, controlled prototyping, and disciplined manufacturing —
            delivered with clarity and visibility.
          </p>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {/* STANDARD CARD WITH HOVER GLOW */}
              <div className="card-hover-glow h-full">
                <div className="bg-card p-8 rounded-3xl border border-accent/30 shadow-lg h-full flex flex-col">

                  <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                    <service.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-auto font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn more →
                  </Link>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicSupport;
