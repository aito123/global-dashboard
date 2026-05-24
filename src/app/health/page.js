"use client";
import dynamic from "next/dynamic";
import { LIFE_EXP_DATA, SNAPSHOT_2022, REGION_COLORS } from "@/data/datasets";
import StatCard from "@/components/ui/StatCard";

const LineChart   = dynamic(() => import("@/components/charts/LineChart"),   { ssr: false });
const ScatterPlot = dynamic(() => import("@/components/charts/ScatterPlot"), { ssr: false });

const FEATURED = ["Japan","Australia","Sweden","United Kingdom","United States","Brazil","India","Nigeria"];
const COLORS    = ["#2dd4bf","#a3e635","#38bdf8","#818cf8","#f5a623","#fb7185","#e879f9","#fbbf24"];

const scatterData = SNAPSHOT_2022.filter(d => d.gdp && d.lifeExp)
  .map(d => ({ ...d, gdpThousands: Math.round(d.gdp / 1000) * 1000 }));

export default function HealthPage() {
  const lineData = FEATURED.map((c, i) => ({
    label: c,
    values: LIFE_EXP_DATA.years.map((_, yi) => LIFE_EXP_DATA.series[c]?.[yi] ?? 0),
    color: COLORS[i],
  }));

  const highest = SNAPSHOT_2022.reduce((a,b) => a.lifeExp > b.lifeExp ? a : b);
  const lowest  = SNAPSHOT_2022.reduce((a,b) => a.lifeExp < b.lifeExp ? a : b);
  const gained  = SNAPSHOT_2022.reduce((a,b) => {
    const gA = (LIFE_EXP_DATA.series[a.country]?.at(-1) ?? 0) - (LIFE_EXP_DATA.series[a.country]?.[0] ?? 0);
    const gB = (LIFE_EXP_DATA.series[b.country]?.at(-1) ?? 0) - (LIFE_EXP_DATA.series[b.country]?.[0] ?? 0);
    return gA > gB ? a : b;
  });

  return (
    <div className="p-8 max-w-5xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist mb-2">Explorer</p>
      <h1 className="font-display text-4xl font-bold text-teal mb-1">Health & Life Expectancy</h1>
      <p className="text-mist text-sm mb-8">
        Years at birth · UN / Our World in Data (CC BY 4.0) · 2000–2022
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Longest-lived"    value={highest.country}  sub={`${highest.lifeExp} yrs`}  accent="teal" />
        <StatCard label="Shortest-lived"   value={lowest.country}   sub={`${lowest.lifeExp} yrs`}   accent="rose" />
        <StatCard label="Most Improved"    value={gained.country}
          sub={`+${((LIFE_EXP_DATA.series[gained.country]?.at(-1)??0) - (LIFE_EXP_DATA.series[gained.country]?.[0]??0)).toFixed(1)} yrs since 2000`}
          accent="lime"
        />
      </div>

      <div className="bg-panel border border-rim rounded-lg p-5 mb-8">
        <h2 className="font-display font-semibold text-sm text-snow mb-4">
          Life Expectancy Trend (years at birth)
        </h2>
        <LineChart data={lineData} years={LIFE_EXP_DATA.years} colors={COLORS} height={300} />
      </div>

      <div className="bg-panel border border-rim rounded-lg p-5">
        <h2 className="font-display font-semibold text-sm text-snow mb-1">
          Wealth vs. Life Expectancy (2022)
        </h2>
        <p className="text-mist text-xs mb-4">
          Each dot is a country. Hover for details. Color = world region.
        </p>
        <ScatterPlot
          data={scatterData}
          xKey="gdp"
          yKey="lifeExp"
          colorKey="region"
          colorMap={REGION_COLORS}
          xLabel="GDP per capita (USD)"
          yLabel="Life expectancy (yrs)"
          height={380}
        />
        {/* Region legend */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
          {Object.entries(REGION_COLORS).map(([r,c]) => (
            <div key={r} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{background:c}}/>
              <span className="font-mono text-[10px] text-mist">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
