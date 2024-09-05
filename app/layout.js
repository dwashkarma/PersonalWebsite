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
  title: "Diwash Karmacharya",
  description: "Dwash Karmacharya's portfolio website",
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
        <Metrics />
      </head>
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
