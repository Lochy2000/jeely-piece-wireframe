"use client";

import React from "react";

const reports = [
  {
    title: "Annual Report 2023–24",
    description: "A full review of our activities, financials and impact over the last year.",
    cta: "Download PDF →",
  },
  {
    title: "Children & Play Research",
    description: "External research that validates our approach to play-based learning.",
    cta: "Read research →",
  },
  {
    title: "Community Impact Data",
    description: "Statistics on reach, outcomes and community benefit across Castlemilk.",
    cta: "View data →",
  },
  {
    title: "Safeguarding & Policies",
    description: "All our operational policies, including our safeguarding framework.",
    cta: "View policies →",
  },
];

export function ImpactReports() {
  return (
    <section className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">Evidence</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            See the evidence
          </h2>
          <p className="text-muted md:text-md">
            We believe in transparency. Our reports, research and data are available for anyone to review.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reports.map((report) => (
            <div key={report.title} className="rounded-2xl bg-warm-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold">{report.title}</h3>
              <p className="text-muted">{report.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
              >
                {report.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
