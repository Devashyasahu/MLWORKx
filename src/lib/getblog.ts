import { mockBlogs } from "@/data/mockblog";
import { Blog } from "@/types/blog";

export async function getBlogs(): Promise<Blog[]> {
  // TEMP: replace with CMS fetch later
  return mockBlogs;

  /*
  LATER (CMS):
  const res = await fetch("CMS_API_URL");
  return await res.json();
  */
}
