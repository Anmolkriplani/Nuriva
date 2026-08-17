import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Miso from "@/components/mascot/Miso";
export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8">
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-br from-teal-500 to-teal-700 shadow-xl">
          <span className="text-6xl">♡</span>
        </div>

        <Heading title="NURIVA" subtitle="Care that feels like home." />

        <div className="absolute -right-10 -top-16">
          <Miso mood="happy" />
        </div>
      </div>

      <Heading title="NURIVA" subtitle="Care that feels like home." />

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
        Compassionate healthcare, personalized guidance, and trusted support for
        every step of your journey.
      </p>

      <div className="mt-10">
        <Link href="/onboarding">
          <Button text="Get Started →" />
        </Link>
      </div>
    </section>
  );
}
