import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "CoreDeck — Your Digital Mission Control | Unified Dashboard for Students & Professionals",
  description:
    "Stop missing recruiter messages, exam deadlines, and shift changes. CoreDeck is the centralized dashboard that integrates Canvas, LinkedIn, Gmail, and your work schedule into one AI-prioritized action queue.",
  keywords:
    "unified dashboard for students, centralized hub for Canvas and LinkedIn, stop missing recruiter messages, app fatigue solution for students, combine work schedule and school deadlines, academic and professional notification manager, consolidated inbox for college students, digital organization for early career professionals, unified mission control for productivity, LMS and email integration hub",
  openGraph: {
    title: "CoreDeck — Your Digital Mission Control",
    description:
      "Stop missing recruiter messages, exam deadlines, and shift changes. CoreDeck unifies everything into one AI-prioritized dashboard.",
    type: "website",
    images: ["/images/hero-dashboard.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreDeck — Your Digital Mission Control",
    description:
      "Stop missing recruiter messages, exam deadlines, and shift changes. CoreDeck unifies everything into one AI-prioritized dashboard.",
    images: ["/images/hero-dashboard.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CoreDeck",
  applicationCategory: "ProductivityApplication",
  description:
    "A centralized mission control dashboard for college students and early-career professionals that integrates LMS, job boards, email, and work scheduling into one AI-prioritized view.",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Beta Access",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
