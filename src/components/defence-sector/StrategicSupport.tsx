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
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 relative z-10 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            How MLXWORKX supports defence programs.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            We provide structured product development, prototyping, and manufacturing
            with unwavering focus on visibility and dependable execution.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/30 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <service.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-foreground mb-4">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="mt-auto text-accent hover:text-accent/80 font-semibold transition-colors"
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

export default StrategicSupport;