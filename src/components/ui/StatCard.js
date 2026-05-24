import clsx from "clsx";

export default function StatCard({ label, value, sub, accent = "gold", className }) {
  const accentClass = {
    gold: "text-gold",
    teal: "text-teal",
    rose: "text-rose",
    sky:  "text-sky",
    lime: "text-lime",
  }[accent] ?? "text-gold";

  return (
    <div className={clsx(
      "bg-panel border border-rim rounded-lg px-5 py-4 flex flex-col gap-1",
      className
    )}>
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-mist">
        {label}
      </p>
      <p className={clsx("font-display text-3xl font-bold leading-none", accentClass)}>
        {value}
      </p>
      {sub && (
        <p className="text-xs text-mist mt-1">{sub}</p>
      )}
    </div>
  );
}
