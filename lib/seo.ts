export const siteConfig = {
  name: "2Stack",
  url: "https://2-stack.com",
  description:
    "2Stack builds practical operating systems for restaurant, landscaping, contractor, and home-service owner-operators.",
  email: "team@2stackops.com"
} as const;

export const verticalSites = {
  clopen: {
    name: "Clopen by 2Stack",
    url: "https://clopen.2-stack.com",
    description:
      "Clopen turns restaurant service knowledge, guest notes, training, and daily lineups into systems the whole house can run on."
  },
  loam: {
    name: "LOAM by 2Stack",
    url: "https://loam.2-stack.com",
    description:
      "LOAM helps landscaping companies organize routes, job status, photos, invoicing, payments, and follow-ups."
  },
  rake: {
    name: "RAKE by 2Stack",
    url: "https://rake.2-stack.com",
    description:
      "RAKE gives contractors one owner view across leads, estimates, jobs, customers, referrals, margin, and business health."
  }
} as const;
