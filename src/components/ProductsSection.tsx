"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { products } from "@/lib/products";

export default function ProductsSection() {
  const featured = products.slice(0, 3);

  return (
    <SectionWrapper className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4"
          >
            محصولات ما
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
            انواع ایزوگام باکیفیت
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            بهترین برندهای ایزوگام با تنوع در ضخامت و کاربرد برای هر نوع پروژه ساختمانی
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="tilt-card group"
            >
              <div className="bg-gradient-to-br from-light to-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Product Visual */}
                <div className="h-48 bg-gradient-to-br from-primary/5 to-primary-light/5 flex items-center justify-center relative overflow-hidden">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20 absolute blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative">
                    <svg className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-colors" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="15" y="20" width="70" height="60" rx="8" opacity="0.3" />
                      <circle cx="50" cy="50" r="20" opacity="0.5" />
                      <circle cx="50" cy="50" r="8" opacity="0.8" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                    {product.warranty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      ضخامت: {product.thickness}
                    </span>
                    <span className="text-sm text-slate-500">{product.brand}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-6 mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <Link href={`/products/${product.slug}`}>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block w-full text-center py-3 rounded-xl bg-gradient-to-l from-primary to-primary-light text-white font-bold text-sm hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
                    >
                      مشاهده جزئیات
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/products">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              مشاهده همه محصولات
            </motion.span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
