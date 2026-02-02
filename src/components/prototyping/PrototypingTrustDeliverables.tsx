"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TestTube,
  TrendingUp,
  Factory,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const trustPoints = [
  {
    title: "In-House Testing & Validation",
    description:
      "Rigorous testing in our facilities ensures prototypes meet performance and reliability benchmarks.",
    icon: TestTube,
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Leveraging insights from diverse sectors to build robust and adaptable prototypes.",
    icon: TrendingUp,
  },
  {
    title: "Clear Path to Production",
    description:
      "Every prototype is built with manufacturability in mind, streamlining the transition to mass production.",
    icon: Factory,
  },
];

const deliverables = [
  { name: "Fully Assembled Prototypes", icon: CheckCircle },
  { name: "Tested & Validated Samples", icon: TestTube },
  { name: "Insights for Production Readiness", icon: Lightbulb },
  { name: "Clear Next Steps for Refinement or Scale", icon: ArrowRight },
];

const PrototypingTrustDeliverables = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] relative z-10 border-t border-accent/20">
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
            Why Prototype with MLWORKx?
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Reduce uncertainty and accelerate your path to market.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            Our integrated approach ensures your prototype is a stepping stone, not
            a roadblock, to production.
          </p>
        </motion.div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
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
            Prototyping Deliverables
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Tangible results for confident decision-making.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            Transparency is key: know exactly what technical assets you'll get to
            move to production.
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-md border border-accent/20 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
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
              Start a conversation
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PrototypingTrustDeliverables;