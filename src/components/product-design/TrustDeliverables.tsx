"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  ShieldCheck,
  Eye,
  Package,
  CalendarCheck,
} from "lucide-react";

/* ------------------ DATA ------------------ */

const trustPoints = [
  {
    title: "Pre-Vetted Global Network",
    description:
      "Access a rigorously qualified network of manufacturing partners worldwide.",
    icon: Network,
  },
  {
    title: "Continuous Quality Oversight",
    description:
      "Proactive quality control and inspection at every stage of production.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Visibility",
    description:
      "Track production from order placement to final delivery with real-time updates.",
    icon: Eye,
  },
];

const deliverables = [
  { name: "Scaled Manufacturing Execution", icon: Package },
  { name: "Coordinated Supplier Operations", icon: Network },
  { name: "Quality-Monitored Production Runs", icon: ShieldCheck },
  { name: "Clear Reporting and Visibility", icon: Eye },
  { name: "Finished Products Delivered on Schedule", icon: CalendarCheck },
];

/* ------------------ COMPONENT ------------------ */

const TrustDeliverables = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Why MLXWORKX for Mass Production?
          </h2>

          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Beyond a marketplace — a controlled manufacturing system.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We provide the structure, visibility, and execution discipline
            required for confident production scaling.
          </p>
        </motion.div>

        {/* TRUST PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              className="standard-card p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent text-accent-foreground mb-6 shadow-md">
                <point.icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-3">
                {point.title}
              </h3>

              <p className="text-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DELIVERABLES */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Your Production Deliverables
          </h2>

          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Tangible outputs — not promises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.name}
              className="standard-card p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-4">
                <item.icon className="h-7 w-7" />
              </div>

              <p className="text-lg font-semibold text-foreground">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustDeliverables;
