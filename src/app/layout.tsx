import { Inter } from "next/font/google";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hisabi - Your Personal Finance System",
    template: "%s | Hisabi",
  },
  description:
    "Big income won't make you rich. A system will. Hisabi automatically tracks your expenses from SMS, provides AI-powered insights, and helps you build real wealth. Open-source, privacy-first financial management.",
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
      "Big income won't make you rich. A system will. Hisabi automatically tracks your expenses from SMS, provides AI-powered insights, and helps you build real wealth. Open-source and privacy-first.",
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
      "Big income won't make you rich. A system will. Hisabi automatically tracks your expenses from SMS and helps you build real wealth. Open-source and privacy-first.",
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
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
