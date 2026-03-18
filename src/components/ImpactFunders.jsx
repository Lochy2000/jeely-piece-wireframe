"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

const benefits = [
  {
    heading: "Proven track record",
    body: "50 years of continuous, measurable community impact.",
  },
  {
    heading: "Transparent reporting",
    body: "Detailed annual reports, outcome data and funder acknowledgement.",
  },
  {
    heading: "Sustainable model",
    body: "A lean, community-run charity built for the long term.",
  },
];

export function ImpactFunders() {
  return (
    <section className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-purple md:mb-4">Invest in Jeely</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Partner with us for real impact
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">Why fund Jeely?</h3>
            <p className="mb-8 border-l-4 border-coral pl-4 text-muted">
              Every pound invested in Jeely Piece Club reaches directly into the Castlemilk community. No expensive overheads. No middlemen. Just children playing, learning and growing.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.heading} className="flex gap-3">
                  <span className="mt-1 size-3 flex-shrink-0 rounded-full bg-purple" />
                  <div>
                    <p className="font-bold">{benefit.heading}</p>
                    <p className="text-muted">{benefit.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                title="Get in touch about funding"
                className="bg-brand-red text-white border-brand-red hover:bg-red-700"
              >
                Get in touch about funding →
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="rounded-2xl bg-purple-light p-8">
            <h3 className="mb-3 text-2xl font-bold">Current funders &amp; partners</h3>
            <p className="mb-6 text-muted">
              We are grateful to the organisations and individuals who make our work possible.
            </p>

            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-12 w-full items-center justify-center rounded-lg bg-sand text-sm text-muted"
                >
                  Funder logo
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-6 inline-block font-semibold text-purple hover:underline"
            >
              Become a funder →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
