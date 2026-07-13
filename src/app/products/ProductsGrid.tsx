"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="tilt-card group"
        >
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
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
                <span className="text-sm text-slate-500">ضخامت: {product.thickness}</span>
                <span className="text-sm text-slate-500">{product.brand}</span>
              </div>
              <p className="text-slate-600 text-sm leading-6 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.features.slice(0, 3).map((f) => (
                  <span key={f} className="px-2 py-1 bg-primary/5 rounded-lg text-xs text-primary">
                    {f}
                  </span>
                ))}
              </div>
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
  );
}
