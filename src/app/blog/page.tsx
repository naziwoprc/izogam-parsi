import type { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "مقالات و آموزش | ایزوگام پارسی",
  description: "مقالات آموزشی درباره ایزوگام، نحوه نصب، نگهداری و راهنمای خرید ایزوگام",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4">
            مقالات و آموزش
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            مقالات آموزشی و تخصصی درباره ایزوگام، عایق‌کاری و نکات مهم ساختمانی
          </p>
        </div>

        <BlogList />
      </div>
    </div>
  );
}
