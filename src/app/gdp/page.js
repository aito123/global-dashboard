"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { GDP_DATA, SNAPSHOT_2022, REGION_COLORS } from "@/data/datasets";

const LineChart = dynamic(() => import("@/components/charts/LineChart"), { ssr: false });
const BarChart  = dynamic(() => import("@/components/charts/BarChart"),  { ssr: false });

const FEATURED = ["United States","China","Germany","Japan","India","Brazil","United Kingdom","Australia"];
const CHART_COLORS = ["#f5a623","#38bdf8","#2dd4bf","#fb7185","#a3e635","#818cf8","#e879f9","#fbbf24"];

export default function GDPPage() {
  const [selected, setSelected] = useState(FEATURED.slice(0,4));

  const lineData = useMemo(() =>
    selected.map((c, i) => ({
      label: c,
      values: GDP_DATA.years.map((_, yi) => GDP_DATA.series[c]?.[yi] ?? 0),
      color: CHART_COLORS[i % CHART_COLORS.length],
    })), [selected]);

  const barData = useMemo(() =>
    [...SNAPSHOT_2022]
      .sort((a,b) => b.gdp - a.gdp)
      .slice(0,15)
      .map(d => ({ label: d.country, value: d.gdp })),
    []);

  const barColors = barData.map(d => REGION_COLORS[
    SNAPSHOT_2022.find(s=>s.country===d.label)?.region
  ] ?? "#f5a623");

  const toggle = (c) =>
    setSelected(prev =>
      prev.includes(c)
        ? prev.length > 1 ? prev.filter(x=>x!==c) : prev
        : [...prev.slice(-4), c]
    );

  return (
    <div className="p-8 max-w-5xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist mb-2">Explorer</p>
      <h1 className="font-display text-4xl font-bold text-gold mb-1">GDP per Capita</h1>
      <p className="text-mist text-sm mb-8">
        Current USD · World Bank (CC BY 4.0) · 2000–2022
      </p>

      {/* Country selector */}
      <div className="mb-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-mist mb-3">
          Select up to 5 countries
        </p>
        <div className="flex flex-wrap gap-2">
          {FEATURED.map((c, i) => {
            const active = selected.includes(c);
            return (
              <button key={c} onClick={() => toggle(c)}
                className="px-3 py-1.5 rounded text-xs font-mono transition-all duration-150"
                style={{
                  background: active ? CHART_COLORS[FEATURED.indexOf(c)] + "22" : "#11141c",
                  border: `1px solid ${active ? CHART_COLORS[FEATURED.indexOf(c)] : "#1e2333"}`,
                  color: active ? CHART_COLORS[FEATURED.indexOf(c)] : "#8b93a8",
                }}>
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Line chart */}
      <div className="bg-panel border border-rim rounded-lg p-5 mb-8">
        <h2 className="font-display font-semibold text-sm text-snow mb-4">
          GDP per Capita Trend (USD)
        </h2>
        <LineChart
          data={lineData}
          years={GDP_DATA.years}
          colors={lineData.map(d => d.color)}
          height={300}
        />
      </div>

      {/* Bar chart */}
      <div className="bg-panel border border-rim rounded-lg p-5">
        <h2 className="font-display font-semibold text-sm text-snow mb-1">
          Top 15 Countries by GDP/capita (2022)
        </h2>
        <p className="text-mist text-xs mb-4">Color = world region</p>
        <BarChart
          data={barData}
          color={barColors}
          height={320}
          formatValue={v => `$${(v/1000).toFixed(0)}k`}
        />
      </div>
    </div>
  );
}
