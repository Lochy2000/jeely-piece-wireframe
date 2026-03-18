"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "#",
  secondaryLabel,
  secondaryHref = "#",
  imageSrc = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
  imageAlt = "Jeely Piece Club",
}) {
  return (
    <section className="flex min-h-[400px] flex-col overflow-hidden lg:h-[60vh] lg:flex-row">
      {/* Image panel */}
      <div className="relative h-56 w-full flex-shrink-0 lg:h-auto lg:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
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
      <div className="flex flex-1 items-center bg-cream px-[5%] py-14 md:py-20 lg:px-16 lg:py-12">
        <div className="w-full max-w-xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">{eyebrow}</p>
          )}
          <h1 className="mb-5 font-display text-5xl font-extrabold md:mb-6 md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted md:text-md">{subtitle}</p>
          )}
          {(ctaLabel || secondaryLabel) && (
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {ctaLabel && (
                <Button
                  title={ctaLabel}
                  className="bg-brand-red text-white border-brand-red hover:bg-red-700"
                  onClick={() => { window.location.href = ctaHref; }}
                >
                  {ctaLabel}
                </Button>
              )}
              {secondaryLabel && (
                <Button
                  title={secondaryLabel}
                  variant="secondary"
                  className="border-charcoal text-charcoal hover:bg-sand"
                  onClick={() => { window.location.href = secondaryHref; }}
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
