"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function ActivitiesOverview() {
  return (
    <section id="relume" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-coral md:mb-4">Play</p>
            <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Activities built for real kids
            </h2>
            <p className="mb-6 text-muted md:mb-8 md:text-md">
              From sports to crafts to quiet corners, we have space for every
              child. Come as you are and find your thing.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="size-3 rounded-full bg-green" />
                  <h3 className="font-display text-5xl font-bold md:text-7xl lg:text-8xl">
                    Sports
                  </h3>
                </div>
                <p className="text-muted">Football, basketball, and outdoor games</p>
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="size-3 rounded-full bg-purple" />
                  <h3 className="font-display text-5xl font-bold md:text-7xl lg:text-8xl">
                    Creative
                  </h3>
                </div>
                <p className="text-muted">Art, music, writing, and making</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary" className="border-charcoal text-charcoal hover:bg-cream">
                Explore
              </Button>
              <Button
                title="What's on"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="text-brand-red"
              >
                What&apos;s on
              </Button>
            </div>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full object-cover"
            alt="Activities for kids"
          />
        </div>
      </div>
    </section>
  );
}
