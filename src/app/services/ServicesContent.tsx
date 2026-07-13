"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "نصب ایزوگام پشت‌بام",
    desc: "نصب حرفه‌ای ایزوگام بر روی انواع پشت‌بام‌های مسکونی و تجاری با تضمین آب‌بندی کامل",
    icon: "🏠",
    features: [
      "بازدید رایگان از محل",
      "آماده‌سازی کامل سطح",
      "نصب با ابزار حرفه‌ای",
      "تست آب‌بندی نهایی",
    ],
  },
  {
    title: "ایزوگام استخر و جکوزی",
    desc: "عایق‌کاری تخصصی استخرها و جکوزی‌ها با ایزوگام مخصوص آب مناسب فضاهای مرطوب",
    icon: "🏊",
    features: [
      "ایزوگام مخصوص آب مداوم",
      "مقاوم در برابر کلر",
      "چندین لایه محافظتی",
      "ضمانت ۱۲ ساله",
    ],
  },
  {
    title: "عایق‌کاری سرویس بهداشتی",
    desc: "جلوگیری از نشت آب در سرویس‌های بهداشتی با استفاده از بهترین متریال عایق",
    icon: "🚿",
    features: [
      "عایق‌کاری کف و دیوار",
      "جلوگیری از نفوذ رطوبت",
      "مناسب بازسازی",
      "عمر طولانی",
    ],
  },
  {
    title: "پروژه‌های بزرگ تجاری",
    desc: "اجرای پروژه‌های بزرگ ساختمانی شامل برج‌ها، مراکز تجاری و مجتمع‌های مسکونی",
    icon: "🏗️",
    features: [
      "ظرفیت اجرای بالا",
      "تیم مجرب و متخصص",
      "تجهیزات پیشرفته",
      "تحویل به موقع",
    ],
  },
  {
    title: "تعمیر و ترمیم ایزوگام",
    desc: "رفع نشتی و تعمیر ایزوگام‌های فرسوده و آسیب‌دیده با ضمانت",
    icon: "🔧",
    features: [
      "شناسایی محل نشتی",
      "ترمیم بدون تخریب",
      "هزینه مقرون‌به‌صرفه",
      "ضمانت ترمیم",
    ],
  },
  {
    title: "مشاوره و کارشناسی",
    desc: "مشاوره رایگان توسط کارشناسان مجرب برای انتخاب بهترین راهکار عایق‌کاری",
    icon: "💡",
    features: [
      "مشاوره رایگان",
      "بازدید از محل",
      "ارائه پیشنهاد فنی",
      "برآورد هزینه دقیق",
    ],
  },
];

export default function ServicesContent() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            خدمات نصب ایزوگام
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            خدمات تخصصی عایق‌کاری و نصب ایزوگام برای انواع سازه‌های ساختمانی با تضمین کیفیت و رضایت مشتری
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <span className="text-5xl block mb-4">{service.icon}</span>
              <h3 className="font-bold text-xl text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-7 mb-6">
                {service.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/order">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  className="inline-block w-full text-center py-3 bg-primary/5 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  درخواست خدمات
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-l from-primary to-primary-light rounded-3xl p-10 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            نیاز به مشاوره رایگان دارید؟
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            کارشناسان ما آماده پاسخگویی به سوالات شما و ارائه بهترین راهکار هستند
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+989XXXXXXXXX">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-xl cursor-pointer"
              >
                📞 تماس بگیرید
              </motion.span>
            </a>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all cursor-pointer"
              >
                فرم تماس
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
