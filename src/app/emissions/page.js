"use client";
import dynamic from "next/dynamic";
import { CO2_DATA, SNAPSHOT_2022, REGION_COLORS } from "@/data/datasets";
import StatCard from "@/components/ui/StatCard";

const LineChart = dynamic(() => import("@/components/charts/LineChart"), { ssr: false });
const BarChart  = dynamic(() => import("@/components/charts/BarChart"),  { ssr: false });

const FEATURED = ["United States","China","Australia","Canada","Germany","India","Sweden","Nigeria"];
const COLORS   = ["#f5a623","#38bdf8","#a3e635","#fbbf24","#2dd4bf","#e879f9","#4ade80","#fb7185"];

export default function EmissionsPage() {
  const lineData = FEATURED.map((c,i) => ({
    label: c,
    values: CO2_DATA.years.map((_, yi) => CO2_DATA.series[c]?.[yi] ?? 0),
    color: COLORS[i],
  }));

  const top15Bar = [...SNAPSHOT_2022]
    .sort((a,b) => b.co2 - a.co2)
    .slice(0,15)
    .map(d => ({ label: d.country, value: d.co2 }));

  const barColors = top15Bar.map(d =>
    REGION_COLORS[SNAPSHOT_2022.find(s=>s.country===d.label)?.region] ?? "#f5a623");

  const highest = SNAPSHOT_2022.reduce((a,b) => a.co2>b.co2?a:b);
  const lowest  = SNAPSHOT_2022.reduce((a,b) => a.co2<b.co2?a:b);
  const avgCo2  = (SNAPSHOT_2022.reduce((a,b)=>a+b.co2,0)/SNAPSHOT_2022.length).toFixed(1);

  return (
    <div className="p-8 max-w-5xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist mb-2">Explorer</p>
      <h1 className="font-display text-4xl font-bold text-rose mb-1">CO₂ Emissions</h1>
      <p className="text-mist text-sm mb-8">
        Tonnes per capita · Global Carbon Project / Our World in Data (CC BY 4.0) · 2000–2022
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <StatCard label="Highest emitter"  value={highest.country} sub={`${highest.co2}t per person`} accent="rose" />
        <StatCard label="Lowest emitter"   value={lowest.country}  sub={`${lowest.co2}t per person`}  accent="lime" />
        <StatCard label="Dataset average"  value={`${avgCo2}t`}    sub="tonnes per capita, 2022"       accent="sky"  />
      </div>

      <div className="bg-panel border border-rim rounded-lg p-5 mb-8">
        <h2 className="font-display font-semibold text-sm text-snow mb-4">
          CO₂ Emissions Trend (tonnes per capita)
        </h2>
        <LineChart data={lineData} years={CO2_DATA.years} colors={COLORS} height={300} />
      </div>

      <div className="bg-panel border border-rim rounded-lg p-5">
        <h2 className="font-display font-semibold text-sm text-snow mb-1">
          Top 15 Emitters per Capita (2022)
        </h2>
        <p className="text-mist text-xs mb-4">Color = world region</p>
        <BarChart
          data={top15Bar}
          color={barColors}
          height={320}
          formatValue={v => `${v}t`}
        />
      </div>
    </div>
  );
}
