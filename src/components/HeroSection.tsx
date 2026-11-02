"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

const IzogamScene = dynamic(() => import("./IzogamScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-bl from-primary-dark via-primary to-primary-light">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm"
            >
              ✨ بهترین کیفیت ایزوگام در شمال کشور
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              ایزوگام پارسی
              <br />
              <span className="text-white/80 text-2xl sm:text-3xl md:text-4xl font-bold">
                فروش و نصب تخصصی ایزوگام
              </span>
              <br />
              <span className="text-accent text-xl sm:text-2xl md:text-3xl font-bold">
                در نوشهر و شمال کشور
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-8">
              با بیش از ۱۵ سال تجربه، ارائه‌دهنده انواع ایزوگام با ضمانت کیفیت،
              نصب حرفه‌ای و پشتیبانی پس از فروش. ساختمان شما در امان ماست.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/order">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer text-center"
                >
                  ثبت سفارش
                </motion.span>
              </Link>
              <a href="tel:+989117492212">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all cursor-pointer text-center"
                >
                  📞 تماس فوری
                </motion.span>
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { num: "+۱۵", label: "سال تجربه" },
                { num: "+۵۰۰", label: "پروژه موفق" },
                { num: "+۱۰۰۰", label: "مشتری راضی" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {s.num}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <IzogamScene />
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 108C120 96 240 72 360 60C480 48 600 48 720 54C840 60 960 72 1080 78C1200 84 1320 84 1380 84L1440 84V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F4F7FA"
          />
        </svg>
      </div>
    </section>
  );
}
