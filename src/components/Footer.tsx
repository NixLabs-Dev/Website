import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="navbar pb-8 mt-auto pt-24 lg:block flex flex-row"
      id="Navbar"
    >
      <div className="mx-4 sm:mx-8 lg:mx-16 my-2 flex flex-col md:flex-row gap-4">
        <div className="mr-auto flex flex-col">
          <Link
            href="/"
            className="flex flex-row gap-2 cursor-pointer items-center hover:opacity-90"
          >
            <h1 className="text-2xl font-semibold mt-2">NixLabs Networks</h1>
          </Link>

          <p className="mt-2">
            Boldly powering your favorite projects, one server at a time.
          </p>
        </div>
        <div className="ml-auto mt-auto flex flex-row text-zinc-400 gap-4 sm:gap-8 lg:gap-12">
          <Link href="/legal/privacy" className="hover:text-zinc-500">
            Privacy Policy
          </Link>
          <Link href="/legal/terms" className="hover:text-zinc-500">
            Terms of Service
          </Link>
          <Link href="/company" className="hover:text-zinc-500">
            Our Company
          </Link>
        </div>
      </div>
    </div>
  );
}
