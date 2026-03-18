"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

const donationPills = [
  "£5 — a wee piece",
  "£10 — a piece for two",
  "£25 — a Jeely feast",
  "£50 — feed the whole street",
];

const impactRows = [
  { amount: "£5", text: "Covers the cost of craft materials for a session" },
  { amount: "£10", text: "Funds one child's play session" },
  { amount: "£25", text: "Supports a full morning of play for a group" },
  { amount: "£50", text: "Helps run a full pop-up play club session" },
];

export function FiftiethBuyAPiece() {
  return (
    <section className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">Fundraiser</p>
          <h2 className="font-display text-5xl font-bold md:text-7xl lg:text-8xl">
            Buy a piece
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left */}
          <div>
            <p className="mb-6 border-l-4 border-coral pl-4 text-muted md:text-md">
              A &lsquo;piece&rsquo; is Glasgow slang for a sandwich. The Jeely Piece Song — written
              about the high-rise flats of Castlemilk — inspired our name. Now, to celebrate 50
              years, we&apos;re inviting you to &lsquo;buy a piece&rsquo; and help us keep going.
            </p>

            <p className="mb-6 text-muted md:text-md">
              Every contribution goes directly into our programmes for children and families in
              Castlemilk. Buy a piece in honour of a child, a family, or just because you care.
            </p>

            {/* Donation pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {donationPills.map((pill) => (
                <button
                  key={pill}
                  className="cursor-pointer rounded-full border border-charcoal/20 bg-white px-4 py-2 text-sm font-semibold transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  {pill}
                </button>
              ))}
            </div>

            <Button
              title="Buy your piece"
              className="mt-6 bg-brand-red text-white border-brand-red hover:bg-red-700"
            >
              Buy your piece
            </Button>
          </div>

          {/* Right: impact card */}
          <div className="rounded-2xl bg-warm-white p-8">
            <h3 className="mb-6 font-display text-xl font-bold">What your piece buys</h3>
            <div className="flex flex-col gap-4">
              {impactRows.map((row) => (
                <div key={row.amount} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-red" />
                  <p className="text-muted text-sm">
                    <span className="font-bold text-charcoal">{row.amount}</span> — {row.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
