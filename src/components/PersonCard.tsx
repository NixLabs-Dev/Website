import { Github, Globe, Twitter } from "lucide-react";
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
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="text-gray-300 font-medium">{title}</h2>

      <div className="mt-4 flex flex-row gap-4">
        {links.map((link) => {
          if (link.includes("github.com")) {
            return (
              <Link key={link} href={link}>
                <Github />
              </Link>
            );
          } else if (link.includes("twitter.com")) {
            return (
              <Link key={link} href={link}>
                <Twitter />
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
