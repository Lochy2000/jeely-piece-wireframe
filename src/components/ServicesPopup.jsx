"use client";

import React from "react";

const locations = [
  {
    name: "Tormusk",
    venue: "Tormusk Community Centre",
    schedule: "Ages 5–12 · Wednesdays",
  },
  {
    name: "Kingspark",
    venue: "Kingspark Church",
    schedule: "Ages 5–12 · Thursdays",
  },
  {
    name: "Dougrie",
    venue: "Dougrie Community Hub",
    schedule: "Ages 5–12 · Fridays",
  },
  {
    name: "Birgidale",
    venue: "Birgidale Road area",
    schedule: "Ages 5–12 · Tuesdays",
  },
  {
    name: "Toryglen",
    venue: "Toryglen Community Centre",
    schedule: "Ages 5–12 · Mondays",
  },
  {
    name: "Street Play",
    venue: "Tormusk Street",
    schedule: "Outdoor free play · Saturdays",
  },
];

export function ServicesPopup() {
  return (
    <section id="popup-play" className="bg-cream px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="mb-3 text-sm font-semibold text-purple">Community</p>
          <h2 className="mb-4 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
            Pop-up Play Clubs
          </h2>
          <p className="text-muted max-w-2xl">
            We bring Jeely play right into the community. Our pop-up clubs run regularly across
            Castlemilk and beyond.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-warm-white rounded-2xl p-6 shadow-sm flex flex-col gap-3"
            >
              <span className="size-3 rounded-full bg-purple shrink-0" aria-hidden="true" />
              <h3 className="font-display font-bold text-xl">{loc.name}</h3>
              <p className="text-muted text-sm">{loc.venue}</p>
              <span className="bg-purple-light text-purple text-xs font-semibold px-3 py-1 rounded-full self-start">
                {loc.schedule}
              </span>
              <a
                href="/whats-on"
                className="mt-auto inline-flex items-center gap-1 text-purple text-sm font-semibold hover:underline"
              >
                Find out more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
