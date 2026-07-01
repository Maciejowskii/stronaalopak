"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Bookmark, Share2 } from "lucide-react";
import { BLOG_POSTS } from "@/data/mockData";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Very simple markdown parser for rendering body content
  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((block, index) => {
      if (block.startsWith("### ")) {
        return (
          <h3 key={index} className="font-serif text-2xl font-bold text-brand-dark mt-8 mb-4">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("1. ") || block.startsWith("* ")) {
        const items = block.split("\n");
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-brand-dark text-sm md:text-base font-light leading-relaxed">
            {items.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace(/^(1\.\s|\*\s)/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
            ))}
          </ul>
        );
      }
      // Simple bold text replacement
      const processedBlock = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      return (
        <p
          key={index}
          className="text-brand-dark text-sm md:text-base font-light leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: processedBlock }}
        />
      );
    });
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-brand-teal-hover transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Wróć do bazy wiedzy</span>
      </Link>

      {/* Meta header */}
      <div className="space-y-4">
        <span className="text-xs bg-brand-mint text-brand-teal px-3 py-1 rounded-full font-semibold">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-silver">
          <div className="flex items-center gap-6 text-xs text-brand-gray font-light">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-brand-gray hover:text-brand-teal p-2 rounded-full hover:bg-brand-mint transition-colors">
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link skopiowany do schowka!");
              }}
              className="text-brand-gray hover:text-brand-teal p-2 rounded-full hover:bg-brand-mint transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Large Featured Image */}
      <div className="aspect-[21/9] relative rounded-3xl overflow-hidden border border-brand-silver bg-white shadow-sm">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="prose max-w-none pt-4">
        {renderParagraphs(post.content)}
      </div>

      {/* CTA Box bottom of article */}
      <div className="bg-brand-mint/30 rounded-3xl border border-brand-mint p-8 text-center space-y-4 mt-12">
        <h4 className="font-serif text-xl font-bold text-brand-dark">Potrzebujesz ekologicznych opakowań dla swojego biznesu?</h4>
        <p className="text-brand-gray text-xs font-light max-w-lg mx-auto">
          Skorzystaj z wiedzy naszych ekspertów i zamów bezpłatne próbki, aby ocenić dopasowanie foremek lub butelek Alopak do Twoich maszyn pakujących.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <Link
            href="/sklep"
            className="bg-brand-teal text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-brand-teal-hover transition-colors"
          >
            Zobacz katalog
          </Link>
          <Link
            href="/sklep?inquiry=true"
            className="bg-white border border-brand-silver text-brand-dark text-xs font-semibold px-6 py-3 rounded-full hover:bg-brand-cream transition-colors"
          >
            Skontaktuj się
          </Link>
        </div>
      </div>
    </article>
  );
}
