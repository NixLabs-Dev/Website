import ProductOffering from "@/components/ProductOffering";

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
    <main className="flex flex-col gap-12">
      <div id="heading" className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
            Management
          </span>{" "}
          that helps you{" "}
          <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
            Focus
          </span>
        </h1>
        <h3 className="mt-3 text-xl text-zinc-300">
          Servers are tough, and let’s be real—you don’t have time for that
          sh*t. That’s where we come in. From email to websites to those
          programs your old IT admin warned you about because they’re as stable
          as a house of cards, we’ve got you covered. We’ll learn it, run it,
          deploy it, and chances are, we’re already experts at it.
        </h3>
      </div>
      {/* <Break text="Proudly Supporting" /> */}
      <div className="flex flex-col my-12">
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

      {/* <Break /> */}
      <ProductOffering
        service={{
          name: "Managed Offerings",
          description:
            "Fully managed services so you can stop worrying and get going.",
          services: [
            {
              name: "Managed O365",
              description:
                "Fully managed O365 so good you'd think were microsoft support",
              features: [
                "Tennant setup",
                "Support and Maintenance",
                "ADDS, AzureAD, and Intune",
              ],
              price: {
                type: "contactus",
                value: 60,
                period: "m",
              },
              button: {
                visible: false,
                label: "Contact Us",
                action: "#",
              },
            },
            {
              name: "Managed Websites",
              description: "Your presence online, like slicing bread",
              features: [
                "Domain Configuration",
                "Highly-available web servers",
                "Multi-gigabit network",
              ],
              price: {
                type: "contactus",
                value: 40,
                period: "m",
              },
              button: {
                visible: false,
                label: "Contact Us",
                action: "#",
              },
            },
            {
              name: "Backup / Revocery",
              description:
                "Had a failure? Lost some data? We'll make it like it never even happened.",
              features: [
                "Offsite backup storage",
                "Instant availability",
                "Monitored and Secured",
              ],
              price: {
                type: "contactus",
                value: 55,
                period: "m",
              },
              button: {
                visible: false,
                label: "Contact Us",
                action: "#",
              },
            },
          ],
        }}
      />
    </main>
  );
}
