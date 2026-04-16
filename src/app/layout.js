import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import BackToTop from "../../components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Islam4Everyone - Authentic Islamic Resources for All",
  description: "Discover a comprehensive digital library of authentic Islamic knowledge, including Quran, Hadith, Fatwa, and educational courses, designed to serve the global Muslim community with free and accessible resources.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="max-w-8xl mx-auto font-inter min-h-full flex flex-col bg-background dark:bg-[#0A0A0A] text-black dark:text-foreground transition-colors duration-500">
          <Navbar />
          <SecondaryNavbar />
          <main className="flex-grow">
            {children}
            <BackToTop />
          </main>
          <Footer />
      </body>
    </html>
  );
}
