"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function AudiencePaths() {
  return (
    <section id="relume" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 text-sm font-semibold text-brand-red md:mb-4">Find your way</p>
            <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What brings you here
            </h2>
            <p className="text-muted md:text-md">Choose your path below</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] w-full object-cover"
              alt="I'm a parent"
            />
            <div className="flex flex-col flex-1 bg-brand-red-light p-8">
              <h3 className="mb-2 font-display text-2xl font-bold text-charcoal md:text-3xl">
                I&apos;m a parent
              </h3>
              <p className="mb-4 text-base text-muted">
                Looking for activities and clubs for your child
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1 bg-white border border-charcoal/25 text-charcoal text-sm hover:border-charcoal rounded-lg px-4 py-2 transition-colors self-start"
              >
                Explore <RxChevronRight />
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] w-full object-cover"
              alt="I'm a supporter"
            />
            <div className="flex flex-col flex-1 bg-coral-light p-8">
              <h3 className="mb-2 font-display text-2xl font-bold text-charcoal md:text-3xl">
                I&apos;m a supporter
              </h3>
              <p className="mb-4 text-base text-muted">
                Want to help us make a difference in Castlemilk
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1 bg-white border border-charcoal/25 text-charcoal text-sm hover:border-charcoal rounded-lg px-4 py-2 transition-colors self-start"
              >
                Support <RxChevronRight />
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] w-full object-cover"
              alt="I want to work here"
            />
            <div className="flex flex-col flex-1 bg-green-light p-8">
              <h3 className="mb-2 font-display text-2xl font-bold text-charcoal md:text-3xl">
                I want to work here
              </h3>
              <p className="mb-4 text-base text-muted">
                Interested in joining our team and our mission
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-1 bg-white border border-charcoal/25 text-charcoal text-sm hover:border-charcoal rounded-lg px-4 py-2 transition-colors self-start"
              >
                Apply <RxChevronRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
