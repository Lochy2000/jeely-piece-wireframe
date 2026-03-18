"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

const amounts = ["£5", "£10", "£25", "£50"];

export function SupportDonate() {
  return (
    <section id="donate" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">Donate</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Give what you can
          </h2>
          <p className="text-muted md:text-md">
            Every donation — however small — goes directly to supporting children and families in Castlemilk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1 — One-off donation */}
          <div className="rounded-2xl bg-brand-red-light p-8">
            <h3 className="mb-3 text-2xl font-bold">One-off gift</h3>
            <p className="mb-6 text-muted">
              Make a single donation of any amount. Quick, easy and 100% goes to our programmes.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="rounded-full border border-charcoal/20 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-brand-red-light"
                >
                  {amount}
                </button>
              ))}
            </div>
            <Button
              title="Donate now"
              className="bg-brand-red text-white border-brand-red hover:bg-red-700"
            >
              Donate now
            </Button>
          </div>

          {/* Card 2 — Regular giving */}
          <div className="rounded-2xl bg-coral-light p-8">
            <h3 className="mb-3 text-2xl font-bold">Regular giving</h3>
            <p className="mb-6 text-muted">
              Set up a monthly or annual gift and help us plan for the future with confidence.
            </p>
            <ul className="mb-6 space-y-2">
              {["Cancel at any time", "Gift Aid eligible", "Monthly impact updates"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <span className="text-coral">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              title="Set up a regular gift"
              className="bg-coral text-white border-coral hover:opacity-90"
            >
              Set up a regular gift
            </Button>
          </div>
        </div>

        {/* Wishlist callout */}
        <div className="mt-8 rounded-2xl bg-sand p-6">
          <p className="text-charcoal">
            <strong>Wishlist</strong> — Sometimes we need specific items more than cash. View our current wishlist and donate goods directly.
          </p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
          >
            View our wishlist →
          </a>
        </div>
      </div>
    </section>
  );
}
