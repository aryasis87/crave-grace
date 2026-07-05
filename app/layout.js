import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"], style: ["normal","italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Positive Crave — Konsep Grace",
  description: "Positive Crave: keintiman yang anggun — sensualitas dengan sofistikasi yang halus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
