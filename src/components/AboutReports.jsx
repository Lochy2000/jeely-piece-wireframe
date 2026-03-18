"use client";

import React from "react";

const documents = [
  {
    dot: "bg-brand-red",
    title: "Annual Reports",
    description: "Our yearly summaries of activities, finances and impact.",
    linkLabel: "View reports →",
    href: "#",
  },
  {
    dot: "bg-coral",
    title: "Research & Stats",
    description: "Data and research that informs and validates our work.",
    linkLabel: "View research →",
    href: "#",
  },
  {
    dot: "bg-purple",
    title: "Safeguarding Policy",
    description: "Our commitment to keeping every child safe in our care.",
    linkLabel: "Read policy →",
    href: "#",
  },
  {
    dot: "bg-green",
    title: "Governance",
    description: "Board structure, trustee information and how we operate.",
    linkLabel: "View governance →",
    href: "#",
  },
];

export function AboutReports() {
  return (
    <section className="bg-cream px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        {/* Section header */}
        <p className="mb-3 text-sm font-semibold text-brand-red">Transparency</p>
        <h2 className="mb-4 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-none">
          Governance &amp; information
        </h2>
        <p className="mb-12 max-w-2xl text-muted">
          We are committed to openness. All our key documents are available below.
        </p>

        {/* Document cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {documents.map((doc) => (
            <div key={doc.title} className="rounded-2xl bg-warm-white p-6 shadow-sm">
              <span
                className={`mb-4 block size-3 rounded-full ${doc.dot}`}
                aria-hidden="true"
              />
              <h3 className="mb-2 font-display font-bold text-xl md:text-2xl">
                {doc.title}
              </h3>
              <p className="mb-4 text-muted">{doc.description}</p>
              <a
                href={doc.href}
                className="text-sm font-semibold text-brand-red hover:underline"
              >
                {doc.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
