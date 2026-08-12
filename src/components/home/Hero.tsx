import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      {/* Logo Placeholder */}
      <div className="mb-6 text-7xl">🌿</div>

      <Heading title="Nuriva" subtitle="Care. Guide. Heal." />

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Bringing patients, doctors, caregivers, and AI together in one
        compassionate healthcare platform.
      </p>

      <div className="mt-10">
        <Button text="Get Started" />
      </div>
    </section>
  );
}
