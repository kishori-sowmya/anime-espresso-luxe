import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Ambience } from "@/components/Ambience";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Komorebi · A Quiet Premium Cafe in Kyoto" },
      {
        name: "description",
        content: "Komorebi is a premium anime-inspired cafe in Kyoto — slow brewed coffee, hand-thrown ceramics and afternoon light filtered through the leaves.",
      },
      { property: "og:title", content: "Komorebi · A Quiet Premium Cafe in Kyoto" },
      { property: "og:description", content: "Slow brewed coffee, matcha rituals and a pocket of stillness in the city." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Ambience />
      <Contact />
    </main>
  );
}
