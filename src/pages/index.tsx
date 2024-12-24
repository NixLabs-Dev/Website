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
      <main className="flex flex-col">
        <div id="heading" className="lg:grid lg:grid-cols-5 gap-12 my-24">
          <div className="col-span-3">
            <h1 className="font-bold w-3/4 text-4xl lg:text-5xl ">
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                Infrastructure
              </span>{" "}
              made simple.
            </h1>
            <h3 className="mt-6 text-lg lg:text-xl text-zinc-300">
              Providing simple infrastructure, from containers to servers our
              goal is to handle the backend so you can focus on what you do
              best.
            </h3>
            <h3 className="mt-3 text-lg lg:text-xl text-zinc-300">
              Our network powers donzens of startups, hundreds of students, and
              hundreds of companies. Built with resilliancy in mind we have the
              ability to handle 40+ gigabits of traffic without slowing down.
              Making sure we can hold up your project from zero to hero.
            </h3>
          </div>
          <div className="ml-auto col-span-2">
            <Image
              width={250}
              height={500}
              src="/server.jpg"
              className="rounded-2xl hidden w-full h-full lg:block"
              alt="Map"
            />
          </div>
        </div>
        <Break text="Proudly Powering" />
        <div className="flex flex-col w-screen items-center">
          <div className="hidden lg:grid lg:grid-cols-5 gap-12 h-12">
            {logos.map((logo) => (
              <Image
                alt={logo.name}
                src={logo.url}
                width={500}
                height={500}
                key={logo.name}
                className="opacity-25 grayscale hover:opacity-100 hover:grayscale-0 self-center mx-auto transition"
              />
            ))}
          </div>
        </div>
        {/*
      <div className="flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl font-bold">Virtual Compute</h1>
        <h1 className="text-md lg:text-lg text-center w-3/4 mb-12">
          Highly-available cloud compute that can be scaled at a moments notice.
          Pay for what you use, no more, no less.
        </h1>
      </div> */}
      </main>
    </>
  );
}
