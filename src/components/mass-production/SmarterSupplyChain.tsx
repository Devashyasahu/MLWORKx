"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, TrendingUp, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";
import BlueprintImage from "@/components/BlueprintImage"; // Reusing BlueprintImage for a consistent technical feel

const SmarterSupplyChain = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-background py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] relative z-0 border-b border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight"
            variants={itemVariants}
          >
            A smarter way to run the supply chain.
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold"
            variants={itemVariants}
          >
            Data-guided decisions for optimal supplier selection and production planning.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4"
            variants={itemVariants}
          >
            We transform raw factory data into actionable insights, giving you unparalleled control.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Image/Visual Representation */}
          <motion.div className="w-full aspect-video rounded-[48px] border-8 border-card shadow-xl overflow-hidden group" variants={itemVariants}>
            <BlueprintImage src="/placeholder.svg" alt="Data-driven supply chain dashboard" className="rounded-[40px]" /> {/* Replace with actual dashboard/data flow image */}
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.p className="font-mono text-accent text-sm md:text-base uppercase mb-2" variants={itemVariants}>
              // DATA-DRIVEN
            </motion.p>
            <motion.h3 className="text-4xl md:text-5xl font-extrabold uppercase text-primary mb-6 leading-tight" variants={itemVariants}>
              Real-time Insights
            </motion.h3>
            <motion.p className="text-lg md:text-xl text-foreground leading-relaxed mb-4" variants={itemVariants}>
              Our platform provides a transparent view of your production, from raw materials to finished goods.
            </motion.p>
            <motion.ul className="space-y-3 text-foreground text-base md:text-lg" variants={itemVariants}>
              <motion.li className="flex items-center gap-3" variants={itemVariants}>
                <Database className="h-5 w-5 text-accent" /> Data from factory floor to client dashboard.
              </motion.li>
              <motion.li className="flex items-center gap-3" variants={itemVariants}>
                <TrendingUp className="h-5 w-5 text-accent" /> Optimize production with predictive analytics.
              </motion.li>
              <motion.li className="flex items-center gap-3" variants={itemVariants}>
                <BarChart2 className="h-5 w-5 text-accent" /> Performance metrics at your fingertips.
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmarterSupplyChain;