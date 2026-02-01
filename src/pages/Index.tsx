"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilityGrid from "@/components/CapabilityGrid";
import ProcessTimeline from "@/components/ProcessTimeline"; // New Section 3
import DifferentiationGrid from "@/components/DifferentiationGrid"; // New Section 4
import QualityComplianceBanners from "@/components/QualityComplianceBanners"; // New Section 5
import SocialProofSection from "@/components/SocialProofSection"; // New Section 6
import AboutSummary from "@/components/AboutSummary"; // New Section 7
import InquiryForm from "@/components/InquiryForm"; // New Section 8
import SparkleBackground from "@/components/SparkleBackground";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative font-sans">
      <SparkleBackground className="fixed inset-0 z-0" count={50} minSize={1} maxSize={4} duration={5} />
      <Header />
      <HeroSection />
      <CapabilityGrid />
      <ProcessTimeline />
      <DifferentiationGrid />
      <QualityComplianceBanners />
      <SocialProofSection />
      <AboutSummary />
      <InquiryForm />
      <Footer />
    </div>
  );
};

export default Index;