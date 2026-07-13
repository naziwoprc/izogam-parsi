"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-primary">صفحه اصلی</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary">مقالات</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{post.title}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} دقیقه مطالعه</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-primary leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
            <div className="prose-custom">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl font-bold text-primary mt-8 mb-4">
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("- **")) {
                  const match = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                  if (match) {
                    return (
                      <div key={i} className="flex items-start gap-2 mb-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <p className="text-slate-600 leading-7">
                          <strong className="text-slate-800">{match[1]}</strong>
                          {match[2] && `: ${match[2]}`}
                        </p>
                      </div>
                    );
                  }
                }
                if (line.startsWith("- ")) {
                  return (
                    <div key={i} className="flex items-start gap-2 mb-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <p className="text-slate-600 leading-7">{line.replace("- ", "")}</p>
                    </div>
                  );
                }
                if (line.match(/^\d+\./)) {
                  return (
                    <div key={i} className="flex items-start gap-2 mb-2">
                      <span className="text-primary font-bold shrink-0">{line.match(/^\d+/)?.[0]}.</span>
                      <p className="text-slate-600 leading-7">{line.replace(/^\d+\.\s*/, "")}</p>
                    </div>
                  );
                }
                if (line.trim() === "") return <div key={i} className="h-3" />;
                return (
                  <p key={i} className="text-slate-600 leading-8 mb-3">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Share & CTA */}
          <div className="mt-8 bg-gradient-to-l from-primary to-primary-light rounded-3xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-3">نیاز به مشاوره دارید؟</h3>
            <p className="text-white/70 mb-6">
              برای مشاوره رایگان و ثبت سفارش با ما تماس بگیرید
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/order">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-6 py-3 bg-white text-primary font-bold rounded-xl cursor-pointer"
                >
                  ثبت سفارش
                </motion.span>
              </Link>
              <a href="tel:+989XXXXXXXXX">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-6 py-3 border-2 border-white text-white font-bold rounded-xl cursor-pointer"
                >
                  تماس بگیرید
                </motion.span>
              </a>
            </div>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <Link href="/blog">
              <motion.span
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-primary font-bold cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                بازگشت به مقالات
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
