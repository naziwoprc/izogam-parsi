import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "درباره ما | ایزوگام پارسی",
  description: "با تیم ایزوگام پارسی آشنا شوید. بیش از ۱۵ سال تجربه در صنعت ایزوگام و عایق‌کاری ساختمان",
};

export default function AboutPage() {
  return <AboutContent />;
}
