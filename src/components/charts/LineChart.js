"use client";
import { useEffect, useRef } from "react";

export default function LineChart({ data, years, colors, width = 700, height = 320 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !data?.length) return;

    import("d3").then((d3) => {
      const el = ref.current;
      d3.select(el).selectAll("*").remove();

      const W = el.clientWidth || width;
      const H = height;
      const M = { top: 16, right: 20, bottom: 36, left: 46 };
      const iW = W - M.left - M.right;
      const iH = H - M.top  - M.bottom;

      const svg = d3.select(el)
        .append("svg")
        .attr("viewBox", `0 0 ${W} ${H}`)
        .attr("width", "100%");

      const g = svg.append("g").attr("transform", `translate(${M.left},${M.top})`);

      const xScale = d3.scaleLinear().domain(d3.extent(years)).range([0, iW]);
      const allValues = data.flatMap(s => s.values);
      const yScale = d3.scaleLinear()
        .domain([d3.min(allValues) * 0.92, d3.max(allValues) * 1.05])
        .range([iH, 0]);

      // Grid
      g.append("g").selectAll("line")
        .data(yScale.ticks(5)).enter().append("line")
        .attr("x1", 0).attr("x2", iW)
        .attr("y1", d => yScale(d)).attr("y2", d => yScale(d))
        .attr("stroke", "#1e2333").attr("stroke-width", 1);

      // Axes
      g.append("g").attr("transform", `translate(0,${iH})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.format("d")).ticks(years.length))
        .call(ax => ax.select(".domain").remove())
        .call(ax => ax.selectAll("text")
          .style("fill", "#8b93a8")
          .style("font-family", "JetBrains Mono, monospace")
          .style("font-size", "10px"))
        .call(ax => ax.selectAll(".tick line").attr("stroke", "#1e2333"));

      g.append("g")
        .call(d3.axisLeft(yScale).ticks(5))
        .call(ax => ax.select(".domain").remove())
        .call(ax => ax.selectAll("text")
          .style("fill", "#8b93a8")
          .style("font-family", "JetBrains Mono, monospace")
          .style("font-size", "10px"))
        .call(ax => ax.selectAll(".tick line").remove());

      // Lines
      const line = d3.line()
        .x((_, i) => xScale(years[i]))
        .y(d => yScale(d))
        .curve(d3.curveMonotoneX);

      data.forEach((series, idx) => {
        const color = colors?.[idx] ?? "#f5a623";

        g.append("path")
          .datum(series.values)
          .attr("fill", "none")
          .attr("stroke", color)
          .attr("stroke-width", 2)
          .attr("opacity", 0.85)
          .attr("d", line);

        // End dot
        const last = series.values.at(-1);
        g.append("circle")
          .attr("cx", xScale(years.at(-1)))
          .attr("cy", yScale(last))
          .attr("r", 3.5)
          .attr("fill", color);

        // Label
        g.append("text")
          .attr("x", xScale(years.at(-1)) + 6)
          .attr("y", yScale(last) + 4)
          .style("fill", color)
          .style("font-size", "10px")
          .style("font-family", "JetBrains Mono, monospace")
          .text(series.label);
      });
    });
  }, [data, years, colors, height]);

  return (
    <div ref={ref} className="w-full fade-up" style={{ minHeight: height }} />
  );
}
