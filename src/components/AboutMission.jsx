"use client";

import React from "react";

export function AboutMission() {
  const pillars = [
    {
      label: "Community-led",
      description: "We are shaped by the people we serve. Families have a voice in everything we do.",
    },
    {
      label: "Child-centred",
      description: "Every decision starts with what's best for the child. No exceptions.",
    },
    {
      label: "Inclusive",
      description: "We welcome every child regardless of background, ability or circumstance.",
    },
    {
      label: "Sustainable",
      description: "50 years of continuous service. Built to last, built to adapt.",
    },
  ];

  return (
    <section id="mission" className="bg-cream px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — mission text */}
        <div>
          <img
            src="/jelly-logo.png"
            alt="Jeely Piece Club logo"
            className="size-12 mb-5"
          />
          <h2 className="mb-6 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
            Our mission &amp; vision
          </h2>
          <blockquote className="mb-6 border-l-4 border-coral pl-4 text-muted">
            Our mission is to increase life chances and opportunities for children, adults and the wider community. We encourage children, adults, families and groups to value themselves as being part of society.
          </blockquote>
          <p className="text-muted">
            Our vision is one where children and adults have improved self-confidence and self-esteem and are able to make positive changes in their lives, both now and in the future.
          </p>
        </div>

        {/* Right — how we work */}
        <div className="bg-sand rounded-2xl p-8">
          <h3 className="mb-6 font-display font-bold text-2xl md:text-3xl">
            How we work
          </h3>
          <ul className="flex flex-col gap-5">
            {pillars.map((pillar) => (
              <li key={pillar.label} className="flex items-start gap-3">
                <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                <p className="text-muted">
                  <span className="font-bold text-charcoal">{pillar.label} — </span>
                  {pillar.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
