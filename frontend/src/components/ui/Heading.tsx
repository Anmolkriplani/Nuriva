type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-teal-700">{title}</h1>

      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
