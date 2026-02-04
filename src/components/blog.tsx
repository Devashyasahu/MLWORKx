"use client";

import React from "react";
import { motion } from "framer-motion";

const Vlog = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          MLWORKx Blog
        </h1>
        <p className="text-muted-foreground text-lg">
          Insights, updates, behind-the-scenes stories, and innovations from
          MLWORKx. Stay tuned — exciting content is coming soon 🚀
        </p>
      </motion.div>
    </section>
  );
};

export default Vlog;