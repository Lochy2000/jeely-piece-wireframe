"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function DonateCta() {
  return (
    <section id="relume" className="bg-brand-red px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 font-display text-5xl font-bold text-warm-white md:mb-6 md:text-7xl lg:text-8xl">
          Help us keep going
        </h2>
        <p className="text-white/80 md:text-md">
          Every donation keeps our doors open and our programmes running for the
          children who need us most.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Donate" className="bg-warm-white text-brand-red border-warm-white hover:bg-brand-red-light">Donate</Button>
          <Button title="Fundraise" variant="secondary-alt" className="border-white/60 text-warm-white hover:bg-white/10">
            Fundraise
          </Button>
        </div>
      </div>
    </section>
  );
}
