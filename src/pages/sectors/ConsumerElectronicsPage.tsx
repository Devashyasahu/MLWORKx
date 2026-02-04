"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import InquiryForm from "@/components/InquiryForm";
import HeroConsumerElectronics from "@/components/consumer-electronics-sector/HeroConsumerElectronics";
import SupportLifecycle from "@/components/consumer-electronics-sector/SupportLifecycle";
import CategoriesGrid from "@/components/consumer-electronics-sector/CategoriesGrid";
import ApproachDifferentiationCe from "@/components/consumer-electronics-sector/ApproachDifferentiationCe";
import StartProjectCTA from "@/components/StartProjectCTA"; // Custom Inquiry Form for this page

const ConsumerElectronicsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow">
        <HeroConsumerElectronics />
        <SupportLifecycle />
        <CategoriesGrid />
        <ApproachDifferentiationCe />
        <StartProjectCTA/>
      </main>
      <Footer />
    </div>
  );
};

export default ConsumerElectronicsPage;