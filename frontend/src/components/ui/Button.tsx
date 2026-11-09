type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="rounded-2xl bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-xl">
      {text}
    </button>
  );
}
