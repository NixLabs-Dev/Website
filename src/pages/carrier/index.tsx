import ProductOffering from "@/components/ProductOffering";
import { ManagedServices } from "@/lib/prices";
import Head from "next/head";

import Image from "next/image";

const logos = [
  {
    name: "Arista Networks",
    url: "/logos/arista.svg",
  },
  {
    name: "Vyatta",
    url: "/logos/vyatta.png",
  },
  {
    name: "Juniper",
    url: "/logos/juniper.png",
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
          key="title"
        />
      </Head>
      <main className="flex flex-col gap-12">
        <div
          id="heading"
          className="grid grid-cols-5 items-center gap-6 w-full"
        >
          <div className="col-span-3">
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                Networks
              </span>{" "}
              that help you go{" "}
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                faster than light
              </span>
            </h1>
            <h3 className="mt-3 text-xl text-zinc-300">
              Our network (AS400655) is built from the ground up to be the most
              economic and stable network you will find. We pride ourselves in
              picking hardware with intellect and intelligence rather than the
              most expensive item available. Redundancy and Resilliancy are the
              two core philosophies in our network.
            </h3>
          </div>
          <div className="hidden lg:block gap-12 col-span-2">
            <img
              src="/network.jpeg"
              className="rounded-2xl w-full"
              alt="Server"
            />
          </div>
        </div>
        {/* <Break text="Proudly Supporting" /> */}
        <div className="flex flex-col my-12">
          <div className={`hidden lg:grid lg:grid-cols-${logos.length} gap-12`}>
            {logos.map((logo) => (
              <Image
                alt={logo.name}
                src={logo.url}
                width={200}
                height={200}
                key={logo.name}
                className="opacity-25 grayscale hover:opacity-100 hover:grayscale-0 self-center mx-auto transition h-12"
              />
            ))}
          </div>
        </div>

        {/* <Break /> */}
        {/* <ProductOffering service={ManagedServices} /> */}
      </main>
    </>
  );
}
