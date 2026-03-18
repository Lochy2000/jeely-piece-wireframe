"use client";

import React from "react";

const cards = [
  {
    title: "Play in Your School",
    dotColor: "bg-brand-red",
    description:
      "We bring a full programme of structured and free play to your school, tailored to your children's ages and needs.",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    title: "Play in Your Community",
    dotColor: "bg-coral",
    description:
      "We partner with community centres, housing associations and local groups to run regular sessions in your area.",
    cta: "Talk to us",
    href: "/contact",
  },
  {
    title: "Play at Your Event",
    dotColor: "bg-purple",
    description:
      "Add a Jeely play zone to your community event, fête or celebration. Engaging, safe and brilliantly fun.",
    cta: "Enquire",
    href: "/contact",
  },
];

export function ServicesBuyIn() {
  return (
    <section id="buy-in" className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="mb-3 text-sm font-semibold text-brand-red">Buy in</p>
          <h2 className="mb-4 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
            Jeely play in your space
          </h2>
          <p className="text-muted max-w-2xl">
            Can't come to us? We'll come to you. Our flexible buy-in services bring Jeely-quality
            play to schools, community venues and events across Glasgow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-warm-white rounded-2xl p-8 shadow-sm flex flex-col gap-4"
            >
              <span className={`size-3 rounded-full ${card.dotColor} shrink-0`} aria-hidden="true" />
              <h3 className="font-display font-bold text-xl md:text-2xl">{card.title}</h3>
              <p className="text-muted text-sm flex-1">{card.description}</p>
              <a
                href={card.href}
                className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold hover:underline mt-auto"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
