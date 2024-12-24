import { Globe, Mail } from "lucide-react";
import { SiX, SiGithub, SiDiscord } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";

export default function PersonCard({
  name,
  title,
  photoURL,
  links,
}: {
  name: string;
  title: string;
  photoURL: string;
  links: string[];
}) {
  return (
    <div className=" flex flex-col items-center">
      <Image
        src={photoURL}
        className="rounded-full w-1/2 mb-4"
        width={200}
        height={200}
        alt="Photo"
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <h2 className="text-gray-300 font-medium text-sm">{title}</h2>

      <div className="mt-4 flex flex-row gap-4">
        {links.map((link) => {
          if (link.includes("github.com")) {
            return (
              <Link key={link} href={link}>
                <SiGithub />
              </Link>
            );
          } else if (link.includes("twitter.com") || link.includes("x.com")) {
            return (
              <Link key={link} href={link}>
                <SiX />
              </Link>
            );
          } else if (link.includes("discord.com")) {
            return (
              <Link key={link} href={link}>
                <SiDiscord />
              </Link>
            );
          } else if (link.includes("mailto:")) {
            return (
              <Link key={link} href={link}>
                <Mail />
              </Link>
            );
          } else {
            return (
              <Link key={link} href={link}>
                <Globe />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}
