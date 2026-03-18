"use client";

import React from "react";

export function EventBooking() {
  return (
    <section className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">Book</p>
          <h2 className="mb-4 font-display text-5xl font-bold md:text-7xl lg:text-8xl">
            Reserve your spot
          </h2>
          <p className="mx-auto max-w-md text-muted md:text-md">
            Booking is free and takes less than a minute. We&apos;ll send you a confirmation with
            everything you need to know.
          </p>
        </div>

        {/* Booking card */}
        <div className="max-w-lg mx-auto rounded-2xl bg-warm-white p-8 shadow-sm">
          {/* Event summary */}
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl bg-cream px-4 py-3">
            <span className="rounded-full bg-coral px-3 py-1 text-xs font-semibold text-white">
              Activity
            </span>
            <span className="font-display font-bold text-sm">Summer Holiday Club</span>
            <span className="text-xs text-muted">Saturdays · Ages 5–12</span>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-charcoal">
                Child&apos;s name
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-lg border border-sand bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-charcoal">
                Parent/carer name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-sand bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-charcoal">
                Contact number
              </label>
              <input
                type="tel"
                placeholder="07xxx xxxxxx"
                className="w-full rounded-lg border border-sand bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-red"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-charcoal">
                Number of children
              </label>
              <div className="w-full rounded-lg border border-sand bg-white px-4 py-2.5 text-sm text-muted">
                1 child
              </div>
            </div>
          </div>

          {/* Submit */}
          <button className="mt-4 w-full rounded-lg bg-brand-red py-3 text-base font-semibold text-white transition-colors hover:bg-red-700">
            Book now
          </button>

          <p className="mt-3 text-center text-xs text-muted">
            By booking you agree to our terms. We&apos;ll never share your details.
          </p>
        </div>
      </div>
    </section>
  );
}
