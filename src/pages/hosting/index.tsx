import Break from "@/components/Break";
import CloudInstanceSelector from "@/components/CloudSelector";
import FeatureCard from "@/components/featureCard/FeatureItem";
import { Cloud, Heart, Server, Wifi } from "lucide-react";
import Head from "next/head";

import Image from "next/image";

const regions = [
  {
    id: "hopky",
    name: "Hopkinsville, KY",
    flag: "🇺🇸",
    isAvailable: true,
    packages: [
      {
        name: "Small",
        vCPUCores: 2,
        memory: "4GB RAM",
        storage: "32GB NVMe SSD",
        bandwidth: "2TB Bandwidth",
        deploymentTime: "Instant",
        price: "$5/month",
        soldOut: false,
      },
      {
        name: "Medium",
        vCPUCores: 4,
        memory: "8GB RAM",
        storage: "64GB NVMe SSD",
        bandwidth: "4TB Bandwidth",
        deploymentTime: "Instant",
        price: "$9/month",
        soldOut: false,
      },
      {
        name: "Large",
        vCPUCores: 8,
        memory: "16GB RAM",
        storage: "64GB NVMe SSD",
        bandwidth: "8TB Bandwidth",
        deploymentTime: "Instant",
        price: "$17/month",
        soldOut: false,
      },
    ],
  },
  {
    id: "amsnl",
    name: "Amsterdam, NL",
    flag: "🇳🇱",
    isAvailable: true,
    packages: [
      {
        name: "Router VPS",
        vCPUCores: 2,
        memory: "2GB RAM",
        storage: "16GB NVMe SSD",
        bandwidth: "2TB Bandwidth",
        deploymentTime: "Instant",
        price: "$8/month",
        soldOut: true,
      },
    ],
  },
];

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
      <main className="flex flex-col px-4 gap-12 sm:px-8 lg:px-16 py-8">
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
        {/* <Break gap={2} /> */}
        {/* <h1 className="text-3xl font-bold mb-2">Pricing Calculator</h1> */}
        <CloudInstanceSelector regions={regions} />

        <Break text="What makes us different" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={Server}
            title="Owned Infrastructure"
            description="We own all of our hardware across all regions, allowing us to deliver high performance at an affordable price."
          />
          <FeatureCard
            icon={Cloud}
            title="All SSD Storage"
            description="Almost all of our servers contain lightning fast solid state storage, resulting in low latency access times to your data."
          />
          <FeatureCard
            icon={Wifi}
            title="Redundant Network"
            description="We offer 40gbit network in most of our locations, a massive upgrade from what is typically standard."
          />
          <FeatureCard
            icon={Heart}
            title="Reliable Service"
            description="We use enterprise gear and redundant systems to ensure reliability with all of our customer services."
          />
        </div>
      </main>
    </>
  );
}
