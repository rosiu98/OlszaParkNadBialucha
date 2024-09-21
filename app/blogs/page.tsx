import React from "react";
import { getBlogPosts } from "../lib/postsMiddleware";
import Link from "next/link";
import Image from "next/image";

const Home = async () => {
  const posts = await getBlogPosts();
  return (
    <section id="blogs" className="container">
      <h1 className="text-3xl md:text-5xl mb-10 xl:mb-16 pt-[30px] pb-[34px] px-[45px]  font-bold text-[#F9F9F1] bg-[#AEE29C] rounded-[20px] relative box-shadow">
        Wydarzenia
      </h1>

      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="pb-8 max-w-full w-full">
            <Link
              className="no-underline grid grid-cols-1 xl:grid-cols-2 gap-5 items-center justify-start"
              href={`/blogs/${post.slug}`}
            >
              <div>
                <Image
                  src={post.imagePreview}
                  width={500}
                  height={500}
                  alt={post.description}
                  className="w-full my-0"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold mx-0 my-0 xl:mb-5">
                  {post.title}
                </h3>
                <p className="md:text-lg font-light">{post.description}</p>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  Opublikowano: {post.publishDate}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
