"use client";

import React from "react";

const tagClass =
  "bg-white text-charcoal text-xs font-semibold px-3 py-1 rounded-full border border-charcoal/10 inline-block mr-2 mb-2";

export function ServicesSchools() {
  return (
    <section id="schools-play" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="mb-3 text-sm font-semibold text-coral">Schools</p>
          <h2 className="mb-4 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
            Schools Play
          </h2>
          <p className="text-muted max-w-2xl">
            We partner with primary schools across Glasgow and the surrounding local authority areas
            to bring quality play opportunities directly into schools.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1 — Active Play */}
          <div className="bg-coral-light rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="font-display font-bold text-2xl md:text-3xl">
              Active Play in Schools
            </h3>
            <p className="text-muted">
              We deliver structured active play programmes within school grounds during lunch breaks
              and PE sessions. Designed to get children moving, collaborating and having fun.
            </p>
            <div>
              <span className={tagClass}>Curriculum-linked</span>
              <span className={tagClass}>All ages</span>
              <span className={tagClass}>Bookable</span>
            </div>
            <div className="mt-auto">
              <a
                href="/contact"
                className="border border-coral text-coral rounded-lg px-4 py-2 text-sm hover:bg-coral-light/60 transition-colors inline-block font-semibold"
              >
                Book for your school →
              </a>
            </div>
          </div>

          {/* Card 2 — Pop-up Play @ School */}
          <div className="bg-brand-red-light rounded-2xl p-8 flex flex-col gap-5">
            <h3 className="font-display font-bold text-2xl md:text-3xl">
              Pop-up Play at Your School
            </h3>
            <p className="text-muted">
              We bring the full Jeely pop-up experience to your school — games, creative activities
              and outdoor play. A full session delivered by our trained team.
            </p>
            <div>
              <span className={tagClass}>Full-day or half-day</span>
              <span className={tagClass}>Flexible scheduling</span>
              <span className={tagClass}>All primary ages</span>
            </div>
            <div className="mt-auto">
              <a
                href="/contact"
                className="border border-brand-red text-brand-red rounded-lg px-4 py-2 text-sm hover:bg-brand-red-light/60 transition-colors inline-block font-semibold"
              >
                Enquire now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
