"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import ContactForm from "@/components/ContactForm";
import ContactSidebar from "@/components/ContactSidebar";
import { motion } from "framer-motion";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-8 max-w-7xl py-16 md:py-24 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg text-primary"
            variants={itemVariants}
          >
            Get in touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-medium"
            variants={itemVariants}
          >
            Share a few details and we’ll take it from there.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;