"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { num: "+۱۵", label: "سال تجربه" },
  { num: "+۵۰۰", label: "پروژه موفق" },
  { num: "+۱۰۰۰", label: "مشتری راضی" },
  { num: "+۵۰", label: "همکار تجاری" },
];

const values = [
  {
    title: "کیفیت",
    desc: "ما هرگز از کیفیت کوتاه نمی‌آییم. بهترین مواد و بهترین اجرا، رمز موفقیت ماست.",
    icon: "💎",
  },
  {
    title: "صداقت",
    desc: "شفافیت در قیمت‌گذاری و ارائه مشاوره صادقانه، اصل اول کار ماست.",
    icon: "🤝",
  },
  {
    title: "تعهد",
    desc: "به تعهدات خود پایبندیم. زمان‌بندی دقیق و تحویل به موقع پروژه‌ها.",
    icon: "✅",
  },
  {
    title: "نوآوری",
    desc: "همواره به دنبال بهترین روش‌ها و فناوری‌های جدید در صنعت عایق‌کاری هستیم.",
    icon: "🚀",
  },
];

export default function AboutContent() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-bl from-primary-dark via-primary to-primary-light text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-black mb-6"
          >
            درباره ایزوگام پارسی
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-8"
          >
            ایزوگام پارسی با بیش از ۱۵ سال سابقه درخشان در صنعت عایق‌کاری ساختمان،
            یکی از معتبرترین مراکز فروش و نصب ایزوگام در نوشهر و شمال کشور است.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl sm:text-4xl font-black text-primary">{s.num}</div>
                <div className="text-slate-500 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-black text-primary mb-6">
                داستان ما
              </h2>
              <div className="space-y-4 text-slate-600 leading-8">
                <p>
                  ایزوگام پارسی از سال ۱۳۸۸ فعالیت خود را در زمینه فروش و نصب ایزوگام
                  در نوشهر آغاز کرد. از همان ابتدا، تمرکز ما بر ارائه بهترین کیفیت
                  و خدمات حرفه‌ای بوده است.
                </p>
                <p>
                  با گذشت سال‌ها و با جلب اعتماد صدها مشتری، امروز افتخار می‌کنیم
                  که یکی از بزرگ‌ترین و معتبرترین مراکز ایزوگام در شمال کشور هستیم.
                </p>
                <p>
                  تیم ما متشکل از متخصصان مجرب با سال‌ها تجربه در صنعت عایق‌کاری است
                  که با استفاده از بهترین متریال و تجهیزات، کیفیتی بی‌نظیر ارائه می‌دهند.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-3xl h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-7xl mb-4">🏗️</div>
                <p className="text-primary font-bold text-xl">ایزوگام پارسی</p>
                <p className="text-slate-500 text-sm">از ۱۳۸۸ تاکنون</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4">
              ارزش‌های ما
            </h2>
            <p className="text-slate-500">اصولی که ما را راهنمایی می‌کنند</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
              >
                <span className="text-4xl block mb-3">{v.icon}</span>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-6">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-primary mb-4">
            آماده همکاری هستیم
          </h2>
          <p className="text-slate-500 mb-8">
            برای مشاوره رایگان یا ثبت سفارش با ما تماس بگیرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3 bg-gradient-to-l from-primary to-primary-light text-white font-bold rounded-xl shadow-lg cursor-pointer"
              >
                ثبت سفارش
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                تماس با ما
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
