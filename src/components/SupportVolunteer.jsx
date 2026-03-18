"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

const skills = [
  {
    title: "Web & Digital",
    description: "Help us maintain and improve our digital presence",
  },
  {
    title: "Marketing & PR",
    description: "Tell the Jeely story to wider audiences",
  },
  {
    title: "Legal & Governance",
    description: "Support our board with compliance and governance",
  },
  {
    title: "Finance & Accounting",
    description: "Help us manage our books and financial planning",
  },
  {
    title: "Graphic Design",
    description: "Create materials, posters and social content",
  },
  {
    title: "Photography & Video",
    description: "Capture our work and tell it visually",
  },
];

export function SupportVolunteer() {
  return (
    <section className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm font-semibold text-green md:mb-4">Volunteer</p>
          <h2 className="mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Share your skills
          </h2>
          <p className="text-muted md:text-md">
            We're always looking for skilled volunteers who can offer their expertise to help Jeely grow and improve.
          </p>
        </div>

        {/* Skill wishlist grid */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="rounded-xl bg-green-light p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="size-3 rounded-full bg-green" />
                <h3 className="font-bold">{skill.title}</h3>
              </div>
              <p className="text-sm text-muted">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="rounded-2xl bg-charcoal p-8 text-center text-white">
          <h3 className="mb-3 font-display text-3xl font-bold text-warm-white">
            Ready to get involved?
          </h3>
          <p className="mb-6 text-white/70">
            Tell us about your skills and how you'd like to help. We'll match you with an opportunity that fits.
          </p>
          <Button
            title="Get in touch"
            className="bg-brand-red text-white border-brand-red hover:bg-red-700"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
