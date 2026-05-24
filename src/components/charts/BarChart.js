"use client";
import { useEffect, useRef } from "react";

export default function BarChart({ data, color = "#f5a623", height = 320, formatValue }) {
  // data: [{ label, value }]
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !data?.length) return;

    import("d3").then((d3) => {
      const el = ref.current;
      d3.select(el).selectAll("*").remove();

      const W = el.clientWidth || 700;
      const H = height;
      const M = { top: 10, right: 16, bottom: 90, left: 54 };
      const iW = W - M.left - M.right;
      const iH = H - M.top  - M.bottom;

      const svg = d3.select(el).append("svg")
        .attr("viewBox", `0 0 ${W} ${H}`)
        .attr("width", "100%");

      const g = svg.append("g").attr("transform", `translate(${M.left},${M.top})`);

      const xScale = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([0, iW])
        .padding(0.35);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) * 1.1])
        .range([iH, 0]);

      // Grid
      g.append("g").selectAll("line")
        .data(yScale.ticks(5)).enter().append("line")
        .attr("x1", 0).attr("x2", iW)
        .attr("y1", d => yScale(d)).attr("y2", d => yScale(d))
        .attr("stroke", "#1e2333").attr("stroke-width", 1);

      // Bars
      g.selectAll(".bar")
        .data(data).enter().append("rect")
        .attr("class","bar")
        .attr("x", d => xScale(d.label))
        .attr("width", xScale.bandwidth())
        .attr("y", d => yScale(d.value))
        .attr("height", d => iH - yScale(d.value))
        .attr("fill", (_, i) => Array.isArray(color) ? color[i % color.length] : color)
        .attr("rx", 3)
        .attr("opacity", 0.85);

      // Value labels
      g.selectAll(".val-label")
        .data(data).enter().append("text")
        .attr("x", d => xScale(d.label) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.value) - 5)
        .attr("text-anchor", "middle")
        .style("fill", "#8b93a8")
        .style("font-family", "JetBrains Mono, monospace")
        .style("font-size", "9px")
        .text(d => formatValue ? formatValue(d.value) : d.value);

      // X axis
      g.append("g").attr("transform", `translate(0,${iH})`)
        .call(d3.axisBottom(xScale))
        .call(ax => ax.select(".domain").remove())
        .call(ax => ax.selectAll(".tick line").remove())
        .call(ax => ax.selectAll("text")
          .style("fill", "#8b93a8")
          .style("font-family", "JetBrains Mono, monospace")
          .style("font-size", "9px")
          .attr("transform", "rotate(-40)")
          .attr("text-anchor", "end")
          .attr("dy", "0.35em")
          .attr("dx", "-0.5em"));

      // Y axis
      g.append("g")
        .call(d3.axisLeft(yScale).ticks(5).tickFormat(formatValue ?? (d => d)))
        .call(ax => ax.select(".domain").remove())
        .call(ax => ax.selectAll(".tick line").remove())
        .call(ax => ax.selectAll("text")
          .style("fill", "#8b93a8")
          .style("font-family", "JetBrains Mono, monospace")
          .style("font-size", "10px"));
    });
  }, [data, color, height, formatValue]);

  return <div ref={ref} className="w-full fade-up" style={{ minHeight: height }} />;
}
