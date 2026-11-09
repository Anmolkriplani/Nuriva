"use client";

import { useState } from "react";
import { useOnboarding } from "@/context/OnboardingContext";
import { conditions as conditionData } from "@/data/conditions";

type HealthStatus = "yes" | "no" | "unsure" | "prefer-not-to-say" | "";

export default function Health() {
  const [searchTerm, setSearchTerm] = useState("");
  const [healthStatus, setHealthStatus] = useState<HealthStatus>("");

  const { role, conditions, setConditions } = useOnboarding();

  const filteredConditions = conditionData.filter((condition) =>
    condition.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  const toggleCondition = (conditionId: string) => {
    if (conditions.includes(conditionId)) {
      setConditions(conditions.filter((item) => item !== conditionId));
    } else {
      setConditions([...conditions, conditionId]);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-50 via-white to-yellow-50 px-6 py-12">
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
          You are registering as: {role || "Not selected"}
        </p>

        <div className="mt-8 space-y-6">
          {/* Health status card */}
          <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-teal-800">
              Are you currently managing a diagnosed health condition?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Share only what you feel comfortable sharing.
            </p>

            <div className="mt-5 space-y-3">
              {(
                [
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["unsure", "I am not sure"],
                  ["prefer-not-to-say", "Prefer not to say"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={healthStatus === value}
                  onClick={() => setHealthStatus(value)}
                  className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                    healthStatus === value
                      ? "border-teal-600 bg-teal-50 text-teal-800"
                      : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {label}
                    {healthStatus === value && (
                      <span aria-hidden="true" className="font-bold text-teal-700">
                        ✓
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Condition selector appears only after Yes */}
          {healthStatus === "yes" && (
            <div className="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-teal-600">
                Tell us a little more
              </p>

              <h2 className="mt-2 text-xl font-semibold text-teal-800">
                Which condition(s) are you currently managing?
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                You can select more than one. You can also update this later.
              </p>

              {/* Selected conditions */}
              {conditions.length > 0 && (
                <div className="mt-5">
                  <p className="text-sm font-semibold text-gray-600">
                    Selected conditions
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {conditions.map((conditionId) => {
                      const condition = conditionData.find(
                        (item) => item.id === conditionId,
                      );

                      if (!condition) return null;

                      return (
                        <button
                          key={conditionId}
                          type="button"
                          onClick={() => toggleCondition(conditionId)}
                          aria-label={`Remove ${condition.name}`}
                          className="rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-100"
                        >
                          {condition.name} ×
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Search field */}
              <div className="mt-6">
                <label
                  htmlFor="condition-search"
                  className="text-sm font-semibold text-gray-600"
                >
                  Search for a condition
                </label>

                <div className="relative mt-3">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    🔍
                  </span>

                  <input
                    id="condition-search"
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Try diabetes, skin, kidney..."
                    className="w-full rounded-2xl border-2 border-teal-100 py-4 pl-12 pr-5 outline-none transition focus:border-teal-500"
                  />
                </div>
              </div>

              {/* Search results */}
              <div className="mt-5 space-y-3">
                {filteredConditions.length > 0 ? (
                  filteredConditions.map((condition) => {
                    const selected = conditions.includes(condition.id);

                    return (
                      <button
                        key={condition.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleCondition(condition.id)}
                        className={`w-full rounded-2xl border-2 p-4 text-left transition ${
                          selected
                            ? "border-teal-600 bg-teal-50"
                            : "border-teal-100 hover:border-teal-500 hover:bg-teal-50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="font-semibold text-teal-800">
                              {condition.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {condition.category}
                            </p>
                          </div>

                          <span className="text-lg font-semibold text-teal-700">
                            {selected ? "✓" : "+"}
                          </span>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <p className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                    No matching conditions found. You can try another search.
                    We will add a way to request a missing condition next.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs leading-5 text-gray-500">
          Your answers help personalize your experience. They do not replace
          medical advice or a professional diagnosis.
        </p>
      </section>
    </main>
  );
}