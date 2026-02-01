"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Radio,
  Shield,
  Satellite,
  BatteryCharging,
  HardDrive,
} from "lucide-react";
import BlueprintImage from "@/components/BlueprintImage";

const applications = [
  {
    name: "Embedded Electronic Systems",
    description:
      "High-performance, low-power embedded solutions for critical functions.",
    icon: Cpu,
    image: "/images/Microcontroller Comparison raspberry pi board.webp",
    techTag: "MIL-STD-810G",
  },
  {
    name: "Communication & Control Units",
    description:
      "Secure and reliable communication modules for tactical operations.",
    icon: Radio,
    image: "/images/Infant-Baby-Warmer-Controller-OEM-Pcb-Circuit..jpg",
    techTag: "DO-160G",
  },
  {
    name: "Ruggedized Electronic Assemblies",
    description:
      "Durable assemblies designed to withstand extreme environmental conditions.",
    icon: Shield,
    image: "/images/what are mil-std electronics.webp",
    techTag: "IP68 Certified",
  },
  {
    name: "Monitoring & Sensing Systems",
    description:
      "Precision sensing and data acquisition for surveillance and intelligence.",
    icon: Satellite,
    image: "/images/1eea659a-e354-413e-aff5-e8c470236823-md.jpeg",
    techTag: "STANAG 4569",
  },
  {
    name: "Power & Control Subsystems",
    description:
      "Robust power management and control units for mission-critical applications.",
    icon: BatteryCharging,
    image: "/images/6862b05e-129e-4fec-a514-e0eb7b045b62-md.jpeg",
    techTag: "MIL-PRF-38534",
  },
  {
    name: "Mission-Specific Electronic Hardware",
    description:
      "Custom hardware solutions tailored for unique operational requirements.",
    icon: HardDrive,
    image: "/images/9259baed-52d1-4090-8852-1a1c83c36df5-md.jpeg",
    techTag: "ITAR Compliant",
  },
];

const ApplicationsGrid = () => {
  return (
    <section className="bg-background py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] relative z-0 border-b border-accent/20">
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
            Defence applications and systems we support.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our expertise covers a broad spectrum of critical defence technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {applications.map((app, i) => (
            <motion.div
              key={app.name}
              className="bg-card p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/30 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-border flex items-center justify-center bg-secondary">
                <BlueprintImage
                  src={app.image}
                  alt={app.name}
                  className="rounded-xl"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <app.icon className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {app.name}
                </h3>
              </div>

              <p className="text-foreground mb-3">
                {app.description}
              </p>

              <p className="mt-auto font-mono text-accent text-sm uppercase">
                // {app.techTag}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApplicationsGrid;