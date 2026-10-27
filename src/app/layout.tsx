import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { DemoBar } from "@/components/DemoBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

// Текст и цифры. Manrope из ТЗ заменён: в нём нет заглавной Ə (U+018F) и знака ₼ (U+20BC),
// они падали на системный шрифт. Plus Jakarta Sans того же геометрического склада, с полной
// азербайджанской диакритикой, знаком манта и табличными цифрами (tnum).
const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Rozel Beauty & Care", template: "%s | Rozel Beauty & Care" },
  description: "Kosmetika mağazası Bakıda. Makiyaj, üz və saç baxımı, ətir. Gözəlliyin çiçəklənsin!",
};

export const viewport: Viewport = {
  themeColor: "#c8286b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${playfair.variable} ${sans.variable}`}>
      <body className="min-h-dvh antialiased">
        <CartProvider>
          <DemoBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
