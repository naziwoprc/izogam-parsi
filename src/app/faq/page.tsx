import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "سوالات متداول | ایزوگام پارسی",
  description: "پاسخ سوالات متداول درباره ایزوگام، نصب، قیمت و ضمانت. راهنمای کامل خرید ایزوگام.",
};

export default function FAQPage() {
  return <FAQContent />;
}
