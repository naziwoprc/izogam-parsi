"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "مسکونی",
  "تجاری",
  "صنعتی",
  "استخر و جکوزی",
  "سرویس بهداشتی",
  "تعمیر و ترمیم",
  "سایر",
];

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    projectType: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [trackingId, setTrackingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setTrackingId(data.id);
        setForm({
          name: "",
          phone: "",
          area: "",
          projectType: "",
          description: "",
        });
      } else {
        setError(data.error || "خطا در ثبت سفارش. لطفاً دوباره تلاش کنید.");
      }
    } catch {
      setError("خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
          >
            ثبت سفارش
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500"
          >
            فرم زیر را تکمیل کنید. کارشناسان ما در اسرع وقت با شما تماس خواهند
            گرفت.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-bold text-2xl text-slate-800 mb-3">
                سفارش شما با موفقیت ثبت شد!
              </h2>
              <p className="text-slate-500 mb-2">
                کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
              </p>
              <p className="text-slate-400 text-sm mb-8">
                {trackingId !== null && `شماره پیگیری: #${trackingId}`}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-xl px-4 py-3 text-center">
                    {error}
                  </div>
                )}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all"
              >
                ثبت سفارش جدید
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    نام و نام خانوادگی *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    شماره تماس *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="۰۹XX-XXX-XXXX"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    متراژ تقریبی (متر مربع) *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                    placeholder="مثلاً ۱۰۰ متر"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    نوع پروژه *
                  </label>
                  <select
                    required
                    value={form.projectType}
                    onChange={(e) =>
                      setForm({ ...form, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-white"
                  >
                    <option value="">انتخاب کنید</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  توضیحات تکمیلی
                </label>
                <textarea
                  rows={5}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                  placeholder="توضیحات بیشتر درباره پروژه خود را بنویسید..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-l from-primary to-primary-light text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? "در حال ارسال..." : "ثبت سفارش"}
              </motion.button>

              <p className="text-center text-slate-400 text-sm">
                پس از ثبت سفارش، کارشناسان ما ظرف ۲۴ ساعت با شما تماس خواهند
                گرفت
              </p>
            </form>
          )}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
        >
          {[
            { icon: "🔒", text: "اطلاعات شما محرمانه است" },
            { icon: "⚡", text: "پاسخگویی سریع" },
            { icon: "💯", text: "مشاوره و بازدید رایگان" },
          ].map((item) => (
            <div
              key={item.text}
              className="bg-white rounded-2xl p-4 text-center border border-slate-100"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-slate-600 text-sm mt-2 font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
