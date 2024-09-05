import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav";
import Metrics from "@/components/Metrices";
import { openGraph } from "./shared-metadata/opengraph";
import { twitterCard } from "./shared-metadata/twittwer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Diwash Karmacharya's Website",
  description:
    "Hi, I'm Dwash Karma 🌐 Frontend Developer | Tech Enthusiast , Skills & Tools: Languages: JavaScript Frameworks & Libraries: React, Next.js, TanStack Query, Sveltejs Tools & Technologies:UI/UX, NPM package, Axios, WSO2 for role-based authentication ",
  keywords: [
    "diwash",
    "karmacharya",
    "personal",
    "website",
    "diwashkarmacharya.com.np",
  ],
  openGraph: { ...openGraph },
  twitter: { ...twitterCard },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/dwas.jpg" />
        <Metrics />
      </head>
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
