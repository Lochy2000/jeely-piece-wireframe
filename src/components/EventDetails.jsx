"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

const eventMeta = [
  { label: "Date", value: "Every Saturday" },
  { label: "Time", value: "10:00am – 3:00pm" },
  { label: "Location", value: "Jeely Playzone Playcentre" },
  { label: "Age group", value: "5–12 years" },
  { label: "Cost", value: "Free / low cost" },
  { label: "Booking", value: "Recommended" },
];

export function EventDetails() {
  return (
    <section className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-display text-3xl font-bold">About this event</h2>

            <p className="text-muted mb-4">
              Our Summer Holiday Club is one of the highlights of the Jeely calendar. Every
              Saturday during the summer holidays, we open the Playzone for a full day of
              structured and free play.
            </p>
            <p className="text-muted mb-4">
              Children can enjoy a mix of sports, arts and crafts, outdoor games, and quiet
              activities. There&apos;s something for every child — whether they&apos;re
              high-energy or prefer a more relaxed pace.
            </p>

            {/* What to bring */}
            <h3 className="mt-8 mb-4 font-display text-xl font-bold">What to bring</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted">
              <li>Comfortable clothes you don&apos;t mind getting messy</li>
              <li>A packed lunch and water bottle</li>
              <li>Any medication your child needs (please inform staff)</li>
              <li>A good attitude and willingness to have fun!</li>
            </ul>

            {/* Accessibility */}
            <h3 className="mt-8 mb-3 font-display text-xl font-bold">Accessibility</h3>
            <p className="text-muted">
              Our Playzone is fully wheelchair accessible. Please contact us if your child has
              specific support needs and we will do our best to accommodate them.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-cream p-6">
              <h3 className="mb-4 text-lg font-bold">Event details</h3>
              <div className="flex flex-col">
                {eventMeta.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex justify-between py-3 text-sm ${
                      i < eventMeta.length - 1 ? "border-b border-sand" : ""
                    }`}
                  >
                    <span className="font-semibold text-charcoal">{item.label}</span>
                    <span className="text-muted text-right">{item.value}</span>
                  </div>
                ))}
              </div>
              <Button
                title="Book a place"
                className="mt-6 w-full bg-brand-red text-white border-brand-red hover:bg-red-700"
              >
                Book a place
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
