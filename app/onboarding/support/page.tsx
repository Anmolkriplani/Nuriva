"use client";

import { useOnboarding } from "@/context/OnboardingContext";

const supportOptions = [
  {
    id: "condition",
    title: "Managing a health condition",
    description: "Keep track of your health journey.",
    icon: "💚",
  },
  {
    id: "symptoms",
    title: "Understanding symptoms",
    description: "Keep track of things you are experiencing.",
    icon: "🔎",
  },
  {
    id: "medicines",
    title: "Managing medicines",
    description: "Keep your medicines and schedules organized.",
    icon: "💊",
  },
  {
    id: "records",
    title: "Organizing health records",
    description: "Keep your prescriptions and medical documents together.",
    icon: "📋",
  },
  {
    id: "appointments",
    title: "Finding or managing appointments",
    description: "Keep track of doctors and upcoming visits.",
    icon: "👩‍⚕️",
  },
  {
    id: "wellness",
    title: "Taking better care of my health",
    description: "Build healthier everyday habits.",
    icon: "🌿",
  },
  {
    id: "unsure",
    title: "I am not sure yet",
    description: "I would like to explore Nuriva first.",
    icon: "💬",
  },
];

export default function Support() {
  const { supportNeeds, setSupportNeeds } = useOnboarding();

  const toggleSupport = (id: string) => {
    setSupportNeeds(
      supportNeeds.includes(id)
        ? supportNeeds.filter((item) => item !== id)
        : [...supportNeeds, id],
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-white to-yellow-50 px-6 py-12">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
        <p className="text-sm font-semibold text-teal-600">
          Step 2 of your Nuriva setup
        </p>

        <h1 className="mt-3 text-3xl font-bold text-teal-800 md:text-4xl">
          What brings you to Nuriva?
        </h1>

        <p className="mt-4 text-gray-600">
          Everyone&apos;s healthcare journey is different. Choose everything you
          would like Nuriva to help you with.
        </p>

        <div className="mt-8 space-y-4">
          {supportOptions.map((option) => {
            const selected = supportNeeds.includes(option.id);

            return (
              <button
                key={option.id}
                onClick={() => toggleSupport(option.id)}
                className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                  selected
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{option.icon}</span>

                  <div>
                    <h2 className="font-semibold text-teal-800">
                      {option.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="rounded-2xl border border-teal-200 px-6 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            ← Back
          </button>

          {supportNeeds.length > 0 && (
            <button
              onClick={() => {
                // eslint-disable-next-line @next/next/no-location-assign-relative-destination
                window.location.href = "/onboarding/health";
              }}
              className="rounded-2xl bg-teal-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-teal-700"
            >
              Continue →
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
