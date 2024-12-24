import Break from "@/components/Break";
import ProductOffering from "@/components/ProductOffering";
import {
  ColocationOffering,
  DedicatedOffering,
  VirtualComputeOffering,
} from "@/lib/prices";
import Head from "next/head";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NixLabs Networks | Server Hosting</title>
        <meta
          property="og:title"
          content="NixLabs Networks | Server Hosting"
          key="title"
        />
        <meta
          property="og:description"
          content="Premiere cloud, colocation, and managed services provider. Powering your favorite projects, one server at a time."
          key="title"
        />
      </Head>
      <main className="flex flex-col gap-12">
        <div id="heading" className="lg:grid lg:grid-cols-5 gap-12">
          <div className="col-span-3">
            <h1 className="text-5xl font-bold w-3/4">
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                Services
              </span>{" "}
              to help you run faster.
            </h1>
            <h3 className="mt-3 text-xl text-zinc-300">
              Providing simple infrastructure, from containers to servers our
              goal is to handle the backend so you can focus on what you do
              best.
            </h3>
            <h3 className="mt-3 text-xl text-zinc-300">
              Our network powers dozens of startups, hundreds of students, and
              hundreds of companies. Built with resilliancy in mind we have the
              ability to handle 40+ gigabits of traffic without slowing down.
              Making sure we can hold up your project from zero to hero.
            </h3>
          </div>
          <div className="hidden lg:block gap-12 col-span-2">
            <Image
              width={500}
              height={500}
              src="/server.jpg"
              className="rounded-2xl w-screen"
              alt="Map"
            />
          </div>
        </div>
        <Break />
        <ProductOffering service={VirtualComputeOffering} />
        <Break />
        <ProductOffering service={DedicatedOffering} />
        <Break />
        <ProductOffering service={ColocationOffering} />
      </main>
    </>
  );
}
