"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export const faqItems = [
  {
    q: "بهترین زمان نصب ایزوگام چه فصلی است؟",
    a: "بهترین زمان نصب ایزوگام فصول گرم سال (بهار و تابستان) است. دمای مناسب باعث چسبندگی بهتر و اجرای راحت‌تر می‌شود. البته تیم ما در تمام فصول قادر به اجرای پروژه است.",
  },
  {
    q: "تفاوت ایزوگام تک لایه و دو لایه چیست؟",
    a: "ایزوگام تک لایه مناسب سطوح ساده و بارش کم است، در حالی که ایزوگام دو لایه محافظت مضاعف ارائه می‌دهد و برای مناطق پربارش و سطوح بزرگ توصیه می‌شود. دو لایه عمر طولانی‌تر و ضمانت بیشتری دارد.",
  },
  {
    q: "آیا ضمانت نامه کتبی ارائه می‌دهید؟",
    a: "بله، تمام محصولات و خدمات نصب ما با ضمانت‌نامه کتبی ارائه می‌شوند. مدت ضمانت بسته به نوع محصول بین ۵ تا ۱۵ سال متغیر است.",
  },
  {
    q: "هزینه نصب ایزوگام چقدر است؟",
    a: "هزینه نصب بستگی به متراژ، نوع ایزوگام، وضعیت سطح و محل پروژه دارد. برای دریافت قیمت دقیق، با ما تماس بگیرید تا پس از بازدید رایگان، قیمت را اعلام کنیم.",
  },
  {
    q: "آیا بازدید رایگان انجام می‌دهید؟",
    a: "بله، بازدید اولیه از محل پروژه در نوشهر و حومه کاملاً رایگان است. کارشناسان ما پس از بازدید، مشاوره تخصصی و قیمت دقیق ارائه می‌دهند.",
  },
];

function FAQItem({ item, isOpen, onToggle }: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-slate-100 rounded-2xl overflow-hidden bg-white"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-light/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-slate-800">{item.q}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-primary shrink-0 mr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-slate-600 leading-7 text-sm">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4"
          >
            سوالات متداول
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
            پاسخ سوالات شما
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.slice(0, 4).map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/faq">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 text-primary font-bold hover:bg-primary/5 rounded-xl transition-all cursor-pointer"
            >
              مشاهده همه سوالات →
            </motion.span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
