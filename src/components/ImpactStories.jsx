"use client";

import React from "react";

const quotes = [
  {
    text: "Jeely has been a lifeline for our family. My kids come home happy every single day.",
    name: "Sarah T.",
    role: "Parent",
  },
  {
    text: "Working here has been the most rewarding job of my life. This place is special.",
    name: "Mark R.",
    role: "Play Worker",
  },
  {
    text: "The Playzone gave my daughter confidence I never thought she'd find. She's a different child.",
    name: "Anne M.",
    role: "Parent",
  },
];

export function ImpactStories() {
  return (
    <section className="bg-cream px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-coral md:mb-4">Stories</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Heard from the community
          </h2>
          <p className="text-muted md:text-md">
            The real measure of our work is in the lives we touch. Here are some of the voices from Castlemilk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl bg-warm-white p-8 shadow-sm">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt={q.name}
                className="size-16 rounded-full object-cover"
              />
              <p className="mb-2 mt-4 font-display text-4xl leading-none text-coral">"</p>
              <p className="italic text-charcoal">{q.text}</p>
              <p className="mt-4 font-semibold">{q.name}</p>
              <p className="text-sm text-muted">{q.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
