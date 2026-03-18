"use client";

import React from "react";

const milestones = [
  {
    year: "1974",
    title: "Founded",
    body: "Jeely Piece Club opens its doors in Castlemilk, serving the local community with after-school play provision.",
  },
  {
    year: "1980s",
    title: "Growing roots",
    body: "Expanding our reach across Castlemilk with more sessions, more children and a growing team of dedicated volunteers.",
  },
  {
    year: "1990s",
    title: "Building a home",
    body: "We secure our first dedicated premises, giving Jeely a permanent base in the heart of the community.",
  },
  {
    year: "2000s",
    title: "The Playzone opens",
    body: "Our custom-built Jeely Playzone Playcentre opens — one of the finest dedicated play facilities in Glasgow.",
  },
  {
    year: "2010s",
    title: "Expanding our reach",
    body: "Pop-up play clubs launch across Castlemilk, bringing Jeely play directly into local neighbourhoods.",
  },
  {
    year: "2024",
    title: "50 years strong",
    body: "Half a century of serving Castlemilk. 27,000 interactions a year. And we're still here, still growing, still playing.",
  },
];

export function FiftiethTimeline() {
  return (
    <section className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-coral md:mb-4">Our story</p>
          <h2 className="font-display text-5xl font-bold md:text-7xl lg:text-8xl">
            Five decades, one community
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-sand md:block" aria-hidden="true" />

          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex gap-6 items-start ${
                  i < milestones.length - 1 ? "border-b border-sand pb-8 mb-8" : ""
                }`}
              >
                {/* Coral dot */}
                <div className="relative z-10 mt-1.5 flex-shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral-light border-2 border-coral">
                    <span className="h-3 w-3 rounded-full bg-coral" />
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="font-display font-extrabold text-3xl text-coral">{m.year}</p>
                  <h3 className="font-display font-bold text-xl mt-1 mb-2">{m.title}</h3>
                  <p className="text-muted text-base">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
