import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { Provider } from "jotai";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Design Components - Webmakers UI",
  metadataBase: new URL("https://ui.webmakers.studio/"),
  description: "A collection of design components for your next project.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: "Design Components - Webmakers UI",
    description: "A collection of design components for your next project.",
    url: "https://ui.webmakers.studio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Components - Webmakers UI",
    description: "A collection of design components for your next project.",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider>
        <body
          className={`${inter.className} font-regular antialiased tracking-wide p-4 lg:p-0`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="w-full max-w-6xl mx-auto h-auto scroll-smooth mb-10">
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </body>
      </Provider>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}
