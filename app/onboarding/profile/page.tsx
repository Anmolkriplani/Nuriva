"use client";

import { useOnboarding } from "@/context/OnboardingContext";
import Link from "next/link";
import Button from "@/components/ui/Button";
export default function Profile() {
  const { role, setRole } = useOnboarding();

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-white to-yellow-50 px-6">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
        <p className="text-sm font-semibold text-teal-600">
          Step 1 of your Nuriva setup
        </p>

        <h1 className="mt-3 text-3xl font-bold text-teal-800">
          First, tell us who you are
        </h1>

        <p className="mt-3 text-gray-600">
          This helps us provide the right experience for you.
        </p>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => setRole("patient")}
            className={`w-full rounded-2xl border-2 p-5 text-left transition ${
              role === "patient"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            <span className="text-lg font-semibold text-teal-800">
              I am a patient
            </span>

            <span className="mt-1 block text-sm text-gray-500">
              I want to manage my own healthcare journey.
            </span>
          </button>

          <button
            onClick={() => setRole("caregiver")}
            className={`w-full rounded-2xl border-2 p-5 text-left transition ${
              role === "caregiver"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            <span className="text-lg font-semibold text-teal-800">
              I am a caregiver
            </span>

            <span className="mt-1 block text-sm text-gray-500">
              I help manage healthcare for someone else.
            </span>
          </button>

          <button
            onClick={() => setRole("guardian")}
            className={`w-full rounded-2xl border-2 p-5 text-left transition ${
              role === "guardian"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            <span className="text-lg font-semibold text-teal-800">
              I am a guardian
            </span>

            <span className="mt-1 block text-sm text-gray-500">
              I manage or support healthcare for a dependent.
            </span>
          </button>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <Link href="/">
            <Button text="← Back" />
          </Link>

          {role && (
            <Link href="/onboarding/patient-welcome">
              <Button text="Continue →" />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
