import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </Head>
      <body
        className={`p-12 bg-gradient-to-br from-[#050505] to-[#0f0f0f] min-h-screen antialiased w-screen overflow-x-hidden flex flex-col items-center transition`}
      >
        {/* <NavBar /> */}

        <div className="md:w-4/6 ">
          <NavBar />
          <div className="h-12 md:block" />
          <Main />
          <Footer />
        </div>

        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  );
}
