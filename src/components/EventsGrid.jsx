"use client";

import React, { useState } from "react";

const events = [
  {
    category: "Activity",
    day: "Saturdays",
    title: "Summer Holiday Club",
    description: "Fun games, crafts and outdoor time for all ages",
  },
  {
    category: "Workshop",
    day: "Tuesdays",
    title: "Creative Writing for Young Writers",
    description: "Express yourself through stories and poetry",
  },
  {
    category: "Sports",
    day: "Wednesdays",
    title: "Football & Basketball Training",
    description: "Build skills and make new friends on the pitch",
  },
  {
    category: "Activity",
    day: "Mondays",
    title: "Arts & Crafts Morning",
    description: "Get creative with paints, clay and more",
  },
  {
    category: "Workshop",
    day: "Thursdays",
    title: "Drama and Storytelling",
    description: "Build confidence through performance and play",
  },
  {
    category: "Sports",
    day: "Fridays",
    title: "Gymnastics & Movement",
    description: "Tumbling, stretching and team challenges",
  },
];

const badgeStyles = {
  Activity: "bg-coral text-white",
  Workshop: "bg-purple text-white",
  Sports: "bg-green text-charcoal",
};

const filters = ["All", "Activity", "Workshop", "Sports"];

export function EventsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <section id="events" className="bg-warm-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? "bg-charcoal text-white"
                  : "bg-sand text-charcoal hover:bg-charcoal/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded-2xl border border-sand bg-warm-white shadow-sm"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt={event.title}
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="px-5 py-6 md:p-6">
                <div className="flex items-center">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${badgeStyles[event.category]}`}
                  >
                    {event.category}
                  </span>
                  <span className="ml-3 text-sm font-semibold text-muted">
                    {event.day}
                  </span>
                </div>
                <h3 className="mb-1 mt-2 text-xl font-bold md:text-2xl">
                  {event.title}
                </h3>
                <p className="text-muted">{event.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
                >
                  Book now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
