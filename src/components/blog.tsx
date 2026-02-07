import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getBlogs } from "@/lib/getblog";
import { Blog } from "@/types/blog";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <motion.div
  key={blog.id}
  initial="rest"
  whileHover="hover"
  animate="rest"
  variants={{
    rest: { y: 0 },
    hover: { y: -8 },
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-800/80 to-neutral-900 shadow-lg"
>
  {/* IMAGE */}
  <div className="relative h-56 overflow-hidden">
    <motion.img
      src={blog.image}
      alt={blog.title}
      className="w-full h-full object-cover"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.08 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />

    {/* GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
  </div>

  {/* CONTENT */}
  <div className="relative p-6">
    <span className="text-xs uppercase tracking-wider text-muted-foreground">
      Blog
    </span>

    <h3 className="mt-2 text-xl font-semibold leading-snug">
      {blog.title}
    </h3>

    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
      {blog.description}
    </p>

    {/* CTA */}
    <motion.div
      variants={{
        rest: { opacity: 0, y: 6 },
        hover: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
    >
      Read article →
    </motion.div>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
}
