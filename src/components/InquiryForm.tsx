"use client";

import React, { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";

/* ------------------ Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ Types ------------------ */

type InquiryFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirements: string;
  files: FileList | null;
};

/* ------------------ Section ------------------ */

const InquiryForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: "",
    files: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Form Data Submitted:", formData);

      showSuccess("Inquiry submitted successfully! We'll be in touch.");

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirements: "",
        files: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch {
      // Optional: add showError later if backend fails
      console.error("Inquiry submission failed");
    }
  };

  return (
    <section className="bg-background py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[6rem] border-b border-accent/20">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-primary mb-6"
          >
            Start Your Project
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-foreground font-medium"
          >
            Ready to move from concept to reliable production? Tell us about your
            manufacturing needs.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4"
          >
            This isn’t just a contact form — it’s your first step toward a
            managed manufacturing journey.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-accent/30 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <Label htmlFor="name" className="text-lg font-semibold text-primary mb-2 block">
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <Label htmlFor="company" className="text-lg font-semibold text-primary mb-2 block">
              Company Name
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <Label htmlFor="email" className="text-lg font-semibold text-primary mb-2 block">
              Work Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <Label htmlFor="phone" className="text-lg font-semibold text-primary mb-2 block">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </motion.div>

          {/* Requirements */}
          <motion.div variants={itemVariants}>
            <Label htmlFor="requirements" className="text-lg font-semibold text-primary mb-2 block">
              Manufacturing Requirements
            </Label>
            <Textarea
              id="requirements"
              name="requirements"
              rows={6}
              value={formData.requirements}
              onChange={handleChange}
              required
            />
          </motion.div>

          {/* File Upload */}
          <motion.div variants={itemVariants}>
            <Label className="text-lg font-semibold text-primary mb-2 block">
              Upload CAD Files / Technical Drawings (Optional)
            </Label>

            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-xl cursor-pointer bg-secondary"
            >
              <UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop
              </p>
              {formData.files && (
                <p className="text-sm text-accent mt-2">
                  {formData.files.length} file(s) selected
                </p>
              )}
            </label>

            <Input
              ref={fileInputRef}
              id="file-upload"
              type="file"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
          </motion.div>

          {/* Submit */}
          <motion.div variants={itemVariants}>
            <Button type="submit" className="w-full" size="lg">
              Submit Inquiry
            </Button>
          </motion.div>
        </motion.form>

        {/* Closing */}
        <motion.p
          className="text-center text-lg md:text-xl text-foreground mt-16 md:mt-24 max-w-4xl mx-auto font-medium"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our goal: to collect high-quality leads ready for a production quote.
        </motion.p>

      </div>
    </section>
  );
};

export default InquiryForm;