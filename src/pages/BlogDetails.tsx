import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanityClient } from "@/lib/sanity";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          body,
          "image": mainImage.asset->url,
          author->{name}
        }`,
        { slug }
      )
      .then(setBlog);
  }, [slug]);

  if (!blog) return <div className="p-10">Loading…</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-sm text-gray-500 mb-6">
        {blog.author?.name} · {new Date(blog.publishedAt).toDateString()}
      </p>

      {blog.image && (
        <img
          src={blog.image}
          className="w-full rounded-xl mb-8"
        />
      )}

      <div className="prose max-w-none">
        {blog.body?.map((block: any, i: number) => (
          <p key={i}>{block.children?.[0]?.text}</p>
        ))}
      </div>
    </div>
  );
}
