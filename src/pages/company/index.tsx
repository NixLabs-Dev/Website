import Break from "@/components/Break";
import PersonCard from "@/components/PersonCard";
import { SiDiscord, SiGithub, SiBluesky } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NixLabs Networks | Our Company</title>
        <meta
          property="og:title"
          content="NixLabs Networks | Our Company"
          key="title"
        />
        <meta
          property="og:description"
          content="Premiere cloud, colocation, and managed services provider. Powering your favorite projects, one server at a time."
          key="description"
        />
      </Head>
      <main className="flex flex-col gap-12 px-4 sm:px-8 lg:px-16 py-8">
        {/* Heading Section */}
        <section
          id="heading"
          className="lg:grid lg:grid-cols-3 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="col-span-2">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Built by{" "}
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 text-transparent bg-clip-text">
                Community.
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-zinc-300 leading-relaxed">
              Founded in the heart of Music City, NixLabs is proud of our
              heritage. We are committed to helping people and staying
              community-first.
            </p>
            <p className="mt-4 text-lg sm:text-xl text-zinc-300 leading-relaxed">
              By employing talented individuals worldwide, we honor our roots
              while helping startups and enterprises grow with integrity.
            </p>
          </div>
          {/* Image */}
          <div className="ml-auto col-span-1">
            <Image
              width={500}
              height={500}
              src="/nashville.jpg"
              className="rounded-2xl"
              alt="Nashville skyline"
              priority
            />
          </div>
        </section>

        <Break />

        {/* Team Section */}
        <section className="my-12">
          <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Our talented team is the backbone of NixLabs, ensuring uninterrupted
            services and innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
            <PersonCard
              name="Owen Rummage"
              title="Chief Executive Officer"
              photoURL="/team/owen.jpg"
              links={["https://github.com/owenrummage", "https://rummage.cc"]}
            />
            <PersonCard
              name="Michael Garofalo"
              title="Infrastructure Operations"
              photoURL="/team/michael.jpg"
              links={[
                "https://github.com/techflashyt",
                "https://techflash.site/",
              ]}
            />
            <PersonCard
              name="Nathan Roberts"
              title="Support Technician"
              photoURL="/team/nathan.jpg"
              links={["https://github.com/nathanrsfba"]}
            />
            <PersonCard
              name="Mineman"
              title="Support Technician"
              photoURL="/team/mineman.jpg"
              links={[
                "https://github.com/mine-man3000",
                "https://minemans.site/",
              ]}
            />
            <PersonCard
              name="Logan Shaw"
              title="Development Consultant"
              photoURL="/team/logan.jpg"
              links={["https://github.com/TheModdedChicken"]}
            />
            <PersonCard
              name="Emma Knijn"
              title="Infrastructure Consultant"
              photoURL="/team/emma2.png"
              links={["https://github.com/EmmaKnijn", "https://knijn.one/"]}
            />
          </div>
        </section>

        <Break />

        {/* FOSS Section */}
        <section className="text-center my-12">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Everything Begins with FOSS ❤️
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto">
            At NixLabs Networks, we are dedicated to Free and Open Source
            Software (FOSS). Our infrastructure is built on open solutions, and
            we actively contribute back to the FOSS community.
          </p>
        </section>

        <Break />

        {/* Contact Us Section */}
        <section className="my-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-center text-zinc-300 leading-relaxed mb-8">
            Have questions, ideas, or issues? Reach out to our global team any
            time.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Social Media */}
            <div className="col-span-1">
              <h3 className="font-bold text-lg mb-2">Social Media</h3>
              <Link
                href="https://github.com/NixLabs-Dev"
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100"
              >
                <SiGithub />
                GitHub
              </Link>
              <Link
                href="https://discord.gg/ES3r3HzDJm"
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100"
              >
                <SiDiscord />
                Discord
              </Link>
              <Link
                href="https://bsky.app/profile/nixlabs.dev"
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100"
              >
                <SiBluesky />
                Bluesky
              </Link>
            </div>
            {/* Contact */}
            <div className="col-span-2">
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <Link
                href="mailto:noc@nixlabs.dev"
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100"
              >
                <Mail />
                Network Operations Center
              </Link>
              <Link
                href="mailto:abuse@nixlabs.dev"
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100"
              >
                <Mail />
                Abuse Department
              </Link>
              <Link
                href="mailto:sales@nixlabs.dev"
                className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100"
              >
                <Mail />
                Sales
              </Link>
            </div>
            {/* Hiring */}
            <div className="col-span-2">
              <h3 className="font-bold text-lg mb-2">We’re Hiring!</h3>
              <p className="text-zinc-300">
                Join us and be part of something massive. We’re looking for
                individuals passionate about FOSS, networking, and innovation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
