import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"], style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"Positive Crave — Konsep Grace","description":"Landing page brand keintiman","url":"https://crave-grace.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://crave-grace.vercel.app"),
  title: "Positive Crave — Konsep Grace",
  description: "Landing page Positive Crave konsep \"Grace\": keintiman yang anggun — sensualitas dengan sofistikasi yang halus.",
  applicationName: "Positive Crave",
  keywords: ["intimacy brand", "wellness pasangan", "landing page elegan", "desain web"],
  authors: [{ name: "Positive Crave" }],
  creator: "Positive Crave",
  publisher: "Positive Crave",
  alternates: { canonical: "https://crave-grace.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://crave-grace.vercel.app",
    siteName: "Positive Crave",
    title: "Positive Crave — Konsep Grace",
    description: "Landing page Positive Crave konsep \"Grace\": keintiman yang anggun — sensualitas dengan sofistikasi yang halus.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Positive Crave — Konsep Grace" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Positive Crave — Konsep Grace",
    description: "Landing page Positive Crave konsep \"Grace\": keintiman yang anggun — sensualitas dengan sofistikasi yang halus.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: "#4a2338",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased bg-silk text-plum-soft overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-plum focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-silk"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
