"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post, i) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
        >
          {/* Article Header */}
          <div className="h-48 bg-gradient-to-br from-primary/5 to-primary-light/10 flex items-center justify-center relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20 absolute blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="text-6xl relative">📰</div>
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
              {post.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} دقیقه مطالعه</span>
            </div>
            <h2 className="font-bold text-xl text-slate-800 mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-500 text-sm leading-7 mb-6">
              {post.excerpt}
            </p>
            <Link href={`/blog/${post.slug}`}>
              <motion.span
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm cursor-pointer"
              >
                ادامه مطلب
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
