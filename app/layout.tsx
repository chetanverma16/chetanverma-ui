import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { Provider } from "jotai";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import {
  JsonLd,
  getOrganizationSchema,
  getWebsiteSchema,
  getSoftwareApplicationSchema,
} from "@/components/seo/json-ld";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.chetanverma.com/"),
  title: {
    default:
      "ChetanVerma UI - Beautiful React Components with Tailwind & Framer Motion",
    template: "%s | ChetanVerma UI",
  },
  description:
    "A collection of beautiful, animated, and responsive design components built with React, Tailwind CSS, and Framer Motion. Copy, paste, and customize for your next project.",
  keywords: [
    "React components",
    "Tailwind CSS",
    "Framer Motion",
    "UI components",
    "design system",
    "component library",
    "React UI",
    "animated components",
    "web components",
    "Next.js components",
    "TypeScript components",
    "modern UI",
    "responsive design",
  ],
  authors: [
    {
      name: "Chetan Verma",
      url: "https://www.chetanverma.com/",
    },
  ],
  creator: "Chetan Verma",
  publisher: "ChetanVerma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ui.chetanverma.com/",
    siteName: "ChetanVerma UI",
    title: "ChetanVerma UI - Beautiful React Components",
    description:
      "A collection of beautiful, animated, and responsive design components built with React, Tailwind CSS, and Framer Motion.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ChetanVerma UI - Design Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChetanVerma UI - Beautiful React Components",
    description:
      "A collection of beautiful, animated, and responsive design components built with React, Tailwind CSS, and Framer Motion.",
    images: ["/opengraph-image.png"],
    creator: "@chetanvermaaa",
    site: "@chetanvermaaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ui.chetanverma.com/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const softwareSchema = getSoftwareApplicationSchema();

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />
      </head>
      <Provider>
        <body
          className={`${inter.className} font-regular antialiased tracking-wide p-4 lg:p-0`}
        >
          <Navbar />
          <div
            className={cn(
              "w-full max-w-5xl lg:border-x px-4 mx-auto border-gray-100 h-auto scroll-smooth"
            )}
          >
            {children}
          </div>
        </body>
      </Provider>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
