import { track } from "@vercel/analytics";

type VerticalTarget = "home_services" | "medical_aftercare" | "restaurants";
type CtaSource =
  | "main_router_carousel_cta"
  | "clopen_booking_event"
  | "medical_aftercare_booking_button"
  | "medical_aftercare_booking_event"
  | "home_services_booking_button"
  | "home_services_booking_event";

type CtaPayload = {
  cta_group: "vertical_router" | "booking";
  cta_action: "enter_vertical" | "open_booking";
  cta_target: VerticalTarget;
  source: CtaSource;
};

function safeTrack(eventName: string, payload: CtaPayload) {
  try {
    track(eventName, payload);
  } catch {
    // Never block product UX on analytics failures.
  }
}

export function trackVerticalRouteCta(target: VerticalTarget, source: CtaSource) {
  safeTrack("cta_click", {
    cta_group: "vertical_router",
    cta_action: "enter_vertical",
    cta_target: target,
    source
  });
}

export function trackBookingCta(target: VerticalTarget, source: CtaSource) {
  safeTrack("cta_click", {
    cta_group: "booking",
    cta_action: "open_booking",
    cta_target: target,
    source
  });
}

