import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Simpel shop",
  description: "En simpel shop lavet i frameworket next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
