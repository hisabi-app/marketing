import Script from "next/script";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { MotionProvider } from "@/components/motion-provider";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hisabi - Your Personal Finance System",
    template: "%s | Hisabi",
  },
  description:
    "Big income won't make you rich. A system will. Hisabi turns your bank SMS into a clear picture of your money: what needs you, how the month is going, and where it went. Open source and self-hosted.",
  keywords: [
    "Hisabi",
    "personal finance",
    "expense tracker",
    "SMS banking",
    "SMS expense tracking",
    "open source finance app",
    "budgeting app",
    "financial insights",
    "wealth management",
    "privacy-first finance",
    "automatic expense tracking",
  ],
  authors: [{ name: "Hisabi Team" }],
  creator: "Hisabi Team",
  publisher: "Hisabi Team",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Hisabi - Your Personal Finance System",
    description:
      "Big income won't make you rich. A system will. Hisabi turns your bank SMS into a clear picture of your money. Open source and self-hosted.",
    siteName: "Hisabi",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hisabi - Your Personal Finance System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisabi - Your Personal Finance System",
    description:
      "Big income won't make you rich. A system will. Hisabi turns your bank SMS into a clear picture of your money. Open source and self-hosted.",
    images: ["/og-image.jpg"],
    creator: "@hisabi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets sections hide until they scroll into view; without JavaScript everything just shows */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <meta name="theme-color" content="#f5f5f7" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DE36YTFR3F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DE36YTFR3F');
          `}
        </Script>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <MotionProvider>
            <Navbar />
            <main className="">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
