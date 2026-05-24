import StatCard from "@/components/ui/StatCard";
import { SNAPSHOT_2022, GDP_DATA, LIFE_EXP_DATA, CO2_DATA, COUNTRIES } from "@/data/datasets";
import Link from "next/link";

export default function OverviewPage() {
  const avgGdp  = Math.round(SNAPSHOT_2022.reduce((a,b)=>a+b.gdp,0)/SNAPSHOT_2022.length);
  const avgLife = (SNAPSHOT_2022.reduce((a,b)=>a+b.lifeExp,0)/SNAPSHOT_2022.length).toFixed(1);
  const avgCo2  = (SNAPSHOT_2022.reduce((a,b)=>a+b.co2,0)/SNAPSHOT_2022.length).toFixed(1);
  const richest = SNAPSHOT_2022.reduce((a,b)=>a.gdp>b.gdp?a:b);
  const oldest  = SNAPSHOT_2022.reduce((a,b)=>a.lifeExp>b.lifeExp?a:b);
  const cleanest= SNAPSHOT_2022.reduce((a,b)=>a.co2<b.co2?a:b);

  const PAGES = [
    { href:"/gdp",       title:"GDP Explorer",  desc:"GDP per capita trends across 40 countries (2000–2022).", color:"text-gold",  icon:"◆" },
    { href:"/health",    title:"Health",         desc:"Life expectancy over two decades, with scatter vs wealth.", color:"text-teal", icon:"◉" },
    { href:"/emissions", title:"CO₂ Emissions",  desc:"Per-capita carbon footprint trends and country rankings.", color:"text-rose", icon:"◎" },
  ];

  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist mb-3">
          World Development Indicators · 2022
        </p>
        <h1 className="font-display text-5xl font-bold text-snow leading-tight mb-3">
          Global<br />Dashboard
        </h1>
        <p className="text-mist text-sm max-w-lg leading-relaxed">
          Explore economic output, population health, and carbon emissions across
          40 countries spanning 2000–2022. Data sourced from the{" "}
          <span className="text-snow">World Bank</span> and{" "}
          <span className="text-snow">Our World in Data</span>.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <StatCard label="Countries"       value={COUNTRIES.length}   sub="across 7 regions"               accent="gold" />
        <StatCard label="Avg GDP/capita"  value={`$${(avgGdp/1000).toFixed(0)}k`} sub="USD, 2022"        accent="gold" />
        <StatCard label="Avg Life Exp."   value={`${avgLife} yrs`}   sub="at birth, 2022"                 accent="teal" />
        <StatCard label="Avg CO₂/capita" value={`${avgCo2}t`}       sub="tonnes per person"              accent="rose" />
        <StatCard label="Wealthiest"      value={richest.country}    sub={`$${richest.gdp.toLocaleString()} GDP/cap`} accent="sky"  />
        <StatCard label="Longest-lived"   value={oldest.country}     sub={`${oldest.lifeExp} yr avg`}     accent="lime" />
      </div>

      {/* Page cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {PAGES.map(({ href, title, desc, color, icon }) => (
          <Link
            key={href}
            href={href}
            className="bg-panel border border-rim rounded-lg p-5
                       hover:border-[#2e3550] hover:bg-[#161a27]
                       transition-all duration-200 group block"
          >
            <span className={`font-display text-2xl ${color} block mb-3 group-hover:scale-110
                              transition-transform duration-200 origin-left`}>
              {icon}
            </span>
            <h2 className={`font-display font-bold text-base ${color} mb-1`}>{title}</h2>
            <p className="text-mist text-xs leading-relaxed">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
