"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Input,
  Textarea,
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
} from "@/components/ui";
import { UploadCloud, Lock } from "lucide-react";
import { showSuccess } from "@/utils/toast";

/* ------------------ Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ------------------ Schema ------------------ */

const formSchema = z
  .object({
    enquiryType: z.enum(["General enquiry", "Request a quote"]),
    services: z.array(z.string()).optional(),
    sectors: z.string().optional(),
    fullName: z.string().min(1, "Full Name is required."),
    companyName: z.string().min(1, "Company Name is required."),
    email: z.string().email("Invalid email address."),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters."),
    files: z.any().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.enquiryType === "Request a quote") {
      if (!data.services?.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select at least one service.",
          path: ["services"],
        });
      }
      if (!data.sectors) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select a sector.",
          path: ["sectors"],
        });
      }
    }
  });

type ContactFormValues = z.infer<typeof formSchema>;

const servicesOptions = ["Product Design", "Prototyping", "Mass Production"];
const sectorsOptions = ["Consumer Electronics", "EV", "Defence", "Not sure yet"];

/* ------------------ Component ------------------ */

const ContactForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      enquiryType: "General enquiry",
      services: [],
      sectors: "",
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const enquiryType = watch("enquiryType");
  const selectedServices = watch("services");

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form Data Submitted:", data);
    showSuccess("Your inquiry has been sent! We'll be in touch shortly.");
    form.reset();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-accent/30 space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enquiry Type */}
      <motion.div variants={itemVariants}>
        <Label>Enquiry Type</Label>
        <Controller
          name="enquiryType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="General enquiry">General enquiry</SelectItem>
                <SelectItem value="Request a quote">Request a quote</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.enquiryType && <p className="text-destructive">{errors.enquiryType.message}</p>}
      </motion.div>

      {/* Conditional Fields */}
      {enquiryType === "Request a quote" && (
        <>
          <motion.div variants={itemVariants}>
            <Label>Services Required</Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {servicesOptions.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <Checkbox
                    checked={selectedServices?.includes(service)}
                    onCheckedChange={(checked) =>
                      setValue(
                        "services",
                        checked
                          ? [...(selectedServices || []), service]
                          : selectedServices?.filter((s) => s !== service) || []
                      )
                    }
                  />
                  <Label>{service}</Label>
                </div>
              ))}
            </div>
            {errors.services && <p className="text-destructive">{errors.services.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Label>Sector</Label>
            <Controller
              name="sectors"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {sectorsOptions.map((sector) => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.sectors && <p className="text-destructive">{errors.sectors.message}</p>}
          </motion.div>
        </>
      )}

      {/* Standard Fields */}
      {["fullName", "companyName", "email", "phone"].map((field) => (
        <motion.div key={field} variants={itemVariants}>
          <Label>{field.replace(/([A-Z])/g, " $1")}</Label>
          <Input {...form.register(field as any)} />
          {errors[field as keyof ContactFormValues] && (
            <p className="text-destructive">
              {errors[field as keyof ContactFormValues]?.message as string}
            </p>
          )}
        </motion.div>
      ))}

      {/* Message */}
      <motion.div variants={itemVariants}>
        <Label>Brief Description</Label>
        <Textarea {...form.register("message")} rows={6} />
        {errors.message && <p className="text-destructive">{errors.message.message}</p>}
      </motion.div>

      {/* File Upload */}
      <motion.div variants={itemVariants}>
        <Label>Upload Files (Optional)</Label>
        <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-xl cursor-pointer">
          <UploadCloud />
          <Input
            ref={fileInputRef}
            type="file"
            className="hidden"
            multiple
            onChange={(e) => setValue("files", e.target.files)}
          />
        </label>
      </motion.div>

      {/* Submit */}
      <motion.div variants={itemVariants}>
        <Button type="submit" size="lg" className="w-full rounded-full">
          Submit
        </Button>
        <p className="flex justify-center items-center gap-2 text-sm text-muted-foreground mt-4">
          <Lock className="h-4 w-4" /> Your information is kept confidential.
        </p>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;