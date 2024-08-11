import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav";
import Metrics from "@/components/Metrices";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Diwash Karma",
  description: "Dwash Karma's website",
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
