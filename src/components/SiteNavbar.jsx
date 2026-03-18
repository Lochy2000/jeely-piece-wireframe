"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => setIsDropdownOpen((prev) => !prev);
  const openOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(true);
  const closeOnDesktopDropdownMenu = () => !isMobile && setIsDropdownOpen(false);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen ? ["open", "rotatePhase"] : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

const navLinkClass =
  "block py-3 text-md first:pt-7 hover:text-brand-red transition-colors lg:px-4 lg:py-6 lg:text-base first:lg:pt-6";

export function SiteNavbar() {
  const useActive = useRelume();
  return (
    <section className="relative z-10 flex w-full items-center justify-between border-b border-sand bg-warm-white lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          {/* Logo + hamburger */}
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="/home">
              <img src="/jelly-logo.png" alt="Jeely Piece Club logo" className="h-10 w-auto" />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
                }}
              />
            </button>
          </div>

          {/* Nav links */}
          <motion.div
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={useActive.animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a href="/about" className={navLinkClass}>About Us</a>

            <a href="/our-services" className={navLinkClass}>Our Services</a>

            <a href="/whats-on" className={navLinkClass}>What&apos;s On</a>

            {/* Support Us dropdown */}
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="flex w-full items-center justify-between gap-x-2 py-3 text-md lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Support Us</span>
                <motion.span
                  variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
                  animate={useActive.animateDropdownMenuIcon}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <motion.div
                variants={{
                  open: { visibility: "visible", opacity: 1, height: "var(--height-open, auto)" },
                  close: { visibility: "hidden", opacity: "0", height: "var(--height-close, 0)" },
                }}
                initial="close"
                exit="close"
                animate={useActive.animateDropdownMenu}
                transition={{ duration: 0.3 }}
                className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-warm-white lg:absolute lg:w-[100vw] lg:border-b lg:border-sand lg:px-[5%] lg:[--height-close:auto]"
              >
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-6 py-4 md:grid-cols-2 md:py-8">
                  {/* Column 1 — Ways to support */}
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                      Ways to support
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        <a href="/support-us/donate" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Donate
                          <p className="text-sm font-normal text-muted">Make a one-off or regular gift</p>
                        </a>
                      </li>
                      <li>
                        <a href="/support-us/fundraise" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Fundraise
                          <p className="text-sm font-normal text-muted">Run an appeal, campaign or event</p>
                        </a>
                      </li>
                      <li>
                        <a href="/support-us/corporate" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Corporate support
                          <p className="text-sm font-normal text-muted">Partner with us or become a charity of the year</p>
                        </a>
                      </li>
                      <li>
                        <a href="/support-us/volunteer" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Volunteer your skills
                          <p className="text-sm font-normal text-muted">Offer your expertise to help us grow</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Column 2 — For funders */}
                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                      For funders &amp; investors
                    </h4>
                    <ul className="space-y-1">
                      <li>
                        <a href="/our-impact" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Our Impact
                          <p className="text-sm font-normal text-muted">Outcomes, data and returns on your investment</p>
                        </a>
                      </li>
                      <li>
                        <a href="/about/reports" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Annual Reports
                          <p className="text-sm font-normal text-muted">Financial and activity reports</p>
                        </a>
                      </li>
                      <li>
                        <a href="/about/governance" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Governance
                          <p className="text-sm font-normal text-muted">How we're run and who leads us</p>
                        </a>
                      </li>
                      <li>
                        <a href="/safeguarding" className="block py-2 font-semibold hover:text-brand-red transition-colors">
                          Safeguarding
                          <p className="text-sm font-normal text-muted">Our commitment to child safety</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <a href="/work-with-us" className={navLinkClass}>Work With Us</a>

            <a
              href="/50th"
              className="block py-3 text-md font-semibold text-coral hover:text-coral/80 transition-colors lg:px-4 lg:py-6 lg:text-base"
            >
              Jeely&apos;s 50th
            </a>

            {/* Mobile CTAs */}
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              <Button className="w-full bg-brand-red text-white border-brand-red hover:bg-red-700 rounded-full" title="Donate" size="sm">
                Donate
              </Button>
              <Button className="w-full border-charcoal text-charcoal hover:bg-sand rounded-full" title="Book" variant="secondary" size="sm">
                Book
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:gap-4">
          <Button title="Donate" size="sm" className="bg-brand-red text-white border-brand-red hover:bg-red-700 rounded-full">
            Donate
          </Button>
          <Button title="Book" variant="secondary" size="sm" className="border-charcoal text-charcoal hover:bg-sand rounded-full">
            Book
          </Button>
        </div>
      </div>
    </section>
  );
}
