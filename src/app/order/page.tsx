import type { Metadata } from "next";
import OrderForm from "./OrderForm";

export const metadata: Metadata = {
  title: "ثبت سفارش | ایزوگام پارسی",
  description: "ثبت سفارش ایزوگام آنلاین. فروش و نصب انواع ایزوگام با ضمانت کیفیت در نوشهر و شمال کشور.",
};

export default function OrderPage() {
  return <OrderForm />;
}
