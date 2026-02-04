"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import HeroDefence from "@/components/defence-sector/HeroDefence";
import StrategicSupport from "@/components/defence-sector/StrategicSupport";
import ApplicationsGrid from "@/components/defence-sector/ApplicationsGrid";
import ApproachDifferentiation from "@/components/defence-sector/ApproachDifferentiation";
import StartProjectCTA from "@/components/StartProjectCTA"; // Custom Inquiry Form for this page

const DefenceSectorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow">
        <HeroDefence />
        <StrategicSupport />
        <ApplicationsGrid />
        <ApproachDifferentiation />
        <StartProjectCTA/>
      </main>
      <Footer />
    </div>
  );
};

export default DefenceSectorPage;