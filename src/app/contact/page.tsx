import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "تماس با ما | ایزوگام پارسی",
  description: "با ایزوگام پارسی تماس بگیرید. آدرس: کمربندی نوشهر. مشاوره رایگان و بازدید از محل.",
};

export default function ContactPage() {
  return <ContactContent />;
}
