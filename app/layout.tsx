import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shpe-website-ten.vercel.app"),
  title: "SHPE UIUC | University of Illinois at Urbana Champaign",
  description: "Official website for SHPE at UIUC. Empowering the Hispanic community at the University of Illinois at Urbana Champaign Grainger College of Engineering through professional development, EOH projects, and community.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: "SHPE UIUC",
    title: "SHPE UIUC | University of Illinois at Urbana Champaign",
    description: "Official website for SHPE at UIUC. Empowering the Hispanic community at the University of Illinois at Urbana Champaign Grainger College of Engineering through professional development, EOH projects, and community.",
    url: "https://shpe-website-ten.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHPE UIUC",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
  },
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "SHPE UIUC",
                  "alternateName": [
                    "Society of Hispanic Professional Engineers at UIUC",
                    "SHPE University of Illinois",
                    "UIUC SHPE"
                  ],
                  "url": "https://shpe-website-ten.vercel.app/"
                },
                {
                  "@type": "Organization",
                  "name": "SHPE UIUC",
                  "url": "https://shpe-website-ten.vercel.app/",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Engineering Hall 103A, 1308 W Green St",
                    "addressLocality": "Urbana",
                    "addressRegion": "IL",
                    "postalCode": "61801",
                    "addressCountry": "US"
                  },
                  "sameAs": [
                    "https://www.instagram.com/shpe_uiuc/",
                    "https://www.linkedin.com/company/society-of-hispanic-professional-engineers-uiuc-chapter/"
                  ]
                }
              ]
            }),
          }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
