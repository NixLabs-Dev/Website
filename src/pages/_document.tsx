import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`bg-gradient-to-br from-[#050505] to-[#0f0f0f] antialiased w-screen min-h-screen flex flex-col items-center p-4 transition`}
      >
        <NavBar />
        <div className="md:w-4/6 md:pt-24">
          <Main />
        </div>

        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
