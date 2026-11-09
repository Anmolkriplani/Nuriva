"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Miso from "@/components/mascot/Miso";

export default function PatientWelcome() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-white to-yellow-50 px-6">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
        <div className="mb-8">
          <Miso mood="happy" />
        </div>

        <p className="text-sm font-semibold text-teal-600">
          Welcome to your Nuriva journey
        </p>

        <h1 className="mt-3 text-3xl font-bold text-teal-800 md:text-4xl">
          Let us get to know you
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600">
          There are no right or wrong answers here. Take your time and share
          only what you feel comfortable sharing.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          You can update your information later.
        </p>

        <div className="mt-10">
          <Link href="/onboarding/support">
            <Button text="Let's Begin →" />
          </Link>
        </div>
      </section>
    </main>
  );
}
