"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function FiftiethHero() {
  return (
    <section className="bg-cream px-[5%] py-20 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        {/* Pill badge */}
        <span className="mb-6 inline-block rounded-full bg-coral px-4 py-1.5 text-sm font-semibold text-white">
          1974 – 2024
        </span>

        {/* Main heading */}
        <h1 className="font-display font-extrabold text-6xl md:text-9xl lg:text-[10rem] leading-tight">
          50 years of Jeely
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-xl mx-auto text-muted md:text-md">
          Five decades of play, learning and community in the heart of Castlemilk. We&apos;re
          celebrating — and we&apos;re just getting started.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            title="Celebrate with us"
            className="bg-coral text-white border-coral hover:bg-coral/90"
          >
            Celebrate with us
          </Button>
          <Button
            title="Buy a piece"
            variant="secondary"
            className="border-charcoal text-charcoal hover:bg-sand"
          >
            Buy a piece
          </Button>
        </div>

        {/* Decorative large number */}
        <div
          className="mt-8 select-none font-display font-extrabold leading-none text-sand"
          style={{ fontSize: "clamp(120px, 20vw, 200px)" }}
          aria-hidden="true"
        >
          50
        </div>
      </div>
    </section>
  );
}
