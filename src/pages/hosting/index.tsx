import Break from "@/components/Break";
import ProductOffering from "@/components/ProductOffering";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <div id="heading" className="lg:grid lg:grid-cols-3 gap-12">
        <div className="col-span-2">
          <h1 className="text-5xl font-bold w-3/4">
            <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
              Services
            </span>{" "}
            to help you run faster.
          </h1>
          <h3 className="mt-3 text-xl text-zinc-300">
            Providing simple infrastructure, from containers to servers our goal
            is to handle the backend so you can focus on what you do best.
          </h3>
          <h3 className="mt-3 text-xl text-zinc-300">
            Our network powers dozens of startups, hundreds of students, and
            hundreds of companies. Built with resilliancy in mind we have the
            ability to handle 40+ gigabits of traffic without slowing down.
            Making sure we can hold up your project from zero to hero.
          </h3>
        </div>
        <div className="hidden lg:block gap-12 col-span-1">
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
      <ProductOffering
        service={{
          name: "Virtual Compute",
          description:
            "Highly-available cloud compute that can be scaled at a moments notice. Pay for what you use, no more, no less.",
          services: [
            {
              name: "nc.small",
              description:
                "A tiny server for small websites, or single, seperated applications",
              features: [
                "2 vCPU Cores",
                "2GB DDR3 RAM",
                "16GB SSD",
                "3tb Bandwidrh",
              ],
              price: {
                type: "buynow",
                value: 8,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
            {
              name: "nc.medium",
              description:
                "A tiny server for small websites, or single, seperated applications",
              features: [
                "4 vCPU Cores",
                "4  GB DDR3 RAM",
                "32GB SSD",
                "6tb Bandwidrh",
              ],
              price: {
                type: "buynow",
                value: 16,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
            {
              name: "nc.large",
              description:
                "A tiny server for small websites, or single, seperated applications",
              features: [
                "6 vCPU Cores",
                "8GB DDR3 RAM",
                "64GB SSD",
                "9tb Bandwidrh",
              ],
              price: {
                type: "buynow",
                value: 32,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
          ],
        }}
      />
      <Break />
      <ProductOffering
        service={{
          name: "Dedicated Compute",
          description:
            "Bulky servers with dedicated resources ready to meet your high-performance needs.",
          services: [
            {
              name: "nc.small",
              description:
                "A tiny server for small websites, or single, seperated applications",
              features: [
                "2 vCPU Cores",
                "2GB DDR3 RAM",
                "16GB SSD",
                "3tb Bandwidrh",
              ],
              price: {
                type: "buynow",
                value: 8,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
            {
              name: "nc.medium",
              description:
                "A tiny server for small websites, or single, seperated applications",
              features: [
                "4 vCPU Cores",
                "4  GB DDR3 RAM",
                "32GB SSD",
                "6tb Bandwidrh",
              ],
              price: {
                type: "buynow",
                value: 16,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
            {
              name: "nc.large",
              description:
                "A tiny server for small websites, or single, seperated applications",
              features: [
                "6 vCPU Cores",
                "8GB DDR3 RAM",
                "64GB SSD",
                "9tb Bandwidrh",
              ],
              price: {
                type: "buynow",
                value: 32,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
          ],
        }}
      />
      <Break />
      <ProductOffering
        service={{
          name: "Colocation Services",
          description:
            "Need more than the above? Contact us, weither you are a startup needing GPUs for AI or a fortune 500 company.",
          services: [
            {
              name: "1/4 Rack Colocation",
              description:
                "1/4 Rack space designed to house all of your server, networking, and other equiptment with N+1 redundancy.",
              features: [
                "10u Rack Space",
                "5a of 208v (A+B)",
                "N+1 Facility",
                "20tb Bandwidth",
              ],
              price: {
                type: "buynow",
                value: 250,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
            {
              name: "1/2 Rack Colocation",
              description:
                "1/2 Rack space designed to house all of your server, networking, and other equiptment with N+1 redundancy.",
              features: [
                "20u Rack Space",
                "10a of 208v (A+B)",
                "N+1 Facility",
                "40tb Bandwidth",
              ],
              price: {
                type: "buynow",
                value: 500,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
            {
              name: "1/2 Rack Colocation",
              description:
                "1/2 Rack space designed to house all of your server, networking, and other equiptment with N+1 redundancy.",
              features: [
                "40u Rack Space",
                "20a of 208v (A+B)",
                "N+1 Facility",
                "40tb Bandwidth",
              ],
              price: {
                type: "buynow",
                value: 1000,
                period: "m",
              },
              button: {
                visible: true,
                label: "Buy Now",
                action: "#",
              },
            },
          ],
        }}
      />
    </main>
  );
}
