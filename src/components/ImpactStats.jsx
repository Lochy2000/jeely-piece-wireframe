"use client";

import React from "react";
import { StatsGrid } from "@/components/StatsGrid";

export function ImpactStats() {
  return (
    <StatsGrid
      eyebrow="Our reach"
      title="Making a real difference"
      subtitle="Every number represents a child, a family, a community. Here's what we've achieved."
      stats={[
        { value: "27,000+", label: "Interactions each year", color: "text-brand-red" },
        { value: "2", label: "Dedicated centres", color: "text-coral" },
        { value: "50", label: "Years of service", color: "text-purple" },
        { value: "5+", label: "Community locations", color: "text-green" },
      ]}
    />
  );
}
