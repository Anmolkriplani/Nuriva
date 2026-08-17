"use client";

import { useState } from "react";
import { useOnboarding } from "@/context/OnboardingContext";
type HealthStatus = "yes" | "no" | "unsure" | "prefer-not-to-say" | "";
export default function Health() {
  const { role } = useOnboarding();
  const [healthStatus, setHealthStatus] = useState<HealthStatus>("");
  const [conditions, setConditions] = useState<string[]>([]);
  const toggleCondition = (condition: string) => {
    setConditions((currentConditions) => {
      if (currentConditions.includes(condition)) {
        return currentConditions.filter((item) => item !== condition);
      }

      return [...currentConditions, condition];
    });
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-white to-yellow-50 px-6">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
        <p className="text-sm font-semibold text-teal-600">
          Step 2 of your Nuriva setup
        </p>

        <h1 className="mt-3 text-3xl font-bold text-teal-800">
          Tell us about your health journey
        </h1>

        <p className="mt-3 text-gray-600">
          This information will help us personalize your Nuriva experience.
        </p>

        <p className="mt-4 font-semibold text-teal-700">
          You are registering as: {role}
        </p>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-teal-800">
            Are you currently managing any health condition?
          </h2>

          <button
            onClick={() => setHealthStatus("yes")}
            className={`w-full rounded-2xl border-2 p-4 text-left transition ${
              healthStatus === "yes"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            Yes
          </button>

          <button
            onClick={() => setHealthStatus("no")}
            className={`w-full rounded-2xl border-2 p-4 text-left transition ${
              healthStatus === "no"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            No
          </button>

          <button
            onClick={() => setHealthStatus("unsure")}
            className={`w-full rounded-2xl border-2 p-4 text-left transition ${
              healthStatus === "unsure"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            I am not sure
          </button>

          <button
            onClick={() => setHealthStatus("prefer-not-to-say")}
            className={`w-full rounded-2xl border-2 p-4 text-left transition ${
              healthStatus === "prefer-not-to-say"
                ? "border-teal-600 bg-teal-50"
                : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
            }`}
          >
            Prefer not to say
          </button>
        </div>
        {healthStatus === "yes" && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-teal-800">
              Which health conditions are you currently managing?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              You can select more than one.
            </p>

            <div className="mt-5 space-y-3">
              <button
                onClick={() => toggleCondition("cancer")}
                className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                  conditions.includes("cancer")
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                Cancer
              </button>

              <button
                onClick={() => toggleCondition("diabetes")}
                className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                  conditions.includes("diabetes")
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                Diabetes
              </button>

              <button
                onClick={() => toggleCondition("hypertension")}
                className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                  conditions.includes("hypertension")
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                Hypertension
              </button>

              <button
                onClick={() => toggleCondition("heart-condition")}
                className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                  conditions.includes("heart-condition")
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                Kidney condition
              </button>

              <button
                onClick={() => toggleCondition("respiratory-condition")}
                className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                  conditions.includes("respiratory-condition")
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                Respiratory condition
              </button>

              <button
                onClick={() => toggleCondition("other")}
                className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                  conditions.includes("other")
                    ? "border-teal-600 bg-teal-50"
                    : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                }`}
              >
                Other
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
