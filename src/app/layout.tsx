import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ایزوگام پارسی | فروش و نصب تخصصی ایزوگام در نوشهر",
  description:
    "ایزوگام پارسی ارائه‌دهنده انواع ایزوگام با کیفیت و خدمات نصب حرفه‌ای در نوشهر و شمال کشور. ضمانت کیفیت، قیمت مناسب، پشتیبانی سریع.",
  keywords:
    "ایزوگام, نصب ایزوگام, ایزوگام نوشهر, عایق رطوبتی, ایزوگام پارسی, خرید ایزوگام",
  openGraph: {
    title: "ایزوگام پارسی | فروش و نصب تخصصی ایزوگام",
    description: "فروش و نصب انواع ایزوگام با ضمانت کیفیت در نوشهر و شمال کشور",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ایزوگام پارسی",
              description: "فروش و نصب تخصصی ایزوگام در نوشهر و شمال کشور",
              address: {
                "@type": "PostalAddress",
                streetAddress: "کمربندی نوشهر، چسبیده به پمپ بنزین",
                addressLocality: "نوشهر",
                addressRegion: "مازندران",
                addressCountry: "IR",
              },
              telephone: "+989117492212",
              email: "nazaninparsi213@gmail.com",
            }),
          }}
        />
      </head>
      <body className="bg-light text-slate-900 antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
