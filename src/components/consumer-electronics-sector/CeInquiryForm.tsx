"use client";

import React from "react";
import { motion } from "framer-motion";
import InquiryForm from "@/components/InquiryForm";

const CeInquiryForm = () => {
  return (
    <section
      id="inquiry-form"
      className="bg-background text-foreground py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] relative z-0 border-b border-accent/20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What teams achieve with MLXWORKX.
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            Faster movement from idea to market, fewer production surprises, and
            products that scale with confidence.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Tell us where you are and where you want to scale. The MLXWORKX team
            will help you move there with confidence.
          </motion.p>
        </motion.div>

        {/* Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          viewport={{ once: true }}
        >
          <InquiryForm />
        </motion.div>

      </div>
    </section>
  );
};

export default CeInquiryForm;