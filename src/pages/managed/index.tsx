import ProductOffering from "@/components/ProductOffering";
import { ManagedServices } from "@/lib/prices";
import Head from "next/head";
import Image from "next/image";

const logos = [
  {
    name: "Active Directory",
    url: "/logos/active_directory.png",
  },
  {
    name: "Microsoft Outlook",
    url: "/logos/outlook.png",
  },
  {
    name: "Google Workspaces",
    url: "/logos/google_workspaces.png",
  },
  {
    name: "Linux",
    url: "/logos/linux.png",
  },
  {
    name: "OPNSense",
    url: "/logos/opnsense.png",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NixLabs Networks | Managed Services</title>
        <meta
          property="og:title"
          content="NixLabs Networks | Managed Services"
          key="title"
        />
        <meta
          property="og:description"
          content="Premiere cloud, colocation, and managed services provider. Powering your favorite projects, one server at a time."
          key="description"
        />
      </Head>
      <main className="flex flex-col gap-16 px-4 sm:px-8 lg:px-16">
        {/* Heading Section */}
        <div
          id="heading"
          className="flex flex-col items-center text-center gap-6 w-full mt-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text">
              Management
            </span>{" "}
            that helps you{" "}
            <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text">
              Focus
            </span>
          </h1>
          <h3 className="mt-3 text-lg sm:text-xl text-zinc-300">
            Servers are tough, and let’s be real—you don’t have time for that
            sh*t. That’s where we come in. From email to websites to those
            programs your old IT admin warned you about because they’re as
            stable as a house of cards, we’ve got you covered. We’ll learn it,
            run it, deploy it, and chances are, we’re already experts at it.
          </h3>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center my-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {logos.map((logo) => (
              <Image
                alt={logo.name}
                src={logo.url}
                width={120}
                height={80}
                key={logo.name}
                className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 self-center mx-auto transition duration-200 ease-in-out"
              />
            ))}
          </div>
        </div>

        {/* Product Offering Section */}
        <ProductOffering service={ManagedServices} />
      </main>
    </>
  );
}
