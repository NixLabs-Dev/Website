import NetworkFAQ from "@/components/NetworkFAQ";
import Head from "next/head";
import Image from "next/image";

const logos = [
  { name: "Arista Networks", url: "/logos/arista.svg" },
  { name: "Vyatta", url: "/logos/vyatta.png" },
  { name: "Juniper", url: "/logos/juniper.png" },
];

const services = [
  {
    title: "IPs Over VPN",
    description:
      "Securely extend your network with our IP-over-VPN services. Designed for scalability, security, and flexibility, connect to your infrastructure from anywhere in the world.",
    icon: "/icons/vpn-tunnel.svg",
  },
  {
    title: "Direct Internet Access",
    description:
      "High-speed, low-latency internet connectivity tailored to meet your needs. Our DIA services provide dedicated bandwidth, ensuring consistent performance for mission-critical applications.",
    icon: "/icons/direct-internet.svg",
  },
  {
    title: "BGP Sessions",
    description:
      "Take control of your network with our robust BGP session offerings. Announce your prefixes, manage routing policies, and ensure high availability with our redundant network.",
    icon: "/icons/bgp-session.svg",
  },
  {
    title: "BGP Tunnels",
    description:
      "Extend your routing capabilities with encrypted BGP tunnels. Seamlessly connect to our network or other providers while maintaining security and resilience.",
    icon: "/icons/bgp-tunnel.svg",
  },
];

export default function Network() {
  return (
    <>
      <Head>
        <title>NixLabs Networks | Network Details</title>
        <meta
          property="og:title"
          content="NixLabs Networks | Network Details"
          key="title"
        />
        <meta
          property="og:description"
          content="Explore the backbone of NixLabs Networks: a resilient, redundant, and reliable infrastructure supporting your business."
          key="description"
        />
      </Head>
      <main className="flex flex-col gap-12 px-4 sm:px-8 lg:px-16 py-8">
        {/* Heading Section */}
        <div
          id="heading"
          className="grid grid-cols-5 items-center gap-6 w-full"
        >
          <div className="col-span-3">
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text">
                Resilient Infrastructure
              </span>{" "}
              for a{" "}
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text">
                Connected World
              </span>
            </h1>
            <h3 className="mt-3 text-xl text-zinc-300">
              Our multi-carrier network, supported by providers like Lumen,
              Accelecom, and Windstream, offers unmatched reliability. With
              redundant paths and state-of-the-art technology, we ensure your
              connectivity is always fast, stable, and secure.
            </h3>
          </div>
          <div className="hidden lg:block gap-12 col-span-2">
            <Image
              src="/network.jpeg"
              className="rounded-2xl w-full"
              alt="Server Infrastructure"
              width={600}
              height={400}
            />
          </div>
        </div>
        {/* Partner Logos */}
        <div className="flex flex-col my-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Trusted Partners
          </h2>
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
        {/* Carrier Services */}
        <section className="my-12">
          <h2 className="text-4xl font-bold text-center mb-8">
            Carrier Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-purple-800 hover:bg-zinc-700 transition text-center shadow-lg"
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Network Features */}
        <NetworkFAQ /> {/* The FAQ section */}
      </main>
    </>
  );
}
