"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function WorkJeelyExperience() {
  const values = [
    {
      heading: "Real impact",
      body: "See the difference you make every single day, in the faces of the children you work with.",
    },
    {
      heading: "Great team",
      body: "Join a close-knit, passionate team who support each other and enjoy what they do.",
    },
    {
      heading: "Training & development",
      body: "We invest in our people. Funded training, qualifications and career development available.",
    },
    {
      heading: "Community roots",
      body: "We're not a corporation. We're a grassroots charity, shaped by the community we serve.",
    },
  ];

  return (
    <section id="experience" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: prose + values */}
          <div>
            <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">Why Jeely?</p>
            <h2 className="mb-6 font-display text-5xl font-bold md:text-7xl lg:text-8xl">
              More than just a job
            </h2>

            <p className="mb-8 border-l-4 border-coral pl-4 text-muted md:text-md">
              Jeely Piece Club is one of Castlemilk's most loved institutions. When you join our
              team, you become part of something genuinely special — a community that cares, a
              mission that matters.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {values.map((v) => (
                <div key={v.heading} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-coral" />
                  <div>
                    <p className="font-display font-bold text-base">{v.heading}</p>
                    <p className="mt-1 text-muted text-sm">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              title="See our vacancies"
              className="bg-brand-red text-white border-brand-red hover:bg-red-700"
              onClick={() => {
                document.getElementById("vacancies")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See our vacancies
            </Button>
          </div>

          {/* Right: image */}
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Working at Jeely Piece Club"
              className="w-full rounded-2xl object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
