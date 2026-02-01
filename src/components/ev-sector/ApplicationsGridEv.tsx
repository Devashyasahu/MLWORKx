"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  CircuitBoard,
  BatteryCharging,
  Plug,
  RefreshCcw,
  Wifi,
} from "lucide-react";
import BlueprintImage from "@/components/BlueprintImage";

const applications = [
  {
    name: "Instrument Clusters & Displays",
    description:
      "High-resolution, robust displays and control interfaces for EV dashboards.",
    icon: Gauge,
    image: "/images/f16d455c-527b-48ae-a7a2-9d1199a295a9-md.jpeg",
    techTag: "ISO 26262",
  },
  {
    name: "EV Control Electronics",
    description:
      "Precision control units for motor management, power delivery, and vehicle dynamics.",
    icon: CircuitBoard,
    image: "/images/3581bf87-53aa-41a5-ba73-aa275192ff65-md.jpeg",
    techTag: "AEC-Q100",
  },
  {
    name: "Battery Systems & Enclosures",
    description:
      "Robust battery management systems and protective enclosures for optimal performance and safety.",
    icon: BatteryCharging,
    image: "/images/95768695-549b-4aef-841f-544b6bf7b6a5-md.jpeg",
    techTag: "UN 38.3",
  },
  {
    name: "Charging Units & Infrastructure",
    description:
      "Reliable charging solutions, from on-board chargers to public charging station components.",
    icon: Plug,
    image: "/images/9d1862cd-9305-47a6-bc18-58b0f469524d-md.jpeg",
    techTag: "IEC 61851",
  },
  {
    name: "Battery Swapping Stations",
    description:
      "Modular and automated systems for efficient battery exchange in commercial EV fleets.",
    icon: RefreshCcw,
    image: "/images/1a45448a-d11b-4dc9-af03-aeefae562d68-md.jpeg",
    techTag: "SAE J1772",
  },
  {
    name: "Connected EV Subsystems",
    description:
      "Integrated telematics and connectivity modules for smart vehicle management.",
    icon: Wifi,
    image: "/images/535965d7-0c41-48f6-b147-1620cd804b46-md.jpeg",
    techTag: "5G/LTE-V2X",
  },
];

const ApplicationsGridEv = () => {
  return (
    <section className="bg-background py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] relative z-0 border-b border-[var(--ev-accent)]/20">
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
            EV systems and applications we work with.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our expertise covers a broad spectrum of critical EV technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {applications.map((app, i) => (
            <motion.div
              key={app.name}
              className="bg-card p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--ev-accent)]/30 overflow-hidden flex flex-col"
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
                <app.icon className="h-6 w-6 text-[var(--ev-accent)]" />
                <h3 className="text-2xl font-bold text-primary">
                  {app.name}
                </h3>
              </div>

              <p className="text-foreground mb-3">
                {app.description}
              </p>

              <p className="mt-auto font-mono text-sm uppercase text-[var(--ev-accent)]">
                // {app.techTag}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsGridEv;