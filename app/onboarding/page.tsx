import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Onboarding() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-white to-yellow-50 px-6">
      <section className="max-w-2xl text-center">
        <div className="mb-6 text-6xl">🌿</div>

        <h1 className="text-4xl font-bold text-teal-800 md:text-5xl">
          Welcome to Nuriva
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Let us get to know you so we can create a healthcare experience that
          feels personal, simple, and comfortable.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          You control what information you share, and you can update your
          preferences later.
        </p>

        <div className="mt-10">
          <Link href="/onboarding/profile">
            <Button text="Let's Begin →" />
          </Link>
        </div>
      </section>
    </main>
  );
}
