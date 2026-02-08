"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

/* ------------------ Motion Variants ------------------ */

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ------------------ Data ------------------ */

const navLinks = [
  { name: "Home", href: "/" },
];

const servicesLinks = [
  { name: "Mass Production", href: "/services/mass-production" },
  { name: "Product Design", href: "/services/product-design" },
  { name: "Prototyping", href: "/services/prototyping" },
];

const sectorsLinks = [
  { name: "Consumer Electronics", href: "/sectors/consumer-electronics" },
  { name: "Defence", href: "/sectors/defence" },
  { name: "EV", href: "/sectors/ev" },
];

/* ------------------ Component ------------------ */

const Header = () => {
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-accent/20 rounded-b-3xl shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-primary hover:text-accent transition-colors"
        >
          MLWORKx
        </Link>

        {/* ---------------- Desktop Nav ---------------- */}
        <nav className="hidden md:flex items-center space-x-6">

          {/* Home */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-foreground hover:text-accent font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Services */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-card border border-border rounded-lg shadow-lg p-1">
              {servicesLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link
                    to={link.href}
                    className="block px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sectors */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Sectors <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-card border border-border rounded-lg shadow-lg p-1">
              {sectorsLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link
                    to={link.href}
                    className="block px-4 py-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Blog (BETWEEN Sectors & CTA) */}
          <Link
            to="/blog"
            className="text-foreground hover:text-accent font-medium transition-colors"
          >
            Blog
          </Link>

          {/* CTA */}
          <Link to="/contact">
            <Button size="sm" className="rounded-full">
              Get Quote
            </Button>
          </Link>
        </nav>

        {/* ---------------- Mobile Nav ---------------- */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[260px] sm:w-[300px] bg-card border-l border-accent/20 rounded-l-3xl p-6"
          >
            <Link
              to="/home"
              className="text-2xl font-extrabold text-primary mb-8 block"
            >
              MLWORKx
            </Link>

            <nav className="flex flex-col space-y-4">

              {/* / */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="justify-between text-lg">
                    Services <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-secondary border border-border rounded-lg p-1">
                  {servicesLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <Link
                        to={link.href}
                        className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
                      >
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Sectors */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="justify-between text-lg">
                    Sectors <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-secondary border border-border rounded-lg p-1">
                  {sectorsLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <Link
                        to={link.href}
                        className="block px-4 py-2 rounded-md hover:bg-muted transition-colors"
                      >
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Blog */}
              <Link
                to="/blog"
                className="text-lg hover:text-accent transition-colors"
              >
                Blog
              </Link>

              {/* CTA */}
              <Link to="/contact">
                <Button size="lg" className="mt-4 rounded-full">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </motion.header>
  );
};

export default Header;
  