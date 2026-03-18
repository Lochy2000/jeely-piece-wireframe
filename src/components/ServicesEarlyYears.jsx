"use client";

import React from "react";

const bullets = {
  nursery: [
    "Funded nursery hours available",
    "Monday to Friday, term time",
    "Experienced, qualified staff",
    "Applications open year round",
  ],
  stayPlay: [
    "No booking required",
    "Welcoming to all families",
    "Regular sessions throughout the week",
    "Tea, coffee and a friendly chat",
  ],
};

export function ServicesEarlyYears() {
  return (
    <section id="early-years" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-brand-red">Ages 0–5</p>
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
            Early years
          </h2>
        </div>

        {/* --- Nursery School --- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Jeely Nursery School"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="bg-brand-red-light text-brand-red text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Ages 0–5
            </span>
            <h3 className="mb-4 font-display font-bold text-3xl md:text-4xl">
              Jeely Nursery School
            </h3>
            <p className="text-muted mb-6">
              Our registered nursery provides high-quality early learning and childcare in a warm,
              inclusive environment. We focus on play-based learning that builds confidence,
              curiosity and friendship from the very start.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {bullets.nursery.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/our-services/nursery"
              className="border border-brand-red text-brand-red rounded-lg px-4 py-2 text-sm hover:bg-brand-red-light transition-colors inline-block"
            >
              Apply for a place →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sand my-12 md:my-16" />

        {/* --- Stay & Play --- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content (left on mobile, left on desktop — image flips right) */}
          <div className="order-2 lg:order-1">
            <span className="bg-coral-light text-coral text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
              Ages 0–5
            </span>
            <h3 className="mb-4 font-display font-bold text-3xl md:text-4xl">
              Stay &amp; Play at the Playzone
            </h3>
            <p className="text-muted mb-6">
              Drop in with your little one and enjoy free play in our safe, stimulating Playzone
              environment. A chance for children to explore and for parents and carers to connect.
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {bullets.stayPlay.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/whats-on"
              className="border border-coral text-coral rounded-lg px-4 py-2 text-sm hover:bg-coral-light transition-colors inline-block"
            >
              See session times →
            </a>
          </div>

          {/* Image (right on desktop) */}
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Stay and Play at the Playzone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
