"use client";

import React from "react";

const sessions = [
  {
    title: "Term-time Play",
    dotColor: "bg-brand-red",
    description:
      "Weekday sessions during the school term. Structured activities, games and free play.",
    times: "Mon–Fri, after school",
    cta: null,
  },
  {
    title: "School Holiday Play",
    dotColor: "bg-coral",
    description:
      "Packed programmes during all school holidays. Sports, crafts, trips and more.",
    times: "All school holidays",
    cta: null,
  },
  {
    title: "Weekend Play",
    dotColor: "bg-purple",
    description:
      "Saturday and Sunday sessions for families. Drop in or book in advance.",
    times: "Sat–Sun, 10am–4pm",
    cta: null,
  },
  {
    title: "Room Hire",
    dotColor: "bg-green",
    description:
      "Our facilities are available for hire for parties, events and community groups.",
    times: null,
    cta: "Enquire about hire",
  },
];

export function ServicesPlayzone() {
  return (
    <section id="playzone" className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="mb-3 text-sm font-semibold text-coral">Ages 5–12</p>
          <h2 className="mb-4 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
            Playzone Play Centre
          </h2>
          <p className="text-muted max-w-2xl">
            Our custom-built Playzone is one of the finest play facilities in
            Glasgow. We run sessions throughout the year for primary-age children.
          </p>
        </div>

        {/* Session cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {sessions.map((session) => (
            <div
              key={session.title}
              className="bg-warm-white rounded-2xl p-6 shadow-sm flex flex-col gap-3"
            >
              <span className={`size-3 rounded-full ${session.dotColor} shrink-0`} aria-hidden="true" />
              <h3 className="font-display font-bold text-xl">{session.title}</h3>
              <p className="text-muted text-sm flex-1">{session.description}</p>
              {session.times && (
                <p className="text-xs font-semibold text-charcoal">{session.times}</p>
              )}
              {session.cta && (
                <a
                  href="/contact"
                  className="mt-1 inline-flex items-center gap-1 text-brand-red text-sm font-semibold hover:underline"
                >
                  {session.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Crisis support callout */}
        <div className="bg-brand-red-light border border-brand-red/20 rounded-2xl p-6">
          <p className="text-charcoal text-sm leading-relaxed">
            <span className="font-bold">Crisis support</span> — If your family is going through a
            difficult time, please speak to one of our team. We offer additional support and
            signposting to families who need it. All conversations are confidential.
          </p>
        </div>
      </div>
    </section>
  );
}
