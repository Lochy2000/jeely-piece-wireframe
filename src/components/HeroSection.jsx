"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function HeroSection() {
  return (
    <section
      id="relume"
      className="flex min-h-[500px] flex-col overflow-hidden lg:h-[calc(100vh-7.5rem)] lg:flex-row"
    >
      {/* Image panel — 1/3 width on desktop, full width on mobile */}
      <div className="relative h-64 w-full flex-shrink-0 lg:h-auto lg:w-3/6">
        <img
          src="/jp-classroom.jpg"
          alt="Children at lunchtime at Jeely Piece Club"
          className="absolute inset-0 h-full w-full object-cover "
          loading="eager"
          fetchPriority="high"
        />

        {/* Cream SVG curve — overlaps right edge of image on desktop only */}
        <svg
          className="absolute right-0 top-0 hidden h-full w-[80px] lg:block"
          viewBox="0 0 80 640"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M80,0 C40,160 40,480 80,640 L80,640 L80,0 Z"
            fill="#FAF7F4"
          />
        </svg>
      </div>

      {/* Content panel — 2/3 width on desktop */}
      <div className="flex flex-1 items-center bg-cream px-[5%] py-16 md:py-24 lg:px-16 lg:py-12">
        <div className="w-full max-w-2xl">
          <h1 className="mb-5 font-display text-6xl font-extrabold md:mb-6 md:text-9xl lg:text-10xl">
            For the people, by the people
          </h1>
          <p className="text-muted md:text-md">
            Fifty years serving Castlemilk. Two centres. Thousands of children
            every year.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button
              title="What's On"
              className="bg-brand-red text-white border-brand-red hover:bg-red-700"
            >
              What&apos;s On
            </Button>
            <Button
              title="Donate"
              variant="secondary"
              className="border-charcoal text-charcoal hover:bg-sand"
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
