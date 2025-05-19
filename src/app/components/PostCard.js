"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PostCard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://rewash-store.bright-ignite.com/api/blogs",
          { cache: "no-store" }
        );
        const json = await res.json();

        if (json?.status && Array.isArray(json.data)) {
          const mapped = json.data.map((item) => ({
            id: item.id,
            title: item.title?.ar || item.title?.en || "",
            description: item.description?.ar || item.description?.en || "",
            image: item.image,
            slug: item.slug?.ar || item.slug?.en || "",
            tag: item.tag?.ar || item.tag?.en || "بدون وسم",
          }));
          setPosts(mapped);
        } else {
          console.warn("Unexpected response structure:", json);
        }
      } catch (err) {
        console.error("Error fetching Blog Info:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div className="col" key={post.id}>
          <Link href={`/${post.slug}`}>
            <div
              className="bg-img h-30vh rounded p-5"
              style={{ backgroundImage: `url(${post.image})` }}
            />
          </Link>

          <div className="card-body mt-2">
            <small className="text-body-secondary">{post.tag}</small>

            <h1 className="text-truncate fw-bold fs-5 my-2">
              <Link
                href={`/${post.slug}`}
                className="text-body text-decoration-none"
              >
                {post.title}
              </Link>
            </h1>

            <p className="text-body-secondary m-0">{post.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
