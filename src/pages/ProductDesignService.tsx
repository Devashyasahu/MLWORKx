"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleBackground from "@/components/SparkleBackground";
import StartProjectCTA from "@/components/StartProjectCTA";
import HeroProductDesign from "@/components/product-design/HeroProductDesign";
import CapabilitiesGridProductDesign from "@/components/product-design/CapabilitiesGridProductDesign";
import DesignProcessTimeline from "@/components/product-design/DesignProcessTimeline";
import TrustDeliverables from "@/components/product-design/TrustDeliverables";

const ProductDesignService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <main className="flex-grow">
        <HeroProductDesign />
        <CapabilitiesGridProductDesign />
        <DesignProcessTimeline />
        <TrustDeliverables />
        <StartProjectCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDesignService;