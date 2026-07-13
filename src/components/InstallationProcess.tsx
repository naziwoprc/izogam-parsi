"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    num: "۱",
    title: "بررسی سطح",
    desc: "بازدید رایگان و بررسی دقیق سطح توسط کارشناسان متخصص برای تعیین بهترین روش عایق‌کاری",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "۲",
    title: "آماده‌سازی",
    desc: "تمیزکاری کامل سطح، ترمیم ترک‌ها و آماده‌سازی بستر برای اجرای ایزوگام",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "۳",
    title: "نصب اصولی",
    desc: "اجرای حرفه‌ای ایزوگام با رعایت تمام اصول فنی و استانداردها توسط تیم مجرب",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    num: "۴",
    title: "تست نهایی",
    desc: "تست آب‌بندی کامل و اطمینان از عملکرد صحیح ایزوگام و تحویل نهایی به مشتری",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function InstallationProcess() {
  return (
    <SectionWrapper className="py-20 bg-gradient-to-b from-white to-light" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4"
          >
            فرآیند نصب
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
            مراحل نصب ایزوگام
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            نصب ایزوگام با رعایت تمام اصول و استانداردها در چهار مرحله ساده
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute top-1/2 right-0 left-0 h-0.5 bg-gradient-to-l from-primary to-primary-light/30 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center shadow-xl shadow-primary/20"
                >
                  {step.icon}
                </motion.div>

                <div className="absolute top-10 right-1/2 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary text-primary font-bold text-xs flex items-center justify-center z-20 lg:hidden">
                  {step.num}
                </div>

                <h3 className="font-bold text-lg text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-7">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
