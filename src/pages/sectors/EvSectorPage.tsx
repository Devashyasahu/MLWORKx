"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import InquiryForm from "@/components/InquiryForm";
import HeroEv from "@/components/ev-sector/HeroEv";
import StrategicSupportEv from "@/components/ev-sector/StrategicSupportEv";
import ApplicationsGridEv from "@/components/ev-sector/ApplicationsGridEv";
import ApproachDifferentiationEv from "@/components/ev-sector/ApproachDifferentiationEv";
import EvInquiryForm from "@/components/ev-sector/EvInquiryForm"; // Custom Inquiry Form for this page

const EvSectorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow">
        <HeroEv />
        <StrategicSupportEv />
        <ApplicationsGridEv />
        <ApproachDifferentiationEv />
        <EvInquiryForm />
      </main>
      <Footer />
    </div>
  );
};

export default EvSectorPage;