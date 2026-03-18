"use client";

import React from "react";

const defaultStats = [
  { value: "27,000", label: "Interactions each year", color: "text-brand-red" },
  { value: "2", label: "Community centres", color: "text-coral" },
  { value: "50", label: "Years of service", color: "text-purple" },
  { value: "5", label: "Community locations", color: "text-green" },
];

export function StatsGrid({ stats = defaultStats, eyebrow, title, subtitle }) {
  return (
    <section className="bg-charcoal px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 text-center md:mb-16">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold text-coral md:mb-4">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mb-5 font-display text-5xl font-bold text-warm-white md:mb-6 md:text-7xl lg:text-8xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/70 md:text-md">{subtitle}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`font-display text-5xl font-extrabold md:text-7xl ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
