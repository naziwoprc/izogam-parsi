"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const allFAQs = [
  {
    q: "بهترین زمان نصب ایزوگام چه فصلی است؟",
    a: "بهترین زمان نصب ایزوگام فصول گرم سال (بهار و تابستان) است. دمای مناسب باعث چسبندگی بهتر و اجرای راحت‌تر می‌شود. البته تیم ما در تمام فصول قادر به اجرای پروژه است.",
  },
  {
    q: "تفاوت ایزوگام تک لایه و دو لایه چیست؟",
    a: "ایزوگام تک لایه مناسب سطوح ساده و بارش کم است، در حالی که ایزوگام دو لایه محافظت مضاعف ارائه می‌دهد و برای مناطق پربارش و سطوح بزرگ توصیه می‌شود.",
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
    a: "بله، بازدید اولیه از محل پروژه در نوشهر و حومه کاملاً رایگان است.",
  },
  {
    q: "حداقل متراژ سفارش چقدر است؟",
    a: "حداقل متراژ سفارش برای پروژه‌های نصب ۲۰ متر مربع است. البته برای خرید محصول به صورت رول، محدودیتی وجود ندارد.",
  },
  {
    q: "آیا برای شهرهای دیگر هم خدمات ارائه می‌دهید؟",
    a: "بله، علاوه بر نوشهر، ما در چالوس، رامسر، تنکابن و سایر شهرهای شمالی نیز خدمات ارائه می‌دهیم.",
  },
  {
    q: "مدت زمان نصب ایزوگام چقدر است؟",
    a: "مدت زمان نصب بستگی به متراژ و شرایط سطح دارد. معمولاً برای یک واحد مسکونی معمولی ۱ تا ۲ روز کاری زمان نیاز است.",
  },
  {
    q: "آیا ایزوگام روی ایزوگام قدیمی قابل نصب است؟",
    a: "در بعضی موارد بله، اما بهتر است ایزوگام قدیمی برداشته شود تا سطح بهتری برای نصب جدید فراهم شود. کارشناسان ما پس از بازدید، بهترین تصمیم را اتخاذ می‌کنند.",
  },
  {
    q: "چگونه می‌توانم سفارش ثبت کنم؟",
    a: "شما می‌توانید از طریق فرم ثبت سفارش در وب‌سایت، تماس تلفنی یا واتساپ سفارش خود را ثبت کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.",
  },
];

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            سوالات متداول
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500"
          >
            پاسخ سوالات رایج درباره محصولات و خدمات ایزوگام پارسی
          </motion.p>
        </div>

        <div className="space-y-3">
          {allFAQs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-right hover:bg-light/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-slate-800">{item.q}</span>
                <motion.svg
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-primary shrink-0 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
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
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-l from-primary to-primary-light rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-xl font-bold mb-3">سوالی دارید؟</h3>
          <p className="text-white/70 mb-6">
            اگر پاسخ سوال خود را پیدا نکردید، با ما تماس بگیرید
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 bg-white text-primary font-bold rounded-xl cursor-pointer"
              >
                تماس با ما
              </motion.span>
            </Link>
            <a href="tel:+989117492212">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 border-2 border-white text-white font-bold rounded-xl cursor-pointer"
              >
                📞 تماس تلفنی
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
