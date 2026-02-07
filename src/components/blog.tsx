import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getBlogs } from "@/lib/getblog";
import { Link } from "react-router-dom";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  image?: string;
  publishedAt: string;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs().then((data) => {
      console.log("BLOG DATA:", data); // 🔥 IMPORTANT
      setBlogs(data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            to={`/blog/${blog.slug}`}
            className="block"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(blog.publishedAt).toDateString()}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
