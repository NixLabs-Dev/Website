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
      <main className="flex flex-col gap-12 px-4 sm:px-8 lg:px-16 py-8">
        {/* Heading Section */}
        <div
          id="heading"
          className="lg:grid lg:grid-cols-5 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="col-span-3">
            <h1 className="text-4xl sm:text-5xl font-bold w-full sm:w-3/4 leading-tight">
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                Services
              </span>{" "}
              to help you run faster.
            </h1>
            <h2 className="mt-3 text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Providing simple infrastructure, from containers to servers, our
              goal is to handle the backend so you can focus on what you do
              best.
            </h2>
            <h2 className="mt-3 text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Our network powers dozens of startups, hundreds of students, and
              countless companies. Built with resiliency in mind, we can handle
              40+ gigabits of traffic without slowing down—ensuring your project
              grows from zero to hero.
            </h2>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block col-span-2">
            <Image
              width={500}
              height={500}
              src="/server.jpg"
              className="rounded-2xl w-full"
              alt="Servers"
              priority
            />
          </div>
        </div>

        {/* Product Offerings */}
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
