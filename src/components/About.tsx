import { motion } from "framer-motion";
import baristaImg from "@/assets/about-barista.jpg";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-28 md:py-40 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-glow)] animate-float">
            <img src={baristaImg} alt="Barista pouring latte art" loading="lazy" width={1080} height={1600} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground font-display italic text-sm text-center p-4 shadow-[var(--shadow-soft)]">
            Crafted<br/>with<br/>quiet care
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-accent uppercase tracking-[0.4em] text-xs mb-6"
          >
            ⟡ Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl text-primary text-balance"
          >
            A quiet ritual <span className="italic font-display text-clay">between</span> moments.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 space-y-5 text-muted-foreground text-lg max-w-xl leading-relaxed"
          >
            <p>
              Komorebi began as a small wooden counter in a Kyoto alley — a place where time slowed, steam curled toward the ceiling, and every cup was poured like a brushstroke.
            </p>
            <p>
              Today, we carry that same patience into every roast, every pour, every conversation.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "12", l: "Origins" },
              { n: "06", l: "Years" },
              { n: "∞", l: "Pours" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="border-t border-border pt-4"
              >
                <div className="font-display text-4xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
