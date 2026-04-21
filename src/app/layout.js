import "./globals.css";

export const metadata = {
  title: "Simpel shop",
  description: "En simpel shop lavet i frameworket next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
