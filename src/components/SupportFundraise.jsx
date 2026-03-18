"use client";

import React from "react";

const cards = [
  {
    dot: "bg-coral",
    title: "Appeals & Campaigns",
    description: "Join one of our regular fundraising campaigns and help us hit our targets.",
    cta: "See current campaigns",
  },
  {
    dot: "bg-brand-red",
    title: "Jeely's 50th — Buy a Piece",
    description: "Celebrate our 50th year by buying a symbolic 'piece' (slice of bread) and keeping Jeely going for another 50.",
    cta: "Buy a piece",
  },
  {
    dot: "bg-purple",
    title: "Host Your Own Event",
    description: "Run a bake sale, sponsored walk, quiz night or anything you like. We'll support you every step.",
    cta: "Get a fundraising pack",
  },
  {
    dot: "bg-green",
    title: "Sponsored Challenges",
    description: "Sign up for a challenge event — marathon, cycle, climb — and raise sponsorship for Jeely.",
    cta: "Find a challenge",
  },
];

export function SupportFundraise() {
  return (
    <section id="fundraise" className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-coral md:mb-4">Fundraise</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Raise money for Jeely
          </h2>
          <p className="text-muted md:text-md">
            Get your friends, family or colleagues involved and raise vital funds for Castlemilk's children.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-warm-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className={`size-3 rounded-full ${card.dot}`} />
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <p className="text-muted">{card.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-charcoal hover:underline"
              >
                {card.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
