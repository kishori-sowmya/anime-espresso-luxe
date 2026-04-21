import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-12 py-28 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      {/* decorative grain */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "var(--grain)" }} />
      <div className="relative max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gold uppercase tracking-[0.4em] text-xs mb-6"
        >
          ⟡ Visit · Reserve
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-[9rem] leading-[0.9] tracking-tight text-balance max-w-5xl"
        >
          Come <span className="italic text-gold">sit</span> with us.
        </motion.h2>

        <div className="mt-20 grid md:grid-cols-3 gap-10 md:gap-16">
          {[
            {
              t: "Find Us",
              lines: ["3-12 Nishikiyamachi", "Nakagyō Ward, Kyoto", "604-8005 Japan"],
            },
            {
              t: "Open Hours",
              lines: ["Mon–Fri  ·  08:00 → 19:00", "Sat–Sun  ·  09:00 → 21:00", "Closed every 2nd Tuesday"],
            },
            {
              t: "Reach Out",
              lines: ["hello@komorebi.cafe", "+81 75 0000 0000", "@komorebi.cafe"],
            },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <h3 className="font-display italic text-2xl text-gold mb-5">{b.t}</h3>
              <ul className="space-y-2 text-primary-foreground/85">
                {b.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-20 flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-primary-foreground/15 pt-10"
        >
          <p className="font-display italic text-2xl md:text-3xl max-w-md text-balance">
            Reserve a window seat — your cup is already steeping.
          </p>
          <a
            href="mailto:hello@komorebi.cafe"
            className="group inline-flex items-center gap-3 rounded-full bg-gold text-espresso px-8 py-5 text-sm uppercase tracking-[0.25em] hover:bg-cream transition-all duration-500 self-start md:self-auto"
          >
            Reserve a table
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
          </a>
        </motion.div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Komorebi Coffee Co.</span>
          <span className="font-display italic text-base text-gold not-italic-none">木漏れ日</span>
          <span>Crafted in Kyoto</span>
        </div>
      </div>
    </section>
  );
}
