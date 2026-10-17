"use client";

import type { MouseEvent, ReactNode } from "react";
import { trackBookingCta } from "@/lib/analytics";
import { buildRakeBookingHref, type RakeBookingPlacement } from "@/lib/rake-booking";

type Props = {
  placement: RakeBookingPlacement;
  className?: string;
  children: ReactNode;
};

export function RakeBookingLink({ placement, className, children }: Props) {
  // The server renders a clean link; the visitor's own UTM tags are attached at click time,
  // so the booking keeps its source without any client-side state.
  function attachSource(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = buildRakeBookingHref(window.location.search, placement);
    if (event.type === "click") trackBookingCta("rake", `rake_booking_${placement}`);
  }

  return (
    <a
      href={buildRakeBookingHref("", placement)}
      onClick={attachSource}
      onAuxClick={attachSource}
      className={className}
    >
      {children}
    </a>
  );
}
