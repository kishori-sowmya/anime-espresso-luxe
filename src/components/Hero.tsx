import { motion } from "framer-motion";
import heroImg from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Anime style premium cafe interior at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/10 mix-blend-overlay" />
      </motion.div>

      {/* Steam particles */}
      <div className="pointer-events-none absolute bottom-1/3 right-[18%] hidden md:block">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="steam-line absolute block h-16 w-1 rounded-full bg-cream/40 blur-sm"
            style={{ left: `${i * 14}px`, animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 md:px-12 pb-20 md:pb-28 max-w-7xl mx-auto">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-cream/90 uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          Est. 2018 · Slow brewed in Kyoto
        </motion.p>
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-tight text-balance"
        >
          Komorebi<span className="italic text-gold">.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl"
        >
          <p className="font-display italic text-cream/90 text-xl md:text-2xl max-w-md text-balance">
            Where sunlight filters through the leaves — and into your cup.
          </p>
          <div className="flex gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-cream text-espresso px-6 py-3 text-sm uppercase tracking-widest hover:bg-gold transition-all duration-300 hover:gap-4">
              View Menu →
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-6 py-3 text-sm uppercase tracking-widest hover:bg-cream/10 transition-colors">
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-[10px] uppercase tracking-[0.4em]"
      >
        scroll
      </motion.div>
    </section>
  );
}
