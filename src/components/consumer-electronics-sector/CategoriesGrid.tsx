"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Wifi,
  Watch,
  Headphones,
  ToyBrick,
  HeartHandshake,
} from "lucide-react";
import BlueprintImage from "@/components/BlueprintImage";

const categories = [
  {
    name: "Smart Home Devices",
    description: "Connected devices for home automation and intelligent living.",
    icon: Home,
    image: "/images/heater.png",
    techTag: "Zigbee / Matter",
  },
  {
    name: "IoT-Enabled Consumer Products",
    description: "Internet-connected gadgets for enhanced user experiences.",
    icon: Wifi,
    image: "/images/MEDITATION DEVICE 1.1604.jpg",
    techTag: "BLE / Wi-Fi",
  },
  {
    name: "Wearable Electronics",
    description: "Compact, ergonomic, and high-performance devices for personal use.",
    icon: Watch,
    image: "/images/Tray For Render.1292.jpg",
    techTag: "Low-Power MCU",
  },
  {
    name: "Smart Accessories",
    description: "Innovative accessories that integrate seamlessly with existing tech.",
    icon: Headphones,
    image: "/images/LASER.png",
    techTag: "USB-C / Qi",
  },
  {
    name: "Electronics Toys & Learning Devices",
    description: "Interactive and educational products for children and hobbyists.",
    icon: ToyBrick,
    image: "/images/YU 2.png",
    techTag: "STEM Certified",
  },
  {
    name: "Connected Lifestyle Products",
    description: "Devices that enhance daily routines through smart connectivity.",
    icon: HeartHandshake,
    image: "/images/MEDITATION DEVICE 1.1604.jpg",
    techTag: "Cloud Integration",
  },
];

const CategoriesGrid = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-background pt-32 pb-52 border-b border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Consumer electronics categories we work with.
          </h2>
          <p className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
            Designed, engineered, and built for real-world products.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {categories.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {/* FLIP CARD */}
              <div
                className="relative h-[420px]"
                style={{ perspective: "1200px" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      hovered === i ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 bg-card border border-accent/30 rounded-3xl shadow-lg p-6 flex flex-col"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="h-44 mb-6 rounded-xl overflow-hidden border border-border bg-secondary flex items-center justify-center">
                      <BlueprintImage
                        src={item.image}
                        alt={item.name}
                        className="rounded-xl"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="h-6 w-6 text-accent" />
                      <h3 className="text-2xl font-bold text-primary">
                        {item.name}
                      </h3>
                    </div>

                    <p className="mt-auto font-mono text-accent text-sm uppercase">
                      // {item.techTag}
                    </p>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 bg-card border border-accent/30 rounded-3xl shadow-lg p-8 flex items-center justify-center text-center"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {item.name}
                      </h3>
                      <p className="text-lg text-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesGrid;
