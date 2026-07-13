"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-primary">صفحه اصلی</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary">محصولات</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-3xl h-80 lg:h-full flex items-center justify-center relative overflow-hidden"
          >
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20 absolute blur-3xl" />
            <svg className="w-40 h-40 text-primary/30" viewBox="0 0 100 100" fill="currentColor">
              <rect x="10" y="15" width="80" height="70" rx="10" opacity="0.3" />
              <circle cx="50" cy="50" r="25" opacity="0.5" />
              <circle cx="50" cy="50" r="10" opacity="0.8" />
            </svg>
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold">
              {product.warranty}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl sm:text-3xl font-black text-primary mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1.5 bg-primary/5 rounded-lg text-sm text-primary font-medium">
                ضخامت: {product.thickness}
              </span>
              <span className="px-3 py-1.5 bg-primary/5 rounded-lg text-sm text-primary font-medium">
                برند: {product.brand}
              </span>
            </div>

            <p className="text-slate-600 leading-8 mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-slate-800 mb-4">ویژگی‌ها</h3>
              <ul className="space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-slate-800 mb-4">کاربردها</h3>
              <div className="flex flex-wrap gap-2">
                {product.usage.map((u) => (
                  <span key={u} className="px-4 py-2 bg-primary/5 rounded-xl text-sm text-primary">
                    {u}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/order" className="flex-1">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-center py-4 bg-gradient-to-l from-primary to-primary-light text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  ثبت سفارش
                </motion.span>
              </Link>
              <a href="tel:+989XXXXXXXXX" className="flex-1">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block text-center py-4 border-2 border-primary text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  استعلام قیمت
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
