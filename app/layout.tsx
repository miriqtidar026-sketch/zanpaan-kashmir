import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zanpaankashmir.com"),

  title: {
    default: "Zanpaan Kashmir | Luxury Kashmir Tour Packages",
    template: "%s | Zanpaan Kashmir",
  },

  description:
    "Discover premium Kashmir tour packages with Zanpaan Kashmir. Explore Srinagar, Gulmarg, Pahalgam, and Sonamarg with trusted local travel experts. Book honeymoon, family, group, and customized Kashmir tours.",

  keywords: [
    "Kashmir Tour Packages",
    "Kashmir Travel Agency",
    "Luxury Kashmir Tours",
    "Kashmir Honeymoon Packages",
    "Srinagar Tour",
    "Gulmarg Tour",
    "Pahalgam Tour",
    "Sonamarg Tour",
    "Kashmir Holiday Packages",
    "Best Kashmir Tour Packages",
    "Travel Kashmir",
    "Kashmir Tourism",
    "Zanpaan Kashmir",
  ],

  authors: [{ name: "Zanpaan Kashmir" }],
  creator: "Zanpaan Kashmir",
  publisher: "Zanpaan Kashmir",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.zanpaankashmir.com",
  },

  openGraph: {
    title: "Luxury Kashmir Tour Packages | Zanpaan Kashmir",
    description:
      "Discover premium Kashmir tour packages covering Srinagar, Gulmarg, Pahalgam, and Sonamarg with trusted local travel experts.",
    url: "https://www.zanpaankashmir.com",
    siteName: "Zanpaan Kashmir",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zanpaan Kashmir - Luxury Kashmir Tour Packages",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Kashmir Tour Packages | Zanpaan Kashmir",
    description:
      "Discover premium Kashmir tour packages with Zanpaan Kashmir.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Zanpaan Kashmir",
    url: "https://www.zanpaankashmir.com",
    logo: "https://www.zanpaankashmir.com/logo.png",
    image: "https://www.zanpaankashmir.com/og-image.jpg",
    description:
      "Zanpaan Kashmir is a trusted travel agency offering premium Kashmir tour packages, honeymoon tours, family vacations, group tours, and customized travel experiences.",
    telephone: "+91 9469181623",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Jammu and Kashmir, India",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Jammu and Kashmir",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/zanpaankashmir",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2WMD089NWV"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2WMD089NWV');
          `}
        </Script>

        {children}

        <FloatingWhatsApp />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}