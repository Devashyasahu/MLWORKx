"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Package,
  Layout,
  Code,
  Wrench,
  FileCheck,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trustPoints = [
  {
    title: "Integrated Teamwork",
    description:
      "Our designers, engineers, and manufacturing experts collaborate from day one, avoiding silos.",
    icon: Users,
  },
  {
    title: "DFM at Core",
    description:
      "Every design decision is made with Design for Manufacturability (DFM) principles in mind.",
    icon: Wrench,
  },
];

const deliverables = [
  { name: "Detailed PCB Layouts", icon: Layout },
  { name: "Optimized Firmware", icon: Code },
  { name: "Precision Mechanical Files", icon: Package },
  { name: "Comprehensive Test Plans", icon: FileCheck },
  { name: "Manufacturing-Ready Design Package", icon: Factory },
];

const TrustDeliverables = () => {
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
            Why Our Design Approach?
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            We bridge the gap between design and production, ensuring seamless execution.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            Our integrated approach means your product is designed for success, not just aesthetics.
          </p>
        </motion.div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 shadow-md">
                <point.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="text-foreground text-base leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deliverables Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            What You Receive
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            A complete, manufacturing-ready design package.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            Transparency is key: know exactly what technical assets you'll get to move to production.
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-md border border-accent/20 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-accent/20 text-accent rounded-full mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <p className="text-lg font-semibold text-foreground">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24 md:mt-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="#inquiry-form">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/80 px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start a discussion
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustDeliverables;