"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { tr } from "date-fns/locale";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Container from "@/components/container";

function getData() {
  const posts: Post[] = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return posts;
}

export default function PostsPage() {
  const [category, setCategory] = useState<string | null>(null);
  const posts: Post[] = getData();

  // Kategorilere göre benzersiz listeleme
  const categories = Array.from(new Set(posts.map((post) => post.articleType)));

  // Kategoriye göre filtreleme
  const filteredPosts = category
    ? posts.filter((post) => post.articleType === category)
    : posts;

  return (
    <>
      <Container>
        <div className="max-w-2xl mx-auto my-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {
              posts.length !== 0 &&
              <button
                onClick={() => setCategory(null)}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${category === null ? "ring-2 ring-offset-2 ring-blue-700" : ""}`}
              >
                Tüm Yazılar
              </button>
            }

            {categories.map((type) => (
              <button
                key={type}
                onClick={() => setCategory(type)}
                className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${category === type ? "ring-2 ring-offset-2 ring-green-700" : ""}`}
              >
                {type}
              </button>
            ))}
          </div>
          {filteredPosts.map((post) => (
            <article
              key={post._id}
              className="bg-gray-50 shadow-lg rounded-lg overflow-hidden my-5 transform hover:scale-105 transition-transform duration-300"
            >
              <NextLink href={`/post/${post.slug}`}>
                <div className="block p-6">
                  <header>
                    <h3 className="font-normal text-2xl mb-2 text-black transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 text-base">{post.subtitle}</p>
                  </header>
                  <footer className="mt-4">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <time dateTime={post.date}>
                        {format(parseISO(post.date!), "d LLLL yyyy", {
                          locale: tr,
                        })}
                      </time>
                      <span>·</span>
                      <span>{post.readingTime.text}</span>
                    </div>
                  </footer>
                </div>
              </NextLink>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
