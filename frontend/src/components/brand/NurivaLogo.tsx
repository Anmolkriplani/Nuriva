
import Link from "next/link";

type NurivaLogoProps = {
  compact?: boolean;
};

export default function NurivaLogo({
  compact = false,
}: NurivaLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Nuriva home"
      className="group inline-flex w-fit items-center gap-2"
    >
      {/* Botanical heart symbol */}
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={compact ? "h-10 w-10 shrink-0" : "h-12 w-12 shrink-0"}
        fill="none"
      >
        <path
          d="M32 53C25 47 9 36 9 23C9 14 16 9 24 13C28 15 31 19 32 22C35 15 41 11 47 13C56 16 57 25 52 34C48 42 39 49 32 53Z"
          fill="#DDE7D4"
          stroke="#526B55"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 48V22"
          stroke="#526B55"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M31 34C23 33 19 28 19 22C26 23 31 27 31 34Z"
          fill="#829675"
        />
        <path
          d="M33 28C34 20 40 16 46 17C45 24 40 28 33 28Z"
          fill="#829675"
        />
        <path
          d="M32 53C27 47 20 42 16 36"
          stroke="#526B55"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex flex-col">
        <span
          className={`font-serif font-semibold tracking-tight text-[#405A43] transition-colors group-hover:text-[#718866] ${
            compact ? "text-xl" : "text-2xl md:text-3xl"
          }`}
        >
          Nuriva
        </span>

        {!compact && (
          <span className="mt-0.5 text-[11px] tracking-[0.12em] text-[#7D806F] sm:text-xs">
            Care. Guide. Heal.
          </span>
        )}
      </span>
    </Link>
  );
}
