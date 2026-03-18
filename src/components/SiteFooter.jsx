"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function SiteFooter() {
  const formState = useForm();
  return (
    <footer id="relume" className="bg-charcoal px-[5%] py-12 text-warm-white md:py-18 lg:py-20">
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="rb-6 mb-6 lg:mb-0">
            <h1 className="font-semibold text-warm-white md:text-md">Stay in the loop</h1>
            <p className="text-white/60">Get updates on activities and news</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={formState.email}
                onChange={formState.handleSetEmail}
                className="bg-white/10 border-white/20 text-warm-white placeholder:text-white/40"
              />
              <Button title="Subscribe" size="sm" className="bg-brand-red text-white border-brand-red hover:bg-red-700">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-white/40">We respect your privacy and keep it safe</p>
          </div>
        </div>
        <div className="py-12 md:py-18 lg:py-20">
          <div className="h-px w-full bg-white/20" />
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Quick links</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="/whats-on" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  What's On
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/our-impact" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Our Impact
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="/about" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  About Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Support us</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Donate
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Fundraise
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Partner
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Volunteer
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Work here
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Information</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Annual reports
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Safeguarding
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Governance
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Privacy policy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Get in touch</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Glasgow office
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Email us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Call us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Visit us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Follow us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Social media</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Facebook page
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Instagram account
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Twitter updates
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  LinkedIn profile
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  YouTube channel
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">More</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Careers page
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  News stories
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Event calendar
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Photo gallery
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3 text-white/70 hover:text-brand-red transition-colors">
                  Contact form
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col items-start pb-4 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:pb-0 md:pt-8">
          <a href="/" className="mb-6 sm:mb-0">
            <img
              src="/jelly-logo.png"
              alt="Jeely Piece Club logo"
              className="h-10 w-auto"
            />
          </a>
          <p className="text-sm text-white/50">&copy; 2024 Jeely Piece Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
