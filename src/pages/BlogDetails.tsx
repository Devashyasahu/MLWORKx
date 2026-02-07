import { useParams } from "react-router-dom";
import { getBlogs } from "@/lib/getblog";
import { useEffect, useState } from "react";
import { Blog } from "@/types/blog";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    getBlogs().then((blogs) => {
      setBlog(blogs.find((b) => b.slug === slug) || null);
    });
  }, [slug]);

  if (!blog) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="opacity-80">{blog.description}</p>
    </div>
  );
}
