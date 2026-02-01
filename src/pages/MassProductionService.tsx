"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import InquiryForm from "@/components/InquiryForm";
import HeroMassProduction from "@/components/mass-production/HeroMassProduction";
import ExecutionCapabilities from "@/components/mass-production/ExecutionCapabilities";
import SmarterSupplyChain from "@/components/mass-production/SmarterSupplyChain";
import MassProductionTrustDeliverables from "@/components/mass-production/MassProductionTrustDeliverables";

const MassProductionService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow">
        <HeroMassProduction />
        <ExecutionCapabilities />
        <SmarterSupplyChain />
        <MassProductionTrustDeliverables />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default MassProductionService;