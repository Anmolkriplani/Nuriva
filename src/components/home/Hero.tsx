
import Link from "next/link";
import Button from "@/components/ui/Button";
import Miso from "@/components/mascot/Miso";

export default function Hero() {
  return (
    <section className="grid min-h-[70vh] items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-24">
      {/* Welcome text */}
      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE3D4] bg-[#F1F3E9] px-4 py-2 text-sm text-[#687D61]">
          <span aria-hidden="true">âœ³</span>
          A little more support, at every step
        </div>

        <h1 className="mt-7 font-serif text-4xl leading-[1.12] tracking-tight text-[#34483B] sm:text-5xl md:text-6xl">
          Your health journey deserves a little more care.
        </h1>

        <p className="mt-6 max-w-lg text-base leading-8 text-[#687368] md:text-lg">
          Find helpful resources, keep your health information organized,
          and explore support for yourself or someone you care about â€”
          all at your own pace.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/onboarding">
            <Button text="Get Started â†’" />
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium text-[#526B55] underline decoration-[#C9D2C0] underline-offset-4 transition hover:text-[#34483B]"
          >
            Get to know Nuriva
          </Link>
        </div>

        <p className="mt-6 text-sm text-[#858B7F]">
          A welcoming space for patients, caregivers, and families.
        </p>
      </div>

      {/* Miso's scrapbook corner */}
      <div className="relative flex min-h-[330px] items-center justify-center md:min-h-[400px]">
        {/* Soft background glow */}
        <div
          aria-hidden="true"
          className="absolute h-56 w-56 rounded-full bg-[#E8EBDD]/70 blur-2xl md:h-72 md:w-72"
        />

        {/* Small botanical decorations */}
        <span
          aria-hidden="true"
          className="absolute right-8 top-8 rotate-12 text-2xl text-[#A5B396]"
        >
          âœ³
        </span>

        <span
          aria-hidden="true"
          className="absolute bottom-10 right-5 text-xl text-[#C4A878]"
        >
          âœ¿
        </span>

        {/* Smaller polaroid */}
        <div className="relative z-10 w-full max-w-[290px] rotate-2 rounded-sm border border-[#E9E4D9] bg-white p-3 pb-10 shadow-[0_12px_28px_rgba(60,70,50,0.09)] transition duration-300 hover:rotate-0 md:max-w-[320px]">
          {/* Washi tape */}
          <div
            aria-hidden="true"
            className="absolute -top-3 left-1/2 z-10 h-7 w-16 -translate-x-1/2 rotate-[-4deg] bg-[#DCE5D0]/90"
          />

          {/* Miso illustration placeholder */}
          <div className="flex min-h-[190px] items-center justify-center rounded-sm bg-[#F4F1E8] px-4 py-6 md:min-h-[215px]">
            <Miso mood="happy" />
          </div>

          <p className="absolute bottom-3 left-0 right-0 text-center font-serif text-base text-[#526B55]">
            A little hello from Miso â™¡
          </p>
        </div>

        {/* Small handwritten note */}
        <div className="absolute -bottom-5 left-2 z-20 max-w-[175px] -rotate-3 border border-[#E8DFC1] bg-[#FBF2D9] px-3 py-2 shadow-[0_4px_10px_rgba(60,70,50,0.06)] md:-left-4">
          <p className="font-serif text-sm italic leading-5 text-[#6D705B]">
            One step at a time.
            <br />
            You&apos;ve got this. â™¡
          </p>
        </div>
      </div>
    </section>
  );
}

