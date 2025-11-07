import React from "react";
import bgLeaves from "@/public/bg_leaves.png";
import Image from "next/image";
import Link from "next/link";
import { BlogMetadata } from "../lib/postsMiddleware";

const SectionAktualnosci = ({ posts }: { posts: BlogMetadata[] }) => {
  if (!posts || posts.length === 0) return null;

  const firstPost = posts[0];
  const nextPosts = posts.slice(1, 3);

  return (
    <section className="pb-[80px]">
      <div className="sm:px-5 xl:px-[45px]">
        <Image
          src={bgLeaves.src}
          width={1190}
          height={130}
          alt="Tło z liściami"
          className="w-full max-w-full"
        />
      </div>
      <div className="text-4xl xl:text-[50px] w-full bg-[#BE7837] text-[50px] font-bold text-[#F9F9F1] px-10 xl:pl-[130px] pt-10 xl:pt-[40px] pb-[40px]">
        <h3>Aktualności</h3>
      </div>

      <div className="mt-8 grid grid-cols-1 h-auto xl:h-[440px] xl:grid-cols-[0.65fr_0.35fr] text-left gap-4 px-5 xl:px-[45px]">
        <div
          key={firstPost.slug}
          className="rounded-[20px] overflow-hidden box-shadow"
        >
          <Link
            className="gradient__overlay relative"
            href={`/blogs/${firstPost.slug}`}
          >
            <Image
              src={firstPost.imagePreview}
              width={760}
              height={440}
              alt={firstPost.description}
              className="w-full max-w-full h-[440px]  object-cover"
            />
            <div className="absolute z-20 bottom-0 p-5 text-center w-full text-white">
              <p className="text-2xl font-semibold mb-3">{firstPost.title}</p>
              <p className="text-xs">{firstPost.publishDate}</p>
            </div>
          </Link>
        </div>
        <div className="flex gap-4 flex-col">
          {nextPosts.map((nextPost) => (
            <div
              key={nextPost.slug}
              className="h-full rounded-[20px] overflow-hidden box-shadow"
            >
              <Link
                className="gradient__overlay relative"
                href={`/blogs/${nextPost.slug}`}
              >
                <div className="w-full h-full">
                  <Image
                    src={nextPost.imagePreview}
                    width={400}
                    height={200}
                    alt={nextPost.description}
                    className="w-full max-w-full h-full max-h-[212px] object-cover "
                  />
                  <div className="absolute z-20 bottom-0 p-2 text-center w-full text-white">
                    <p className="text-sm font-semibold mb-2">
                      {nextPost.title}
                    </p>
                    <p className="text-xs">{nextPost.publishDate}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {nextPosts.length === 1 && (
            <div
              className="h-full rounded-[20px] overflow-hidden hidden xl:block"
              aria-hidden="true"
            />
          )}

          {/* 
          <div className="h-full rounded-[20px] overflow-hidden box-shadow">
            <Link className="gradient__overlay relative" href="/">
              <div className="w-full h-full">
                <Image
                  src={imageArticle_1.src}
                  width={400}
                  height={200}
                  alt="Artykuł - Drugi wpis"
                  className="w-full max-w-full h-full max-h-[212px] object-cover "
                />
                <div className="absolute z-20 bottom-0 p-2 text-center w-full text-white">
                  <p className="text-sm font-semibold mb-2">
                    Atrakcje i udogodnienia w Olsza Park Pod Białuchą
                  </p>
                  <p className="text-xs">24 Wrzesnia 2024</p>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SectionAktualnosci;
