import type { Metadata } from "next";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Doc&Go — Your health, simplified",
    template: "%s | Doc&Go",
  },
  description:
    "Doc&Go helps you understand your pathology results, track health trends, and manage your health data securely.",
  metadataBase: new URL("https://docandgo.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://docandgo.com",
    siteName: "Doc&Go",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
