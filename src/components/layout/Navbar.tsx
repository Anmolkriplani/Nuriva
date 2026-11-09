
import Link from "next/link";
import NurivaLogo from "@/components/brand/NurivaLogo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How to use", href: "#how-to-use" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EAE5D9]/70 bg-[#FBF8F1]/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-10"
      >
        <NurivaLogo />

        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-[#687368] md:gap-x-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#405A43]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
