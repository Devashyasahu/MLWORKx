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
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10 border-t border-accent/20">
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
            How MLXWORKX supports consumer electronics teams.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            We provide end-to-end support from concept to mass production, ensuring market readiness.
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

export default SupportLifecycle;