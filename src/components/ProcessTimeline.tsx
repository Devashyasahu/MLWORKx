"use client";

import React, { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import {
  FileText,
  Users,
  ShieldCheck,
  Truck,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------ Variants ------------------ */

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const flipFromLeft: Variants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const flipFromRight: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ------------------ Data ------------------ */

type ProcessStep = {
  id: string;
  tag: string;
  headline: string;
  description: string;
  icon: LucideIcon;
};

const processSteps: ProcessStep[] = [
  {
    id: "requirement-intake",
    tag: "STEP 01",
    headline: "Requirement Intake",
    description:
      "Collecting technical drawings, CAD files, and specifications to fully understand your needs.",
    icon: FileText,
  },
  {
    id: "supplier-matching",
    tag: "STEP 02",
    headline: "Supplier Matching",
    description:
      "Matching your project with vetted, high-capacity manufacturing partners from our ecosystem.",
    icon: Users,
  },
  {
    id: "quality-validation",
    tag: "STEP 03",
    headline: "Quality & Validation",
    description:
      "Continuous inspections, testing, and compliance checks at every critical stage.",
    icon: ShieldCheck,
  },
  {
    id: "production-delivery",
    tag: "STEP 04",
    headline: "Production & Delivery",
    description:
      "Transparent manufacturing oversight, efficient production, and final delivery logistics.",
    icon: Truck,
  },
];

/* ------------------ Component ------------------ */

const ProcessTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Scroll-linked line growth */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="bg-secondary py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[6rem] -mt-12 border-t border-accent/20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-primary mb-6"
          >
            Our Streamlined Process
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground"
          >
            A predictable, four-step journey that removes chaos from complex
            manufacturing sourcing.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">

          {/* Scroll-linked vertical line */}
          <motion.div
            className="
             timeline-line-glow
             absolute left-1/2 -translate-x-1/2
             h-full w-1 origin-top hidden md:block
             "
            style={{ scaleY: lineScale }}
          />


          {processSteps.map(
            ({ id, tag, headline, description, icon: Icon }, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={id}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center w-full max-w-4xl my-10 md:my-14",
                    isEven ? "md:pr-20" : "md:pl-20"
                  )}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.35 }}
                >
                  {/* Marker */}
                  <div className="absolute md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center z-10 shadow-md">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <motion.div
                    variants={isEven ? flipFromLeft : flipFromRight}
                    className={cn(
                      "timeline-glow bg-card p-8 rounded-3xl shadow-lg border border-accent/30 w-full md:w-5/12",
                      isEven
                        ? "md:text-right md:ml-auto"
                        : "md:text-left md:mr-auto"
                    )}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-5 w-5 text-accent" />
                      <p className="font-mono text-accent text-sm uppercase">
                        {tag}
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {headline}
                    </h3>

                    <p className="text-foreground text-base leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Closing */}
        <motion.p
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={itemVariants}
        >
          Our goal: to prove MLXWORKX is a managed system — not a chaotic
          marketplace.
        </motion.p>

      </div>
    </section>
  );
};

export default ProcessTimeline;
