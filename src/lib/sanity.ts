import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "uhdenfbk", // ✅ REAL projectId from Sanity dashboard
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // fast public reads
});