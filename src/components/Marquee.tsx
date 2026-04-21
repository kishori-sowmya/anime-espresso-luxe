export function Marquee() {
  const words = ["Single Origin", "✦", "Hand Roasted", "✦", "Slow Pour", "✦", "Anime Inspired", "✦", "Kyoto Beans", "✦", "Matcha Rituals", "✦"];
  const row = [...words, ...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-3xl md:text-5xl italic text-primary/80">
        {row.map((w, i) => (
          <span key={i} className={w === "✦" ? "text-accent not-italic" : ""}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
