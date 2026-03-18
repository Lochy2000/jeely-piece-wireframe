"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

const partnerships = [
  {
    heading: "Charity of the Year",
    body: "Nominate Jeely as your charity of the year and engage your team in fundraising all year round.",
  },
  {
    heading: "Employee Volunteering",
    body: "Send your team to volunteer at our centres — a hands-on day that makes a real difference.",
  },
  {
    heading: "Pro Bono Support",
    body: "Share your expertise — legal, marketing, digital, finance. We value skills as much as donations.",
  },
];

const stats = [
  { value: "27,000+", label: "children reached per year" },
  { value: "50", label: "years serving Castlemilk" },
  { value: "100%", label: "grassroots, community-run" },
];

export function SupportCorporate() {
  return (
    <section className="bg-cream px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-purple md:mb-4">Corporates</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Partner with Jeely
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="mb-8 border-l-4 border-coral pl-4 text-muted">
              Partnering with Jeely Piece Club gives your organisation a direct, meaningful connection to one of Glasgow's most trusted grassroots charities.
            </p>

            <div className="space-y-6">
              {partnerships.map((p) => (
                <div key={p.heading} className="flex gap-3">
                  <span className="mt-1 size-3 flex-shrink-0 rounded-full bg-purple" />
                  <div>
                    <p className="font-bold">{p.heading}</p>
                    <p className="text-muted">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                title="Talk to us about partnership"
                className="bg-brand-red text-white border-brand-red hover:bg-red-700"
              >
                Talk to us about partnership
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="rounded-2xl bg-purple-light p-8">
            <h3 className="mb-6 text-2xl font-bold">The return on your investment</h3>

            <div className="space-y-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-extrabold text-purple">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-muted">
              Your support will be acknowledged in our annual report, on our website and across our social media channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
