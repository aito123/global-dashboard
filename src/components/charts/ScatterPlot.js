"use client";
import { useEffect, useRef, useState } from "react";

export default function ScatterPlot({ data, xKey, yKey, colorKey, colorMap,
                                      xLabel, yLabel, height = 400 }) {
  const ref      = useRef(null);
  const [tip, setTip] = useState(null);

  useEffect(() => {
    if (!ref.current || !data?.length) return;

    import("d3").then((d3) => {
      const el = ref.current;
      d3.select(el).selectAll("svg").remove();

      const W = el.clientWidth || 700;
      const H = height;
      const M = { top: 16, right: 20, bottom: 44, left: 54 };
      const iW = W - M.left - M.right;
      const iH = H - M.top  - M.bottom;

      const svg = d3.select(el).append("svg")
        .attr("viewBox", `0 0 ${W} ${H}`)
        .attr("width", "100%");

      const g = svg.append("g").attr("transform", `translate(${M.left},${M.top})`);

      const xScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[xKey]) * 0.9, d3.max(data, d => d[xKey]) * 1.05])
        .range([0, iW]);
      const yScale = d3.scaleLinear()
        .domain([d3.min(data, d => d[yKey]) * 0.97, d3.max(data, d => d[yKey]) * 1.02])
        .range([iH, 0]);

      // Grid
      g.append("g").selectAll("line.gy").data(yScale.ticks(5)).enter()
        .append("line").attr("x1",0).attr("x2",iW)
        .attr("y1", d=>yScale(d)).attr("y2", d=>yScale(d))
        .attr("stroke","#1e2333").attr("stroke-width",1);
      g.append("g").selectAll("line.gx").data(xScale.ticks(5)).enter()
        .append("line").attr("y1",0).attr("y2",iH)
        .attr("x1", d=>xScale(d)).attr("x2", d=>xScale(d))
        .attr("stroke","#1e2333").attr("stroke-width",1);

      // Axes
      g.append("g").attr("transform",`translate(0,${iH})`)
        .call(d3.axisBottom(xScale).ticks(5).tickFormat(d=>
          d >= 1000 ? `$${(d/1000).toFixed(0)}k` : d))
        .call(ax=>ax.select(".domain").remove())
        .call(ax=>ax.selectAll(".tick line").remove())
        .call(ax=>ax.selectAll("text")
          .style("fill","#8b93a8")
          .style("font-family","JetBrains Mono, monospace")
          .style("font-size","10px"));

      g.append("g")
        .call(d3.axisLeft(yScale).ticks(5))
        .call(ax=>ax.select(".domain").remove())
        .call(ax=>ax.selectAll(".tick line").remove())
        .call(ax=>ax.selectAll("text")
          .style("fill","#8b93a8")
          .style("font-family","JetBrains Mono, monospace")
          .style("font-size","10px"));

      // Axis labels
      svg.append("text")
        .attr("x", M.left + iW/2).attr("y", H - 4)
        .attr("text-anchor","middle")
        .style("fill","#8b93a8").style("font-size","10px")
        .style("font-family","JetBrains Mono, monospace")
        .style("text-transform","uppercase").style("letter-spacing","0.1em")
        .text(xLabel);

      svg.append("text")
        .attr("transform","rotate(-90)")
        .attr("x", -(M.top + iH/2)).attr("y", 14)
        .attr("text-anchor","middle")
        .style("fill","#8b93a8").style("font-size","10px")
        .style("font-family","JetBrains Mono, monospace")
        .style("text-transform","uppercase").style("letter-spacing","0.1em")
        .text(yLabel);

      // Dots
      g.selectAll("circle").data(data).enter().append("circle")
        .attr("cx", d => xScale(d[xKey]))
        .attr("cy", d => yScale(d[yKey]))
        .attr("r", 6)
        .attr("fill", d => colorMap?.[d[colorKey]] ?? "#f5a623")
        .attr("fill-opacity", 0.75)
        .attr("stroke", d => colorMap?.[d[colorKey]] ?? "#f5a623")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1)
        .style("cursor","pointer")
        .on("mousemove", function(event, d) {
          const rect = el.getBoundingClientRect();
          setTip({ x: event.clientX - rect.left, y: event.clientY - rect.top, d });
          d3.select(this).attr("r", 9).attr("fill-opacity", 1);
        })
        .on("mouseleave", function() {
          setTip(null);
          d3.select(this).attr("r", 6).attr("fill-opacity", 0.75);
        });
    });
  }, [data, xKey, yKey, height]);

  return (
    <div ref={ref} className="w-full fade-up relative" style={{ minHeight: height }}>
      {tip && (
        <div
          className="absolute z-50 bg-[#1a1f2e] border border-rim rounded-lg
                     px-4 py-3 text-xs pointer-events-none shadow-xl"
          style={{ left: tip.x + 14, top: tip.y - 10 }}
        >
          <p className="font-display font-semibold text-snow mb-1">{tip.d.country}</p>
          <p className="text-mist">{tip.d[colorKey]}</p>
          <p className="font-mono text-gold mt-2">
            {xLabel}: {typeof tip.d[xKey] === "number"
              ? `$${tip.d[xKey].toLocaleString()}`
              : tip.d[xKey]}
          </p>
          <p className="font-mono text-teal">
            {yLabel}: {tip.d[yKey]}
          </p>
        </div>
      )}
    </div>
  );
}
