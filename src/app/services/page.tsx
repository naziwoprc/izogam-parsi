import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "خدمات نصب ایزوگام | ایزوگام پارسی",
  description: "خدمات تخصصی نصب ایزوگام شامل نصب پشت‌بام، استخر، سرویس بهداشتی و پروژه‌های تجاری با ضمانت اجرا",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
