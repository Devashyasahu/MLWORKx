"use client";

import React from "react";
import { motion } from "framer-motion";
import BlueprintImage from "@/components/BlueprintImage";
import {
  Lightbulb,
  CircuitBoard,
  HeartPulse,
  Car,
  ToyBrick,
  Shield,
  Watch,
} from "lucide-react";

const capabilities = [
  {
    category: "IoT Products",
    description: "WiFi/GSM gateways, sensors, smart tracking.",
    image: "/placeholder.svg",
    icon: Lightbulb,
  },
  {
    category: "Consumer Electronics",
    description: "Hardware and firmware with export-quality standards.",
    image: "/placeholder.svg",
    icon: CircuitBoard,
  },
  {
    category: "Healthcare & Fitness",
    description: "Medical devices following structured validation (ISO focus).",
    image: "/placeholder.svg",
    icon: HeartPulse,
  },
  {
    category: "Electric Vehicle (EV)",
    description:
      "Instrument clusters, battery swapping systems, charging units.",
    image: "/placeholder.svg",
    icon: Car,
  },
  {
    category: "Electronics Toys",
    description: "STEM kits and interactive smart products.",
    image: "/placeholder.svg",
    icon: ToyBrick,
  },
  {
    category: "Military-Grade",
    description:
      "Defense-aligned prototypes with technical standards experience.",
    image: "/placeholder.svg",
    icon: Shield,
  },
  {
    category: "Smart Wearables",
    description: "Smartwatches, smart rings, and compact electronics.",
    image: "/placeholder.svg",
    icon: Watch,
  },
];

const PrototypingCapabilitiesGrid = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 relative z-10 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            Prototyping Capabilities
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our expertise spans critical industries, delivering production-ready designs.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We don't just make pretty drawings; we engineer for manufacturability,
            performance, and scale.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-3xl shadow-lg border border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-border bg-secondary flex items-center justify-center">
                <BlueprintImage
                  src={cap.image}
                  alt={cap.category}
                  className="rounded-xl"
                />
              </div>

              {/* Text */}
              <p className="font-mono text-accent text-sm uppercase mb-2">
                // {cap.category}
              </p>
              <h3 className="text-2xl font-bold text-primary leading-snug">
                {cap.description}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrototypingCapabilitiesGrid;