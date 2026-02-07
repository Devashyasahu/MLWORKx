import { sanityClient } from "./sanity";

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  image?: string | null;
};

export async function getBlogs(): Promise<Blog[]> {
  return sanityClient.fetch(
    `
    *[
      _type == "post" &&
      defined(slug.current) &&
      defined(publishedAt)
    ]
    | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      "image": mainImage.asset->url
    }
  `
  );
}
