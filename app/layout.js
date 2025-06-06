import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav";
import Footer from "@/components/Footer";
import Metrics from "@/components/Metrices";
import { openGraph } from "../components/shared-metadata/opengraph";
import { twitterCard } from "../components/shared-metadata/twittwer";
import PersonSchema from "@/components/structured-data-schema/person";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Diwash Karmacharya | Frontend Developer | JavaScript, React",
  description:
    "Hi, I'm Diwash Karmacharya, a Frontend Developer skilled in JavaScript, React, Next.js, TanStack Query, Svelte, and UI/UX. I also develop NPM packages and work with modern tools.",
  keywords: [
    "diwash",
    "karmacharya",
    "personal",
    "website",
    "diwashkarmacharya.com.np",
  ],
  openGraph: { ...openGraph },
  twitter: { ...twitterCard },
  robots: "index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/dwas.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

        <Metrics />
      </head>
      <body className={poppins.className}>
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <PersonSchema />
      </body>
    </html>
  );
}
