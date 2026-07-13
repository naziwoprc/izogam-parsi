"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const reasons = [
  {
    title: "تجربه بالا",
    desc: "بیش از ۱۵ سال تجربه در صنعت ایزوگام و عایق‌کاری ساختمان با صدها پروژه موفق",
    icon: "🏆",
  },
  {
    title: "پروژه‌های بزرگ",
    desc: "اجرای پروژه‌های بزرگ ساختمانی از جمله برج‌ها، مراکز تجاری و مجتمع‌های مسکونی",
    icon: "🏗️",
  },
  {
    title: "بهترین برندها",
    desc: "استفاده از معتبرترین و باکیفیت‌ترین برندهای ایزوگام داخلی و خارجی",
    icon: "⭐",
  },
  {
    title: "ضمانت اجرا",
    desc: "ارائه ضمانت‌نامه کتبی برای تمام پروژه‌ها با پشتیبانی پس از فروش",
    icon: "📋",
  },
  {
    title: "مشاوره رایگان",
    desc: "مشاوره تخصصی رایگان و بازدید از محل پروژه بدون هزینه",
    icon: "💬",
  },
  {
    title: "قیمت رقابتی",
    desc: "ارائه بهترین قیمت‌ها با حفظ بالاترین استانداردهای کیفی",
    icon: "💰",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-4"
          >
            چرا ما؟
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            چرا ایزوگام پارسی را انتخاب کنید؟
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            دلایلی که ما را از رقبا متمایز می‌کند و اعتماد مشتریان را جلب کرده است
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 cursor-default"
            >
              <span className="text-4xl block mb-4">{item.icon}</span>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
