
"use client";

import { useState } from "react";
import Link from "next/link";

type AuthMode = "login" | "register";

export default function LoginPage() {
  const [mode, setMode] = useState<AuthMode>("login");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FBF8F1] px-5 py-12 text-[#34483B]">
      <section className="w-full max-w-md">
        <Link href="/" className="mb-8 flex flex-col items-center">
          <span className="font-serif text-4xl font-semibold text-[#526B55]">
            Nuriva
          </span>
          <span className="mt-1 text-xs tracking-[0.18em] text-[#7D806F]">
            CARE. GUIDE. HEAL.
          </span>
        </Link>

        <div className="rounded-3xl border border-[#E6E2D7] bg-white p-6 shadow-[0_12px_40px_rgba(60,70,50,0.06)] sm:p-9">
          <div className="text-center">
            <p className="text-sm font-medium text-[#75866B]">
              Your space, your pace
            </p>

            <h1 className="mt-3 font-serif text-3xl font-semibold">
              {mode === "login"
                ? "Welcome back â™¡"
                : "Let's get started â™¡"}
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#687368]">
              {mode === "login"
                ? "Sign in to continue your Nuriva journey."
                : "Create an account to make Nuriva your own."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 rounded-xl bg-[#F0F1E7] p-1">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                mode === "login"
                  ? "bg-white text-[#405A43] shadow-sm"
                  : "text-[#687368] hover:text-[#34483B]"
              }`}
            >
              Log in
            </button>

            <button
              type="button"
              onClick={() => setMode("register")}
              className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                mode === "register"
                  ? "bg-white text-[#405A43] shadow-sm"
                  : "text-[#687368] hover:text-[#34483B]"
              }`}
            >
              Register
            </button>
          </div>

          <form
            className="mt-7 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "The authentication backend is not connected yet. We'll connect it after the page design is ready."
              );
            }}
          >
            {mode === "register" && (
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="What should we call you?"
                  className="w-full rounded-xl border border-[#DFE3D5] bg-[#FDFCF9] px-4 py-3 outline-none transition placeholder:text-[#A1A69A] focus:border-[#75866B] focus:ring-2 focus:ring-[#DCE5D0]"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#DFE3D5] bg-[#FDFCF9] px-4 py-3 outline-none transition placeholder:text-[#A1A69A] focus:border-[#75866B] focus:ring-2 focus:ring-[#DCE5D0]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                required
                minLength={8}
                maxLength={128}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border border-[#DFE3D5] bg-[#FDFCF9] px-4 py-3 outline-none transition placeholder:text-[#A1A69A] focus:border-[#75866B] focus:ring-2 focus:ring-[#DCE5D0]"
              />
            </div>

            {mode === "register" && (
              <p className="text-xs leading-5 text-[#858B7F]">
                By creating an account, you&apos;ll be able to save your onboarding
                progress and return to it later.
              </p>
            )}

            {mode === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  disabled
                  title="We'll enable password recovery when authentication is connected."
                  className="text-sm text-[#75866B] opacity-70"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-[#526B55] px-6 py-3.5 font-medium text-white transition hover:bg-[#405743] focus:outline-none focus:ring-2 focus:ring-[#526B55] focus:ring-offset-2"
            >
              {mode === "login" ? "Log in â†’" : "Create account â†’"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-[#858B7F]">
            Your health journey deserves thoughtful care and protection.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-[#687368]">
          <Link href="/" className="transition hover:text-[#34483B]">
            â† Back to Nuriva
          </Link>
        </p>
      </section>
    </main>
  );
}

