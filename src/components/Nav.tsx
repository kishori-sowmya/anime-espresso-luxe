import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Nav() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Ambience", href: "#ambience" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between rounded-full border border-border/60 bg-background/70 backdrop-blur-md px-5 md:px-7 py-3 shadow-[var(--shadow-soft)]">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg italic">k</span>
          <span className="font-display text-xl tracking-tight">Komorebi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="relative text-foreground/80 hover:text-foreground transition-colors group">
              {i.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-widest text-primary-foreground hover:bg-accent transition-colors">
          Reserve
        </a>
      </div>
    </motion.header>
  );
}
