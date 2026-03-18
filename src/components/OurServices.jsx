"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const services = [
  {
    eyebrow: "Ages 0–5",
    title: "Nursery & Stay and Play",
    description:
      "Our early years nursery and Stay & Play sessions give little ones a warm, nurturing place to learn through play.",
    cta: "Find out more",
    href: "/our-services",
    bg: "bg-brand-red-light",
    accent: "bg-brand-red",
  },
  {
    eyebrow: "Ages 0–5",
    title: "Playzone for Under 5s",
    description:
      "Drop in to our custom-built Playzone — a safe, stimulating space for toddlers and their parents or carers.",
    cta: "Book a session",
    href: "/our-services",
    bg: "bg-coral-light",
    accent: "bg-coral",
  },
  {
    eyebrow: "Ages 5–12",
    title: "Playzone Play Centre",
    description:
      "Term-time, holiday and weekend play sessions for primary-age children. Games, activities, and new friends.",
    cta: "Book a session",
    href: "/our-services",
    bg: "bg-purple-light",
    accent: "bg-purple",
  },
  {
    eyebrow: "Ages 5–12",
    title: "Pop-up Play Clubs",
    description:
      "We bring play to Tormusk, Kingspark, Dougrie, Birgidale and Toryglen — right in the heart of the community.",
    cta: "See locations",
    href: "/our-services",
    bg: "bg-green-light",
    accent: "bg-green",
  },
  {
    eyebrow: "Schools",
    title: "Schools Play",
    description:
      "Active play, pop-up sessions and school holiday programmes delivered in and around primary schools.",
    cta: "Find out more",
    href: "/our-services",
    bg: "bg-coral-light",
    accent: "bg-coral",
  },
  {
    eyebrow: "Buy in",
    title: "Jeely Play in Your Space",
    description:
      "We bring Jeely play to your school, community venue or event. Flexible sessions tailored to your needs.",
    cta: "Get in touch",
    href: "/our-services",
    bg: "bg-brand-red-light",
    accent: "bg-brand-red",
  },
];

export function OurServices() {
  return (
    <section className="bg-sand px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 text-sm font-semibold text-coral md:mb-4">
              Our Services
            </p>
            <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Something for every child
            </h2>
            <p className="text-muted md:text-md">
              From newborns to age 12, we have activities and programmes across
              Castlemilk and beyond.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`flex flex-col rounded-2xl ${service.bg} p-8`}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${service.accent}`} />
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {service.eyebrow}
                </p>
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-charcoal">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-muted">{service.description}</p>
              <a
                href={service.href}
                className="inline-flex items-center gap-1 self-start rounded-lg border border-charcoal/25 bg-white px-4 py-2 text-sm text-charcoal transition-colors hover:border-charcoal"
              >
                {service.cta} <RxChevronRight />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button
            title="View all services"
            variant="secondary"
            className="border-brand-red text-brand-red hover:bg-brand-red-light"
          >
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
}
