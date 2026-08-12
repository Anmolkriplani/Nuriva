import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-teal-50 to-yellow-50">
      <Container>
        <Navbar />
        <Hero />
        <section className="flex flex-col items-center justify-center py-28">
          <Heading title="Nuriva" subtitle="Care that feels like home." />

          <div className="mt-8">
            <Button text="Get Started" />
          </div>
        </section>
      </Container>
    </main>
  );
}
