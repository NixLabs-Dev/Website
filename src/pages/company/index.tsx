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
          key="title"
        />
      </Head>
      <main className="flex flex-col">
        <div id="heading" className="lg:grid lg:grid-cols-3 gap-12 my-8">
          <div className="col-span-2">
            <h1 className="text-5xl font-bold">
              Built by{" "}
              <span className="bg-gradient-to-br from-violet-400 to-violet-500 inline-block text-transparent bg-clip-text font-bold">
                Community.
              </span>
            </h1>
            <h3 className="mt-3 text-xl text-zinc-300">
              Founded in the center of Music City, NixLabs is proud of our
              heritage. We are proud of our mission to help people, and we will
              always be community first.
            </h3>
            <h3 className="mt-3 text-xl text-zinc-300">
              Employing highly talented individuals from all over the world, we
              plan to keep community in technology and we always remember where
              we came from. From startup, to fortune 500 and beyond we promise
              to keep our morals. Because thats who we are.
            </h3>
          </div>
          <div className="ml-auto w-full col-span-1">
            <Image
              width={500}
              height={500}
              src="/nashville.jpg"
              className="rounded-2xl"
              alt="Map"
            />
          </div>
        </div>
        {/* Remove the Call to Action  */}
        {/* <div className="flex flex-col items-center bg-gradient-to-br from-purple-600 to-purple-700 text-white px-8 py-4 rounded-md">
        <h1 className="text-5xl font-bold">Focus on what you do best</h1>
        <h1 className="text-lg text-center w-3/4">
          From student to degree-holder, from startup to fortune 500, from an
          idea to an organization with a mission, we will be there the whole way
          to make sure everything you run stays up, running, and serving
          everything you need.
        </h1>
      </div> */}
        <Break />
        <div className=" pt-2 flex flex-col my-8">
          <h1 className="text-4xl font-bold">Meet the team</h1>
          <p className="">
            These are the talented individuals we are greatful to call family.
            Each and every one of them is an integral part of our operation and
            make sure your services go uninterupted
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12">
            <PersonCard
              name="Owen Rummage"
              title="Chief Executive Oficer"
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
        </div>

        <Break />

        <div className="pt-2 flex flex-col items-center my-8">
          <h1 className="text-5xl font-bold">Everything begins with FOSS ❤️</h1>
          <p className="text-lg mt-8 mx-4 text-center">
            At NixLabs Networks, we are dedicated to Free and Open Source
            Software (FOSS), building our entire infrastructure on open
            solutions. From networking to virtualization, our systems reflect
            this commitment, and we contribute back by open-sourcing select
            tools and automation. Everything we do supports the growth and
            advancement of the FOSS community. Its in our blood.
          </p>
        </div>

        <Break />

        <div className="pt-2 flex flex-col items-center my-8">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-8 mx-4 text-center">
            For when you have a question, idea, issue, or something in between!
            Our global team is here to help YOU get what you need, when you need
            it. No questions asked.
          </p>
          {/* <Map /> */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full mt-12">
            <div className="col-span-1 flex flex-col gap-2">
              <h1 className="font-bold text-lg mb-2">Social Medias</h1>
              <Link
                href="https://github.com/NixLabs-Dev"
                className="flex flex-row gap-2 hover:text-gray-300 transition"
              >
                <SiGithub />
                Github
              </Link>
              <Link
                href="https://discord.gg/ES3r3HzDJm"
                className="flex flex-row gap-2 hover:text-gray-300 transition"
              >
                <SiDiscord />
                Discord
              </Link>
              <Link
                href="https://bsky.app/profile/nixlabs.dev"
                className="flex flex-row gap-2 hover:text-gray-300 transition"
              >
                <SiBluesky />
                Bluesky
              </Link>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <h1 className="font-bold text-lg mb-2">Contact Us</h1>
              <Link
                href="mailto:noc@nixlabs.dev"
                className="flex flex-row gap-2 hover:text-gray-300 transition"
              >
                <Mail />
                Network Operations Center
              </Link>
              <Link
                href="mailto:abuse@nixlabs.dev"
                className="flex flex-row gap-2 hover:text-gray-300 transition"
              >
                <Mail />
                Abuse Department
              </Link>
              <Link
                href="mailto:sales@nixlabs.dev"
                className="flex flex-row gap-2 hover:text-gray-300 transition"
              >
                <Mail />
                Sales
              </Link>
            </div>{" "}
            <div className="col-span-2">
              <h1 className="font-bold text-lg mb-2">Were Hiring!</h1>
              <p>
                Do you love FOSS software? Do you want to be a part of something
                massive? Do you love networking, servers and more? Then you
                might be a great fit for our team!
              </p>
            </div>
          </div>
        </div>

        <div className="h-48" />
      </main>
    </>
  );
}
