"use client";

import React from "react";
import { Database, TrendingUp, BarChart2 } from "lucide-react";

const SmarterSupplyChain = () => {
  return (
    <section className="bg-background py-24 md:py-32 relative z-0 border-b border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
            A smarter way to run the supply chain.
          </h2>

          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Data-guided decisions for optimal supplier selection and production planning.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
            We transform raw factory data into actionable insights, giving you unparalleled control.
          </p>
        </div>

        {/* ================= DATA-DRIVEN SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ===== IMAGE (DATA-DRIVEN IMAGE) ===== */}
          <div className="w-full aspect-video rounded-[48px] border-8 border-card shadow-xl overflow-hidden">
            <img
              src="/images/robot.jpg"
              alt="Data-driven supply chain"
              className="w-full h-full object-cover rounded-[40px]"
              loading="lazy"
            />
          </div>

          {/* ===== TEXT (REAL-TIME INSIGHTS) ===== */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-accent text-sm md:text-base uppercase mb-2">
               DATA-DRIVEN
            </p>

            <h3 className="text-4xl md:text-5xl font-extrabold uppercase text-primary mb-6 leading-tight">
              Real-time Insights
            </h3>

            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              Our platform provides a transparent view of your production, from raw materials to finished goods.
            </p>

            <ul className="space-y-3 text-foreground text-base md:text-lg">
              <li className="flex items-center gap-3">
                <Database className="h-5 w-5 text-accent" />
                Data from factory floor to client dashboard.
              </li>

              <li className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-accent" />
                Optimize production with predictive analytics.
              </li>

              <li className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-accent" />
                Performance metrics at your fingertips.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmarterSupplyChain;