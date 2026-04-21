import { motion } from "framer-motion";
import coffeeImg from "@/assets/menu-coffee.jpg";
import cakeImg from "@/assets/menu-cake.jpg";
import pastryImg from "@/assets/menu-pastry.jpg";

const categories = [
  {
    img: coffeeImg,
    tag: "Brews",
    title: "Hojicha Latte",
    desc: "Roasted green tea steamed with creamy oat milk and a whisper of cane sugar.",
    price: "¥620",
  },
  {
    img: cakeImg,
    tag: "Sweets",
    title: "Matcha Shortcake",
    desc: "Featherlight sponge layered with whipped cream and a single ripe strawberry.",
    price: "¥780",
  },
  {
    img: pastryImg,
    tag: "Pastries",
    title: "Morning Selection",
    desc: "Buttery croissants, cinnamon rolls and seasonal danishes baked at dawn.",
    price: "¥480",
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative px-6 md:px-12 py-28 md:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-accent uppercase tracking-[0.4em] text-xs mb-6">⟡ The Menu</p>
            <h2 className="text-5xl md:text-7xl text-primary text-balance max-w-2xl">
              Small plates, <span className="italic font-display text-clay">slow</span> brews.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            A short menu that changes with the seasons — chosen, never assembled.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[1.5rem] bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-primary">{c.title}</h3>
                  <span className="font-display italic text-accent">{c.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-6 flex items-center text-xs uppercase tracking-widest text-primary/70 group-hover:text-accent transition-colors">
                  <span>Order</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center gap-3 font-display italic text-2xl md:text-3xl text-primary hover:text-accent transition-colors">
            See the full menu
            <span className="text-accent">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
