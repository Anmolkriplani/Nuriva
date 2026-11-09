
export default function Quote() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14 md:px-12 md:py-20">
      <div className="relative mx-auto max-w-2xl rotate-[-1deg] border border-[#E8DFC1] bg-[#FBF2D9] px-7 py-9 shadow-[0_10px_25px_rgba(60,70,50,0.07)] md:px-12 md:py-11">
        <span
          aria-hidden="true"
          className="absolute -top-4 right-8 rotate-12 text-3xl text-[#A5B396]"
        >
          ♡
        </span>

        <span
          aria-hidden="true"
          className="absolute -top-3 left-8 h-6 w-14 rotate-[-5deg] bg-[#DCE5D0]/90"
        />

        <p className="font-serif text-xl leading-relaxed text-[#52634F] md:text-2xl">
          “You are stronger than you think, and we are here for every step.”
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-sm italic text-[#85816D]">
            A gentle reminder from Nuriva
          </span>
          <span aria-hidden="true" className="text-lg text-[#B9A477]">
            ✿
          </span>
        </div>
      </div>
    </section>
  );
}
