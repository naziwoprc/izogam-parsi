import type { Metadata } from "next";
import ProductsGrid from "./ProductsGrid";

export const metadata: Metadata = {
  title: "محصولات | ایزوگام پارسی",
  description: "مشاهده انواع ایزوگام باکیفیت شامل تک لایه، دو لایه، فویلدار و مخصوص استخر با ضمانت کیفیت",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-black text-primary mb-4">
            محصولات ایزوگام پارسی
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            بهترین برندهای ایزوگام با تنوع در ضخامت و کاربرد برای هر نوع پروژه ساختمانی
          </p>
        </div>

        <ProductsGrid />
      </div>
    </div>
  );
}
