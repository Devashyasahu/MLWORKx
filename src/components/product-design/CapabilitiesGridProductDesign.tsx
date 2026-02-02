"use client";

import React from "react";
import { motion } from "framer-motion";
import BlueprintImage from "@/components/BlueprintImage";

const capabilities = [
  {
    category: "IoT",
    description: "Smart device integration & embedded systems.",
    image: "/images/drill.jpg",
    dimensions: ["IoT-001", "V1.2"],
  },
  {
    category: "Consumer Electronics",
    description: "Sleek, user-centric designs for mass market.",
    image: "/images/robot.jpg",
    dimensions: ["CE-002", "Rev A"],
  },
];

const CapabilitiesGridProductDesign = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 border-t border-accent/20">
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
            Technical Powerhouse
          </h2>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
            Our expertise spans critical industries, delivering production-ready designs.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We engineer for manufacturability, performance, and scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.category}
              className="bg-card p-6 rounded-3xl shadow-lg border border-accent/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-border">
                <BlueprintImage
                  src={cap.image}
                  alt={cap.category}
                  dimensions={cap.dimensions}
                />
              </div>

              <p className="font-mono text-accent text-sm uppercase mb-2">
                // {cap.category}
              </p>

              <h3 className="text-2xl font-bold text-primary">
                {cap.description}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesGridProductDesign;