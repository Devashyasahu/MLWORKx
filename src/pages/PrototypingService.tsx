"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import InquiryForm from "@/components/InquiryForm";
import HeroPrototyping from "@/components/prototyping/HeroPrototyping";
import PrototypingCapabilitiesGrid from "@/components/prototyping/PrototypingCapabilitiesGrid";
import BuildProcessTimeline from "@/components/prototyping/BuildProcessTimeline";
import PrototypingTrustDeliverables from "@/components/prototyping/PrototypingTrustDeliverables";

const PrototypingService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow">
        <HeroPrototyping />
        <PrototypingCapabilitiesGrid />
        <BuildProcessTimeline />
        <PrototypingTrustDeliverables />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default PrototypingService;