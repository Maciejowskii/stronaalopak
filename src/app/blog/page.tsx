import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Leaf } from "lucide-react";
import { BLOG_POSTS } from "@/data/mockData";

export default function BlogListPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <span className="text-xs text-brand-teal uppercase tracking-wider font-bold">Blog</span>
        <h1 className="font-serif text-4xl md:text-5xl text-brand-dark font-bold">
          Edukacja, Logistyka & Standardy
        </h1>
        <p className="text-brand-gray text-base font-light max-w-2xl leading-relaxed">
          Wszystko o surowcach, recyklingu, optymalizacji łańcucha dostaw oraz wymogach prawno-higienicznych związanych z opakowaniami metalowymi.
        </p>
      </div>

      {/* Main Feature Article Card */}
      <div className="bg-white rounded-[2rem] border border-brand-silver overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px]">
          <Image
            src={BLOG_POSTS[0].image}
            alt={BLOG_POSTS[0].title}
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4 items-center text-xs text-brand-gray font-light">
              <span className="bg-brand-mint text-brand-teal px-3 py-1 rounded-full font-semibold">
                Wyróżniony artykuł
              </span>
              <span>{BLOG_POSTS[0].date}</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-brand-dark leading-tight">
              {BLOG_POSTS[0].title}
            </h2>
            <p className="text-brand-gray text-sm font-light leading-relaxed">
              {BLOG_POSTS[0].excerpt}
            </p>
          </div>
          <div className="pt-6 border-t border-brand-silver">
            <Link
              href={`/blog/${BLOG_POSTS[0].slug}`}
              className="bg-brand-teal text-white hover:bg-brand-teal-hover text-xs font-semibold px-6 py-3 rounded-full transition-colors inline-flex items-center gap-2"
            >
              <span>Czytaj artykuł</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Sub Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-3xl border border-brand-silver overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Image */}
            <div className="aspect-[16/10] relative overflow-hidden bg-brand-mint/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[11px] text-brand-gray font-light">
                  <span className="font-semibold text-brand-teal">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-gray text-xs font-light line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-brand-silver flex justify-between items-center mt-6">
                <span className="text-[11px] text-brand-gray font-light flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-brand-teal hover:underline flex items-center gap-1"
                >
                  <span>Czytaj</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
