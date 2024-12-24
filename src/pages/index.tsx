import Break from "@/components/Break";
import Head from "next/head";
import Image from "next/image";

const logos = [
  {
    name: "Yorkstream Communications",
    url: "/logos/yorkstream.png",
  },
  {
    name: "OpenHomeNet",
    url: "/logos/opnhomenet.png",
  },
  {
    name: "Wii Linux",
    url: "/logos/wii-linux.png",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>NixLabs Networks</title>
        <meta property="og:title" content="NixLabs Networks" key="title" />
        <meta
          property="og:description"
          content="Premiere cloud, colocation, and managed services provider. Powering your favorite projects, one server at a time."
          key="title"
        />
      </Head>
      <main className="flex flex-col px-4 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <div
          id="heading"
          className="lg:grid lg:grid-cols-5 gap-12 mb-12 items-center"
        >
          <div className="col-span-3">
            <h1 className="font-bold text-4xl lg:text-5xl leading-tight">
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                Infrastructure
              </span>{" "}
              made simple.
            </h1>
            <h3 className="mt-6 text-lg lg:text-xl text-zinc-300">
              Providing simple infrastructure. From containers to servers, our
              goal is to handle the backend so you can focus on what you do
              best.
            </h3>
            <h3 className="mt-3 text-lg lg:text-xl text-zinc-300">
              Our network powers dozens of startups, hundreds of students, and
              countless companies. Built with resiliency in mind, we have the
              ability to handle 40+ gigabits of traffic without slowing down.
              We’re here to support your project from zero to hero.
            </h3>
          </div>
          <div className="col-span-2 flex justify-center lg:justify-end">
            <Image
              width={500}
              height={500}
              src="/server.jpg"
              className="rounded-2xl w-full h-auto hidden lg:block"
              alt="Map"
            />
          </div>
        </div>

        {/* Break Section */}
        <Break text="Proudly Powering" />

        {/* Logo Section */}
        <div className="flex flex-col w-full items-center mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {logos.map((logo) => (
              <Image
                alt={logo.name}
                src={logo.url}
                width={200}
                height={100}
                key={logo.name}
                className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 self-center mx-auto transition"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
