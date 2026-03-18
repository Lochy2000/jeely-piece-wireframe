"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function FiveDecades() {
  return (
    <section id="relume" className="bg-cream px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-5 md:mb-6">
              <img
                src="/jelly-logo.png"
                className="size-20"
                alt="Jeely Piece Club icon"
              />
            </div>
            <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Five decades of real change
            </h2>
            <p className="border-l-4 border-coral pl-4 text-muted md:text-md">
              Since 1974, Jeely Piece Club has been here for Castlemilk. We run
              two centres where children come to play, learn, and belong.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn more" variant="secondary" className="border-charcoal text-charcoal hover:bg-sand">
                Learn more
              </Button>
              <Button
                title="About"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="text-brand-red"
              >
                About
              </Button>
            </div>
          </div>
          <div className="flex flex-col divide-y divide-sand">
            <div className="border-t-4 border-t-brand-red pb-6 pt-5">
              <p className="font-display text-6xl font-extrabold text-brand-red md:text-7xl">
                27,000
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">
                Interactions each year
              </p>
            </div>
            <div className="border-t-4 border-t-coral pb-6 pt-5">
              <p className="font-display text-6xl font-extrabold text-coral md:text-7xl">
                2
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">
                Community centres
              </p>
            </div>
            <div className="border-t-4 border-t-purple pb-6 pt-5">
              <p className="font-display text-6xl font-extrabold text-purple md:text-7xl">
                50
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted">
                Years of service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
