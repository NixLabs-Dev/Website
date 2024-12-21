import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row p-4 md:w-3/4 w-screen">
      <div className="mr-auto">
        <Link href="/">
          <Image
            className=""
            src="/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />
        </Link>
      </div>
      <div className="ml-auto flex gap-2">
        <Button variant={"ghost"} asChild>
          <Link href="/hosting">Server Hosting</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link href="/managed">Managed IT</Link>
        </Button>
        <Button className="hidden md:block" variant={"ghost"} asChild>
          <Link href="/company">Our Company</Link>
        </Button>
      </div>
    </div>
  );
}
