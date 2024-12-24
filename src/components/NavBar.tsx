import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-2 sm:px-6 lg:px-12">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/logo.svg" width={30} height={30} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button variant={"ghost"} asChild>
          <Link href="/hosting">Server Hosting</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link href="/managed">Managed IT</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link href="/carrier">Carrier Services</Link>
        </Button>
      </div>
    </div>
  );
}
