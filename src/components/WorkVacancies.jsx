"use client";

import React from "react";

const jobs = [
  {
    badge: "Childcare",
    role: "Play Worker",
    meta: "Playzone team · Full time",
    description:
      "Join our busy Playzone team delivering high-quality play sessions for 5–12 year olds.",
  },
  {
    badge: "Early Years",
    role: "Early Years Practitioner",
    meta: "Nursery team · Part time",
    description:
      "Support our nursery children through play-based learning in a nurturing environment.",
  },
  {
    badge: "Community",
    role: "Community Outreach Worker",
    meta: "Pop-up team · Part time",
    description:
      "Deliver our pop-up play clubs across Castlemilk and surrounding areas.",
  },
];

export function WorkVacancies() {
  return (
    <section id="vacancies" className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-coral md:mb-4">Join us</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:text-7xl lg:text-8xl">
            Current vacancies
          </h2>
          <p className="max-w-xl text-muted md:text-md">
            We recruit great people who share our values. Take a look at what we currently have
            available.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {jobs.map((job) => (
            <div
              key={job.role}
              className="flex flex-col rounded-2xl bg-warm-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div className="mb-4 md:mb-0">
                <span className="mb-2 inline-block rounded-full bg-coral-light px-3 py-1 text-xs font-semibold text-coral">
                  {job.badge}
                </span>
                <h3 className="font-display text-xl font-bold">{job.role}</h3>
                <p className="mt-1 text-sm text-muted">{job.meta}</p>
                <p className="mt-2 text-sm text-muted">{job.description}</p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="inline-block rounded-lg border border-brand-red px-5 py-2 text-sm text-brand-red transition-colors hover:bg-brand-red-light"
                >
                  Apply now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Speculative application note */}
        <div className="mt-4 rounded-2xl bg-cream p-6">
          <p className="text-muted">
            Don&apos;t see the right role? Send us a speculative application — we&apos;re always
            interested in hearing from people who share our values.
          </p>
          <a href="mailto:info@jeelypiececlub.co.uk" className="mt-3 inline-block font-semibold text-brand-red hover:underline">
            Send a CV →
          </a>
        </div>
      </div>
    </section>
  );
}
