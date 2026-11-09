"use client";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Quote from "@/components/home/Quote";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FBF8F1] text-[#34483B]">
      <Container>
        <Navbar />
        <Hero />
        <Quote />

        {/* About Nuriva */}
        <section id="about" className="scroll-mt-24 px-6 py-24 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#75866B]">
            A little about us
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
            Healthcare is more than appointments and reports.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#687368] md:text-lg">
            Nuriva is a supportive space designed to help patients and
            caregivers navigate their health journeys with greater confidence.
            Our goal is to bring helpful resources, personal organization,
            trusted healthcare connections, and compassionate guidance into
            one approachable experience.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-[#687368] md:text-lg">
            Whether you are managing your own care or supporting someone you
            love, Nuriva aims to make the next step feel a little clearer and
            less overwhelming.
          </p>
        </section>

        {/* How to use Nuriva */}
        <section
          id="how-to-use"
          className="scroll-mt-24 rounded-[2rem] bg-[#F0F1E7] px-6 py-16 md:px-12 md:py-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#75866B]">
            Your guide to getting started
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-5xl">
            One small step at a time.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-[#687368]">
            You don&apos;t need to figure everything out at once. Start with what
            you need today, and explore the rest whenever you&apos;re ready.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Create your space",
                description:
                  "Get started and tell us whether you&apos;re here for yourself or to support someone else.",
                note: "Begin wherever you feel comfortable.",
              },
              {
                number: "02",
                title: "Make it yours",
                description:
                  "Share the information you&apos;re comfortable providing so we can tailor the experience to your needs.",
                note: "You can update your details later.",
              },
              {
                number: "03",
                title: "Explore your resources",
                description:
                  "Find relevant educational material, organize your health information, and explore available support.",
                note: "Take things at your own pace.",
              },
              {
                number: "04",
                title: "Find your next step",
                description:
                  "Use Nuriva to help prepare questions, keep track of information, and navigate appropriate care resources.",
                note: "For medical decisions, work with a qualified professional.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[#DFE3D5] bg-[#FBF8F1] p-6 md:p-8"
              >
                <p className="font-serif text-2xl text-[#A18A68]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#34483B]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#687368]">
                  {step.description}
                </p>
                <p className="mt-5 text-sm italic text-[#75866B]">
                  {step.note}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/onboarding"
              className="inline-flex items-center justify-center rounded-full bg-[#526B55] px-8 py-4 font-medium text-white transition hover:bg-[#405743] focus:outline-none focus:ring-2 focus:ring-[#526B55] focus:ring-offset-2"
            >
              Begin your journey <span className="ml-2">â†’</span>
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-6 py-24 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#75866B]">
            We&apos;re here to help
          </p>

          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            Have a question?
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#687368]">
            Need help finding your way around Nuriva, or have an idea that
            could make the experience better? We&apos;d love to hear from you.
          </p>

          <p className="mt-6 text-sm text-[#75866B]">
            Our contact details will be added here once they&apos;re ready.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#E6E2D7] px-6 py-8 md:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-2xl font-semibold text-[#526B55]">
                Nuriva
              </p>
              <p className="mt-1 text-sm text-[#758074]">
                Care. Guide. Heal.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#687368]"
            >
              <a href="#home" className="hover:text-[#34483B]">
                Home
              </a>
              <a href="#about" className="hover:text-[#34483B]">
                About
              </a>
              <a href="#how-to-use" className="hover:text-[#34483B]">
                How to use
              </a>
              <a href="#contact" className="hover:text-[#34483B]">
                Contact
              </a>
            </nav>
          </div>

          <p className="mt-8 text-xs leading-6 text-[#858B7F]">
            Nuriva provides supportive resources and does not replace
            professional medical advice, diagnosis, or treatment.
          </p>
        </footer>
      </Container>
    </main>
  );
}

