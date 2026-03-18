"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function EventsPreview() {
  return (
    <section id="relume" className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold text-coral md:mb-4">Events</p>
            <h2 className="rb-5 mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What&apos;s on this week
            </h2>
            <p className="text-muted md:text-md">See what we have planned</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-center justify-start rounded-2xl border border-sand bg-warm-white shadow-sm overflow-hidden">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Summer holiday club"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-coral px-3 py-1 text-sm font-semibold text-white rounded-full">
                  Activity
                </p>
                <p className="inline text-sm font-semibold">Saturdays</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Summer holiday club kicks off
                </h2>
              </a>
              <p>Fun games, crafts, and outdoor time for all ages</p>
              <Button
                title="Book now"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2 text-brand-red font-semibold"
              >
                Book now
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start rounded-2xl border border-sand bg-warm-white shadow-sm overflow-hidden">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Creative writing sessions"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-purple px-3 py-1 text-sm font-semibold text-white rounded-full">
                  Workshop
                </p>
                <p className="inline text-sm font-semibold">Tuesdays</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Creative writing sessions for young writers
                </h2>
              </a>
              <p>Express yourself through stories and poetry</p>
              <Button
                title="Book now"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2 text-brand-red font-semibold"
              >
                Book now
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start rounded-2xl border border-sand bg-warm-white shadow-sm overflow-hidden">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Football and basketball training"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-green px-3 py-1 text-sm font-semibold text-charcoal rounded-full">
                  Sports
                </p>
                <p className="inline text-sm font-semibold">Wednesdays</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Football and basketball training
                </h2>
              </a>
              <p>Build skills and make new friends on the pitch</p>
              <Button
                title="Book now"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2 text-brand-red font-semibold"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 border-brand-red text-brand-red hover:bg-brand-red-light md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
