type MisoProps = {
  mood?: "happy" | "sleeping" | "thinking" | "listening";
};

export default function Miso({ mood = "happy" }: MisoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-7xl">{mood === "sleeping" ? "😴" : "🐱"}</div>

      <p className="mt-2 text-sm font-medium text-teal-700">
        {mood === "sleeping"
          ? "I'm resting here if you need me."
          : "Hi! I'm Miso."}
      </p>
    </div>
  );
}
