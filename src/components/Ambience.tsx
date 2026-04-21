import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ambienceImg from "@/assets/ambience.jpg";

export function Ambience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="ambience" ref={ref} className="relative px-6 md:px-12 py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 md:order-2 relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-glow)] aspect-[3/4]">
            <motion.img
              style={{ y }}
              src={ambienceImg}
              alt="Anime ambience of cafe with girl reading"
              loading="lazy"
              width={1080}
              height={1600}
              className="absolute inset-0 h-[120%] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-accent uppercase tracking-[0.4em] text-xs mb-6"
          >
            ⟡ The Atmosphere
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-5xl md:text-7xl text-primary text-balance"
          >
            A pocket of <span className="italic font-display text-clay">stillness</span> in the city.
          </motion.h2>

          <div className="mt-12 space-y-8">
            {[
              { t: "Soft afternoon light", d: "Tall windows and linen curtains diffuse the day into something gentler." },
              { t: "Hand-thrown ceramics", d: "Each cup is unique — made in collaboration with local Kyoto potters." },
              { t: "Quiet playlists", d: "Lo-fi piano, rain on tile, and the occasional turn of a book page." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className="flex gap-5 border-l-2 border-accent/40 pl-5 hover:border-accent transition-colors"
              >
                <span className="font-display italic text-accent text-xl mt-0.5">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl text-primary">{f.t}</h3>
                  <p className="text-muted-foreground mt-1">{f.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
