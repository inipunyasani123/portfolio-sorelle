import "./globals.css";
import { Inter, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Sorelle — UI/UX Designer & Developer","description":"Portfolio template for Sorelle, a fictional UI/UX designer and developer: bright case studies that link to six live demo sites for families, learners, and makers, plus notes on honest copy, games that stop, and drawings made to measure.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-sorelle.pintuweb.id"),
  title: { default: "Sorelle — UI/UX Designer & Developer", template: "%s — Sorelle" },
  description: "Portfolio template for Sorelle, a fictional UI/UX designer and developer: bright case studies that link to six live demo sites for families, learners, and makers, plus notes on honest copy, games that stop, and drawings made to measure.",
  applicationName: "Sorelle",
  keywords: ["UI/UX designer", "developer", "portfolio", "digital experience", "interface design"],
  authors: [{ name: "Sorelle" }],
  creator: "Sorelle",
  publisher: "Sorelle",
  alternates: { canonical: "https://portfolio-sorelle.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-sorelle.pintuweb.id",
    siteName: "Sorelle",
    title: "Sorelle — UI/UX Designer & Developer",
    description: "Portfolio template for Sorelle, a fictional UI/UX designer and developer: bright case studies that link to six live demo sites for families, learners, and makers, plus notes on honest copy, games that stop, and drawings made to measure.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sorelle — UI/UX Designer & Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorelle — UI/UX Designer & Developer",
    description: "Portfolio template for Sorelle, a fictional UI/UX designer and developer: bright case studies that link to six live demo sites for families, learners, and makers, plus notes on honest copy, games that stop, and drawings made to measure.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="About this demo site" style={{ display: 'block', margin: 0, padding: '12px 76px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          A demo site by PintuWeb — names and content are fictional.{' '}
          <a href="https://www.pintuweb.id/en/contact?demo=sorelle" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Get a site like this →</a>
        </aside>
        </body>
    </html>
  );
}
