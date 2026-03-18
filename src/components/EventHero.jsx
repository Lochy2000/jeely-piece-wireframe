"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function EventHero() {
  return (
    <section className="flex min-h-[400px] flex-col overflow-hidden lg:h-[65vh] lg:flex-row">
      {/* Image panel */}
      <div className="relative h-56 w-full flex-shrink-0 lg:h-auto lg:w-1/2">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          alt="Summer Holiday Club"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* SVG curve on right edge */}
        <svg
          className="absolute right-0 top-0 hidden h-full w-[80px] lg:block"
          viewBox="0 0 80 640"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M80,0 C40,160 40,480 80,640 L80,640 L80,0 Z" fill="#FAF7F4" />
        </svg>
      </div>

      {/* Content panel */}
      <div className="flex flex-1 items-center bg-cream px-[5%] py-14 lg:px-16">
        <div className="w-full max-w-xl">
          {/* Category badge */}
          <span className="mb-4 inline-block rounded-full bg-coral px-3 py-1 text-sm font-semibold text-white">
            Activity
          </span>

          <h1 className="mb-4 font-display font-extrabold text-5xl md:text-7xl">
            Summer Holiday Club
          </h1>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>📅 Every Saturday</span>
            <span>🕙 10:00am – 3:00pm</span>
            <span>📍 Jeely Playzone Playcentre, Castlemilk</span>
            <span>👶 Ages 5–12</span>
          </div>

          <p className="mt-4 text-muted">
            A full day of fun, games, crafts and outdoor activities. Open to all children aged
            5–12. No experience needed — just come ready to play!
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              title="Book now"
              className="bg-brand-red text-white border-brand-red hover:bg-red-700"
            >
              Book now
            </Button>
            <Button
              title="Add to calendar"
              variant="secondary"
              className="border-charcoal text-charcoal hover:bg-sand"
            >
              Add to calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
