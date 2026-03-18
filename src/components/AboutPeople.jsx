"use client";

import React from "react";

const PLACEHOLDER = "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";

function PersonCard({ name, role }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-cream shadow-sm">
      <img
        src={PLACEHOLDER}
        alt={name}
        className="aspect-square w-full object-cover"
      />
      <div className="p-4">
        <p className="font-semibold text-charcoal leading-snug">{name}</p>
        {role && <p className="mt-0.5 text-sm text-muted">{role}</p>}
      </div>
    </div>
  );
}

const boardMembers = [
  { name: "Sarah Mitchell", role: "Chair" },
  { name: "David Rae", role: "Treasurer" },
  { name: "Fiona Stewart", role: "Trustee" },
  { name: "James O'Brien", role: "Trustee" },
];

const smtMembers = [
  { name: "Elaine McKenna", role: "CEO" },
  { name: "Michelle Cleland", role: "Deputy" },
  { name: "Karen Hughes", role: "Operations" },
];

export function AboutPeople() {
  return (
    <section className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Section header */}
        <p className="mb-3 text-sm font-semibold text-brand-red">Our team</p>
        <h2 className="mb-4 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
          The people behind the Piece
        </h2>
        <p className="mb-16 max-w-2xl text-muted">
          From our board of trustees to our delivery teams, Jeely is run by people who care deeply about Castlemilk.
        </p>

        {/* Board of Trustees */}
        <div className="mb-14">
          <h3 className="mb-6 font-display font-bold text-2xl md:text-3xl">
            Board of Trustees
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {boardMembers.map((person) => (
              <PersonCard key={person.name} name={person.name} role={person.role} />
            ))}
          </div>
        </div>

        {/* Senior Management */}
        <div className="mb-14">
          <h3 className="mb-6 font-display font-bold text-2xl md:text-3xl">
            Senior Management
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {smtMembers.map((person) => (
              <PersonCard key={person.name} name={person.name} role={person.role} />
            ))}
          </div>
        </div>

        {/* Delivery Teams */}
        <div>
          <h3 className="mb-4 font-display font-bold text-2xl md:text-3xl">
            Delivery Teams
          </h3>
          <p className="border-l-4 border-coral pl-4 text-muted max-w-2xl">
            Our nursery, playzone and community teams — the people you'll meet at Jeely every day.
          </p>
        </div>
      </div>
    </section>
  );
}
