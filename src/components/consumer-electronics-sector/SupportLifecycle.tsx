"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, HardHat, Factory } from "lucide-react";

const services = [
  {
    title: "Product Design",
    description: "From concept to manufacturing-ready designs, covering electronics, firmware, and mechanical aspects.",
    icon: Layout,
    link: "/services/product-design",
    image: "", // Add path here later
  },
  {
    title: "Prototyping",
    description: "Rapid prototyping and validation to ensure usability and production readiness for mass markets.",
    icon: HardHat,
    link: "/services/prototyping",
    image: "",
  },
  {
    title: "Mass Production",
    description: "Large-scale manufacturing with pre-vetted suppliers and continuous quality monitoring.",
    icon: Factory,
    link: "/services/mass-production",
    image: "",
  },
];

const SupportLifecycle = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            How MLXWORKX supports consumer electronics teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30 flex flex-col"
            >
              {service.image && (
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-2xl mb-6" />
              )}
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-foreground mb-6">{service.description}</p>
              <a href={service.link} className="mt-auto text-accent font-bold hover:underline">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportLifecycle;