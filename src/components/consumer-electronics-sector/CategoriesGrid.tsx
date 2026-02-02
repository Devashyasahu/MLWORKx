"use client";

import React from "react";
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
    techTag: "Zigbee/Matter",
  },
  {
    name: "IoT-Enabled Consumer Products",
    description: "Internet-connected gadgets for enhanced user experiences.",
    icon: Wifi,
    image: "/images/MEDITATION DEVICE 1.1604.jpg",
    techTag: "BLE/Wi-Fi",
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
    techTag: "USB-C/Qi",
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
  return (
  <section
  className="
    relative
    bg-background
    pt-32 pb-32
    md:pt-36 md:pb-36
    border-b border-accent/20
    overflow-hidden
  "
>
  <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            Consumer electronics categories we work with.
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto font-semibold">
            Our expertise spans a wide range of consumer-facing technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category, i) => (
            <motion.div
              key={category.name}
              className="bg-card p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/30 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-48 mb-6 rounded-xl overflow-hidden border border-border flex items-center justify-center bg-secondary">
                <BlueprintImage
                  src={category.image}
                  alt={category.name}
                  className="rounded-xl"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <category.icon className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  {category.name}
                </h3>
              </div>

              <p className="text-foreground mb-3">
                {category.description}
              </p>

              <p className="mt-auto font-mono text-accent text-sm uppercase">
                // {category.techTag}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesGrid;