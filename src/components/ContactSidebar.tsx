"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

/* ------------------ Motion Variants ------------------ */

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

/* ------------------ Component ------------------ */

const ContactSidebar = () => {
  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-card p-8 rounded-3xl shadow-lg border border-accent/30 flex flex-col h-full"
    >
      <h3 className="text-3xl font-bold text-primary mb-6">
        About MLWORKx
      </h3>

      <p className="text-foreground text-base leading-relaxed mb-6">
        MLWORKx is a manufacturing services platform designed to simplify
        sourcing, production, and quality control for innovators. We emphasize
        structured execution, deep manufacturing awareness, and long-term
        partnerships.
      </p>

      <p className="text-foreground text-base leading-relaxed mb-8">
        Our goal is to remove the chaos from manufacturing, providing a
        predictable path from concept to scaled production. We are not just a
        marketplace — we are your strategic manufacturing partner.
      </p>

      <div className="mt-auto">
        <Link
          to="/"
          className="text-accent hover:text-accent/80 font-semibold transition-colors flex items-center gap-2"
        >
          Learn more about us &rarr;
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactSidebar;