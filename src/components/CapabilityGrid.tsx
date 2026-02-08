"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/* ------------------ DATA ------------------ */

const services = [
  // {
  //   tag: "NODE 01",
  //   headline: "Service Blocks",
  //   description:
  //     " Whether you’re shaping an idea, validating a prototype, or scaling production, MLWORKX supports you at the stage you’re in.",
  //   videoSrc: "/videos/video1.mp4",
  //   posterSrc: "/images/robot.jpg",
  // },
  {
    tag: "NODE 01",
    headline: "Product Design",
    description:
      "Laser cutting, bending, and forming solutions for scalable industrial production.",
    videoSrc: "/videos/video2.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: "NODE 02",
    headline: "Prototyping",
    description:
      " Build and test working prototypes to validate performance, reliability, and readiness.",
    videoSrc: "/videos/video3.mp4",
    posterSrc: "/images/robot.jpg",
  },
  {
    tag: "NODE 03",
    headline: "Mass Production",
    description:
      "Scale manufacturing with vetted suppliers, quality oversight, and supply chain coordination.",
    videoSrc: "/videos/video4.mp4",
    posterSrc: "/images/robot.jpg",
  },
];

/* ------------------ COMPONENT ------------------ */

const CapabilityGrid = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector(
            "video"
          ) as HTMLVideoElement | null;

          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            video?.play();
          } else {
            video?.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-32 border-t border-white/10">
      <div className="container mx-auto px-6">


        {/* ================= CAPABILITY CARDS ================= */}
        <div className="space-y-36">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.tag}
                ref={(el) => el && (cardsRef.current[index] = el)}
                className={cn(
                  "rotating-border-card reveal-card",
                  "grid grid-cols-1 md:grid-cols-2 gap-16 items-center",
                  "bg-card p-10 rounded-[1.5rem]"
                )}
              >
                {/* VIDEO */}
                <div
                  className={cn(
                    isEven ? "md:order-1" : "md:order-2",
                    isEven ? "reveal-video-left" : "reveal-video-right"
                  )}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <video
                      src={service.videoSrc}
                      poster={service.posterSrc}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div
                  className={cn(
                    isEven ? "md:order-2" : "md:order-1",
                    isEven ? "reveal-text-right" : "reveal-text-left"
                  )}
                >
                  <p className="font-mono text-accent text-sm uppercase mb-2">
                    {service.tag}
                  </p>

                  <h3 className="text-4xl md:text-6xl font-extrabold uppercase mb-6">
                    {service.headline}
                  </h3>

                  <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CapabilityGrid;