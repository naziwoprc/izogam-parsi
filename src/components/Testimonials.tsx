"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    name: "احمد محمدی",
    role: "صاحب‌خانه - نوشهر",
    text: "خیلی از کار ایزوگام پارسی راضی هستم. با دقت و حرفه‌ای کار کردند و بعد از دو سال هیچ مشکلی نداشتیم. ممنون از تیم حرفه‌ای شما.",
    rating: 5,
  },
  {
    name: "مهندس رضایی",
    role: "پیمانکار ساختمان",
    text: "برای چندین پروژه بزرگ با ایزوگام پارسی همکاری کردیم. کیفیت محصولات و نحوه اجرا واقعاً عالی بود. قطعاً ادامه همکاری خواهیم داد.",
    rating: 5,
  },
  {
    name: "فاطمه کریمی",
    role: "صاحب‌خانه - چالوس",
    text: "بعد از چندین سال مشکل نشتی، ایزوگام پارسی مشکل ما رو کاملاً حل کرد. قیمت مناسب و کار تمیز. حتماً به دیگران هم معرفی می‌کنم.",
    rating: 5,
  },
  {
    name: "علی حسینی",
    role: "مدیر پروژه ساختمانی",
    text: "حرفه‌ای‌ترین تیمی که تا الان باهاشون کار کردم. زمان‌بندی دقیق، کیفیت بالا و پشتیبانی عالی. واقعاً قابل اعتماد هستند.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4"
          >
            نظرات مشتریان
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
            مشتریان ما چه می‌گویند؟
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 sm:p-10 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-lg leading-8 mb-6">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div>
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[current].name[0]}
                </div>
                <h4 className="font-bold text-slate-800">
                  {testimonials[current].name}
                </h4>
                <p className="text-slate-500 text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="نظر قبلی"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-slate-300"
                  }`}
                  aria-label={`نظر ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label="نظر بعدی"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
