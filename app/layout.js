// app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./providers";

export const metadata = { title: "Interspecies" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="container">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}