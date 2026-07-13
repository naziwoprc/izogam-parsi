"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function CTASection() {
  return (
    <SectionWrapper className="py-20 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black text-white mb-6"
        >
          آماده شروع پروژه خود هستید؟
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-8"
        >
          همین الان سفارش خود را ثبت کنید یا برای مشاوره رایگان با ما تماس بگیرید.
          تیم ما آماده خدمت‌رسانی به شماست.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/order">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              ثبت سفارش آنلاین
            </motion.span>
          </Link>
          <a href="tel:+989XXXXXXXXX">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
            >
              📞 تماس بگیرید
            </motion.span>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
