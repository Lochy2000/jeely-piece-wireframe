"use client";

import React from "react";

const PLACEHOLDER_LANDSCAPE =
  "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg";

const centres = [
  {
    image: PLACEHOLDER_LANDSCAPE,
    imageAlt: "Jeely Early Years Centre",
    badgeClass: "bg-brand-red-light text-brand-red",
    badgeLabel: "Ages 0–5",
    title: "Jeely Early Years Centre",
    description:
      "Our dedicated nursery and early years space, providing a nurturing environment for children from birth to 5 years.",
    address: "Castlemilk, Glasgow",
    cta: "Find out more →",
    ctaHref: "#",
  },
  {
    image: PLACEHOLDER_LANDSCAPE,
    imageAlt: "Jeely Playzone Playcentre",
    badgeClass: "bg-purple-light text-purple",
    badgeLabel: "Ages 5–12",
    title: "Jeely Playzone Playcentre",
    description:
      "A custom-built play centre — one of the finest in Glasgow. Term-time, holiday and weekend sessions.",
    address: "Castlemilk, Glasgow",
    cta: "Find out more →",
    ctaHref: "#",
  },
];

export function AboutCentres() {
  return (
    <section className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Section header */}
        <p className="mb-3 text-sm font-semibold text-coral">Our centres</p>
        <h2 className="mb-12 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
          Two homes for play in Castlemilk
        </h2>

        {/* Centre cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {centres.map((centre) => (
            <div key={centre.title} className="rounded-2xl shadow-sm overflow-hidden">
              <img
                src={centre.image}
                alt={centre.imageAlt}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="bg-warm-white p-6">
                <span
                  className={`inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full ${centre.badgeClass}`}
                >
                  {centre.badgeLabel}
                </span>
                <h3 className="mb-2 font-display font-bold text-2xl md:text-3xl">
                  {centre.title}
                </h3>
                <p className="mb-3 text-muted">{centre.description}</p>
                <p className="mb-4 text-sm text-muted">{centre.address}</p>
                <a
                  href={centre.ctaHref}
                  className="text-sm font-semibold text-brand-red hover:underline"
                >
                  {centre.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
