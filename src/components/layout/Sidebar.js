"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV = [
  { href: "/",          label: "Overview",   icon: "◈" },
  { href: "/gdp",       label: "GDP",        icon: "◆" },
  { href: "/health",    label: "Health",     icon: "◉" },
  { href: "/emissions", label: "Emissions",  icon: "◎" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-panel border-r border-rim
                      flex flex-col z-40 hidden md:flex">
      {/* Brand */}
      <div className="px-6 py-7 border-b border-rim">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mist mb-1">
          Data Science
        </p>
        <h1 className="font-display text-lg font-bold text-snow leading-tight">
          Global<br />Dashboard
        </h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {NAV.map(({ href, label, icon }) => {
          const active = path === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-150",
                active
                  ? "bg-rim text-snow font-medium"
                  : "text-mist hover:text-snow hover:bg-rim/50"
              )}
            >
              <span className="text-base leading-none" style={{
                color: active ? "var(--gold)" : "inherit"
              }}>
                {icon}
              </span>
              <span className="font-display tracking-wide">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-rim">
        <p className="font-mono text-[9px] text-mist/50 uppercase tracking-widest">
          World Bank · OWID
        </p>
        <p className="font-mono text-[9px] text-mist/40 mt-0.5">
          Data through 2022
        </p>
      </div>
    </aside>
  );
}
