"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

/* ------------------ Motion Variants ------------------ */

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ Component ------------------ */

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-card text-foreground py-16 md:py-20 rounded-t-[3rem] md:rounded-t-[6rem] border-t border-accent/20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center md:text-left mb-12 md:mb-16">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
              className="text-3xl font-extrabold text-accent hover:text-accent/80 transition-colors mb-4"
            >
              MLWORKx
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs md:max-w-none">
              MLWORKx is a manufacturing services platform designed to simplify
              sourcing, production, and quality control for innovators.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:info@mlxworkx.com"
                  className="hover:text-accent transition-colors"
                >
                  info@mlxworkx.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-accent transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>123 Industrial Way, Tech City, TX 78701</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Quick Links
            </h3>
           <ul className="space-y-3 text-muted-foreground">
  <li>
    <Link to="/features" className="hover:text-accent transition-colors">
      Services
    </Link>
  </li>
  <li>
    <Link to="/pricing" className="hover:text-accent transition-colors">
      How It Works
    </Link>
  </li>
  <li>
    <Link to="/about" className="hover:text-accent transition-colors">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/vlog" className="hover:text-accent transition-colors">
      Vlog
    </Link>
  </li>
</ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-12 border-t border-accent/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} MLWORKx. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <MadeWithDyad />
          </div>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;