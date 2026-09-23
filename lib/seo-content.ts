export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoContentSection = {
  title: string;
  body: string;
  bullets: string[];
};

export type SeoLandingPage = {
  vertical: "clopen" | "rake";
  brand: "Clopen" | "RAKE";
  slug: string;
  canonicalUrl: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  summary: string;
  idealFor: string;
  primaryKeyword: string;
  sections: SeoContentSection[];
  rollout: Array<{ label: string; title: string; body: string }>;
  faqs: SeoFaq[];
  relatedLinks: Array<{ label: string; href: string }>;
};

const clopenBase = "https://clopen.2-stack.com";
const rakeBase = "https://rake.2-stack.com";

export const clopenSeoPages: SeoLandingPage[] = [
  {
    vertical: "clopen",
    brand: "Clopen",
    slug: "restaurant-operations-system",
    canonicalUrl: `${clopenBase}/restaurant-operations-system`,
    title: "Restaurant Operations System for Independent Groups",
    description:
      "Build a restaurant operations system around your standards, costs, training, and daily routines with a custom 90-day Clopen rollout from 2Stack.",
    eyebrow: "Restaurant operations system",
    headline: "Keep the restaurant operating standard out of the owner's head.",
    summary:
      "Clopen is a custom restaurant operations system for independent restaurants and small groups doing roughly $3–5 million in annual revenue. It turns the way your best operators run the house into clear workflows, useful internal tools, and a management rhythm the whole team can follow.",
    idealFor: "Independent restaurants and small groups with approximately $3–5 million in annual revenue",
    primaryKeyword: "restaurant operations system",
    sections: [
      {
        title: "One operating layer for the work between systems",
        body:
          "A POS records transactions. Accounting closes the books. Scheduling fills shifts. Clopen is built around the operational gaps between those tools: the handoffs, standards, checks, and decisions that usually live in texts, spreadsheets, binders, and memory.",
        bullets: ["Daily lineups and shift priorities", "SOPs and role-based checklists", "Menu and beverage knowledge", "Cost and variance review routines"]
      },
      {
        title: "Make the house standard visible and repeatable",
        body:
          "The goal is not more software for the team to ignore. We map the way the restaurant should run, identify where execution drifts, and build the smallest useful system that gives managers and staff a shared source of truth.",
        bullets: ["Clear ownership for recurring work", "Faster manager handoffs", "Consistent training references", "Owner-level operational visibility"]
      },
      {
        title: "Custom built around the restaurant you already operate",
        body:
          "Clopen is configured around your concept, existing tools, service model, team, and reporting needs. It can complement Restaurant365, a POS, accounting software, or a collection of lighter tools without forcing the operation into a generic template.",
        bullets: ["Workflow and systems audit", "Custom internal tools", "Practical integrations", "Adoption and operating cadence"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Baseline and blueprint", body: "Map current workflows, define operating benchmarks, and prioritize the highest-friction gaps." },
      { label: "Day 60", title: "Working system", body: "Put the first tools and workflows into daily use, then refine them with manager feedback." },
      { label: "Day 90", title: "Operational rollout", body: "Complete the rollout, document ownership, and establish the review rhythm that keeps the system useful." }
    ],
    faqs: [
      { question: "What is a restaurant operations system?", answer: "A restaurant operations system is the connected set of workflows, standards, internal tools, and management routines used to run the business consistently. Clopen focuses on the operational work that often falls between POS, accounting, scheduling, inventory, and communication tools." },
      { question: "Is Clopen a replacement for Restaurant365 or our POS?", answer: "Not necessarily. Clopen can work alongside Restaurant365, your POS, accounting platform, and other existing tools. The engagement starts by identifying what already works and where a custom operating layer can close gaps without creating unnecessary replacement work." },
      { question: "What size restaurant is the best fit?", answer: "Clopen is designed primarily for independent restaurants and small restaurant groups around $3–5 million in annual revenue that have outgrown informal processes but do not want a generic enterprise rollout." },
      { question: "How long does implementation take?", answer: "A typical rollout is structured over 90 days, with an operating baseline and blueprint by day 30, working systems in use by day 60, and a completed rollout with clear ownership by day 90." }
    ],
    relatedLinks: [
      { label: "Restaurant inventory management", href: "/restaurant-inventory-management" },
      { label: "Beverage cost control", href: "/beverage-cost-control" },
      { label: "Staff training and SOPs", href: "/restaurant-staff-training-sops" }
    ]
  },
  {
    vertical: "clopen",
    brand: "Clopen",
    slug: "restaurant-inventory-management",
    canonicalUrl: `${clopenBase}/restaurant-inventory-management`,
    title: "Restaurant Inventory Management Built Around Your Team",
    description:
      "Create a restaurant inventory management workflow for counts, purchasing, recipes, and variance with a custom 90-day Clopen implementation.",
    eyebrow: "Restaurant inventory management",
    headline: "Turn inventory from a counting event into a management system.",
    summary:
      "Clopen helps independent restaurants build an inventory management workflow their team can actually maintain. We connect count procedures, purchasing records, recipe costs, ownership, and variance review so managers can find the reason behind a cost problem instead of discovering it after the period closes.",
    idealFor: "Independent restaurants and small groups with recurring count, purchasing, or cost-variance friction",
    primaryKeyword: "restaurant inventory management",
    sections: [
      {
        title: "Standardize how inventory work gets done",
        body:
          "Reliable numbers start with a reliable process. Clopen documents count locations, units, timing, ownership, and review steps so each count follows the same method even when managers or staff change.",
        bullets: ["Count sheets and locations", "Units and pack-size rules", "Role ownership and deadlines", "Manager review checkpoints"]
      },
      {
        title: "Connect purchasing, recipes, and actual usage",
        body:
          "Inventory data becomes useful when it connects to purchases, recipes, sales, waste, transfers, and credits. We design the operating workflow and internal views needed to investigate variance instead of relying on one blended percentage.",
        bullets: ["Invoice and price-change review", "Recipe and theoretical cost references", "Waste and transfer capture", "Actual-versus-expected variance"]
      },
      {
        title: "Work with the tools already in place",
        body:
          "Clopen can complement an existing POS, accounting platform, or inventory product. When a commercial tool already solves a job well, we preserve it. Custom work focuses on the missing connections, controls, and owner visibility.",
        bullets: ["Current-stack assessment", "Practical data connections", "Focused internal tools", "Management reporting cadence"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Inventory baseline", body: "Document the current count, purchasing, recipe, and variance process and define the first benchmarks." },
      { label: "Day 60", title: "Controlled workflow", body: "Launch standardized counts and review views, then resolve gaps found in real operating cycles." },
      { label: "Day 90", title: "Management rhythm", body: "Finalize ownership, exception handling, and the weekly or period-end review process." }
    ],
    faqs: [
      { question: "What should a restaurant inventory management system track?", answer: "At minimum, the system should support consistent counts, units and pack sizes, purchases, transfers, waste, recipe references, and actual-versus-expected variance. The exact workflow should match the restaurant's menu, storage layout, staffing, and current software." },
      { question: "Can Clopen work with our POS and accounting software?", answer: "Yes, when the existing systems make the needed data available. The first phase identifies which tools should remain, which information can be connected, and which operating gaps require a focused custom tool or process." },
      { question: "Does better inventory management help explain high food cost?", answer: "It can. A structured inventory process helps separate possible causes such as price changes, recipe drift, incorrect counts, waste, transfers, portioning, or missing credits. It does not guarantee a lower cost, but it gives managers a clearer investigation path." },
      { question: "How quickly can a new inventory workflow be rolled out?", answer: "Clopen uses a 90-day rollout. The current process and benchmarks are mapped by day 30, a working workflow is in use by day 60, and ownership and review routines are established by day 90." }
    ],
    relatedLinks: [
      { label: "Restaurant operations system", href: "/restaurant-operations-system" },
      { label: "Beverage cost control", href: "/beverage-cost-control" },
      { label: "Staff training and SOPs", href: "/restaurant-staff-training-sops" }
    ]
  },
  {
    vertical: "clopen",
    brand: "Clopen",
    slug: "beverage-cost-control",
    canonicalUrl: `${clopenBase}/beverage-cost-control`,
    title: "Beverage Cost Control System for Restaurants and Bars",
    description:
      "Build a beverage cost control system for counts, recipes, pricing, waste, and variance with a custom 90-day Clopen rollout for restaurant teams.",
    eyebrow: "Beverage cost control",
    headline: "See why beverage cost moved before the answer becomes guesswork.",
    summary:
      "Clopen builds a beverage cost control workflow around the way your restaurant or bar buys, stores, pours, transfers, counts, and prices product. The result is a clearer operating process for finding variance, maintaining recipe standards, and giving managers useful answers at the item and category level.",
    idealFor: "Beverage-led restaurants, bars, and small groups that need tighter count and variance routines",
    primaryKeyword: "beverage cost control",
    sections: [
      {
        title: "Build a count process the team can repeat",
        body:
          "Bottle placement, partial-bottle estimates, storage areas, transfers, and inconsistent units can undermine the number before analysis begins. We standardize the physical and digital workflow so each period starts from a more dependable count.",
        bullets: ["Bar and storage count maps", "Bottle and unit conventions", "Transfer and waste capture", "Count review and signoff"]
      },
      {
        title: "Connect recipe, purchase, and sales signals",
        body:
          "A blended beverage-cost percentage cannot explain itself. Clopen organizes the source information managers need to examine purchase prices, recipe cost, menu price, product mix, comps, waste, and actual usage.",
        bullets: ["Recipe and pour standards", "Vendor price movement", "Menu price references", "Category and item variance"]
      },
      {
        title: "Turn exceptions into manager action",
        body:
          "The useful output is not another dashboard. It is a short, owned list of exceptions worth investigating. We shape the review around the decisions managers can make during the next operating cycle.",
        bullets: ["Exception-based review", "Assigned follow-up", "Period comparisons", "Documented corrective action"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Cost-control baseline", body: "Map products, locations, recipes, count rules, and the current variance-review process." },
      { label: "Day 60", title: "Live beverage workflow", body: "Run the standardized count and cost review through real operating cycles with manager input." },
      { label: "Day 90", title: "Owned control system", body: "Finalize exception thresholds, responsibility, and the recurring beverage-cost review cadence." }
    ],
    faqs: [
      { question: "What is beverage cost control?", answer: "Beverage cost control is the operating process used to monitor what a restaurant or bar buys, stores, transfers, wastes, pours, sells, and counts. It connects physical inventory and recipes with purchasing and sales data so managers can investigate variance." },
      { question: "How is beverage cost calculated?", answer: "A common actual beverage-cost calculation is beginning inventory plus purchases minus ending inventory, divided by beverage sales. That percentage is more useful when compared with an expected or theoretical cost based on recipes, prices, and product mix." },
      { question: "Can Clopen handle wine, beer, and liquor workflows?", answer: "Clopen can be configured around wine, beer, liquor, nonalcoholic beverages, or a mixed program. The count method, units, storage layout, recipes, and exception rules are mapped to the operation during implementation." },
      { question: "Is Clopen beverage inventory software?", answer: "Clopen is a custom operating system, not a fixed off-the-shelf inventory package. It can organize beverage workflows and build missing internal tools while working alongside the POS, accounting, or inventory products a restaurant wants to keep." }
    ],
    relatedLinks: [
      { label: "Restaurant inventory management", href: "/restaurant-inventory-management" },
      { label: "Restaurant operations system", href: "/restaurant-operations-system" },
      { label: "Staff training and SOPs", href: "/restaurant-staff-training-sops" }
    ]
  },
  {
    vertical: "clopen",
    brand: "Clopen",
    slug: "restaurant-staff-training-sops",
    canonicalUrl: `${clopenBase}/restaurant-staff-training-sops`,
    title: "Restaurant Staff Training and SOP System | Clopen",
    description:
      "Turn restaurant SOPs, menu knowledge, service standards, and role training into a usable system with a custom 90-day Clopen rollout from 2Stack.",
    eyebrow: "Restaurant staff training and SOPs",
    headline: "Make the house standard easier to teach, find, and use.",
    summary:
      "Clopen turns scattered restaurant SOPs, training notes, menu knowledge, and manager corrections into a practical staff training system. Each role gets clearer standards and references, while managers gain a repeatable way to onboard, reinforce, and update how the restaurant operates.",
    idealFor: "Independent restaurants and small groups where training quality depends too heavily on individual managers",
    primaryKeyword: "restaurant staff training and SOPs",
    sections: [
      {
        title: "Replace the binder with usable operating knowledge",
        body:
          "An SOP only helps when a team member can find, understand, and apply it during the work. We organize standards by role and moment, using formats that support onboarding, pre-shift preparation, and in-service reference.",
        bullets: ["Role-based SOPs", "Opening and closing routines", "Service and recovery standards", "Menu and beverage knowledge"]
      },
      {
        title: "Give every new hire the same foundation",
        body:
          "Training often changes with the trainer, the shift, and how busy the restaurant is. Clopen creates a defined learning path with clear responsibilities, reference material, and checkpoints so managers can see what was covered and where reinforcement is needed.",
        bullets: ["Structured onboarding paths", "Trainer responsibilities", "Knowledge checkpoints", "Manager follow-up"]
      },
      {
        title: "Keep standards current after rollout",
        body:
          "Menus, policies, and service expectations change. The system includes ownership for updates and a simple publishing rhythm so staff are not relying on an old PDF, an unpinned message, or last season's notes.",
        bullets: ["Named content ownership", "Update and approval workflow", "Shift communication", "Ongoing training reinforcement"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Training map", body: "Inventory existing materials, define role expectations, and prioritize the knowledge that affects service most." },
      { label: "Day 60", title: "Live learning paths", body: "Put the first role-based SOPs and training checkpoints into use with managers and staff." },
      { label: "Day 90", title: "Sustainable ownership", body: "Complete core content, assign update responsibility, and establish the reinforcement cadence." }
    ],
    faqs: [
      { question: "What should a restaurant SOP include?", answer: "A useful restaurant SOP states the purpose, owner, timing, required inputs, ordered steps, exceptions, and definition of done. It should be written for the employee performing the work and kept where that employee can access it." },
      { question: "How does Clopen support restaurant staff training?", answer: "Clopen organizes training by role, converts operating standards into usable references, and creates checkpoints for onboarding and reinforcement. The exact content and workflow are custom built around the restaurant's service model and team." },
      { question: "Can we use our existing training documents?", answer: "Yes. Existing SOPs, checklists, menus, notes, videos, and training documents are reviewed during the first phase. Useful material is preserved and reorganized; gaps and conflicting instructions are resolved with the operating team." },
      { question: "How long does a restaurant training-system rollout take?", answer: "The rollout is structured over 90 days: materials and role expectations are mapped by day 30, initial learning paths are used by day 60, and core content ownership and reinforcement routines are in place by day 90." }
    ],
    relatedLinks: [
      { label: "Restaurant operations system", href: "/restaurant-operations-system" },
      { label: "Restaurant inventory management", href: "/restaurant-inventory-management" },
      { label: "Beverage cost control", href: "/beverage-cost-control" }
    ]
  }
];

export const rakeSeoPages: SeoLandingPage[] = [
  {
    vertical: "rake",
    brand: "RAKE",
    slug: "contractor-speed-to-lead",
    canonicalUrl: `${rakeBase}/contractor-speed-to-lead`,
    title: "Speed-to-Lead System for Service Contractors | RAKE",
    description:
      "Build a contractor speed-to-lead system for instant response, routing, follow-up, and owner visibility with a custom 90-day RAKE rollout.",
    eyebrow: "Contractor speed to lead",
    headline: "Make every new lead somebody's next action—not tomorrow's cleanup.",
    summary:
      "RAKE builds a speed-to-lead system for service contractors doing roughly $1–6 million in annual revenue. It connects lead sources, response rules, assignment, messaging, follow-up, and reporting so an owner can see whether each opportunity received the right action at the right time.",
    idealFor: "Roofing and service contractors with approximately $1–6 million in annual revenue",
    primaryKeyword: "contractor speed to lead",
    sections: [
      {
        title: "Respond immediately without losing the human handoff",
        body:
          "The first response can be automated, but the sales process still needs clear ownership. RAKE can acknowledge new inquiries, route them by service or territory, alert the right person, and make the next required action visible.",
        bullets: ["Instant lead acknowledgment", "Assignment and escalation rules", "Call and message workflows", "After-hours handling"]
      },
      {
        title: "Recover the leads your CRM is storing, not advancing",
        body:
          "A CRM record does not guarantee follow-up. We design stage rules and exception views that surface untouched leads, overdue estimates, missed appointments, and opportunities that need another contact.",
        bullets: ["Untouched-lead alerts", "Estimate follow-up queues", "No-response sequences", "Lead-status accountability"]
      },
      {
        title: "See response performance from the owner's view",
        body:
          "RAKE organizes the signals needed to review response time, contact attempts, appointments, estimates, and outcomes by source or team member. The goal is a practical management view, not another report nobody opens.",
        bullets: ["Response-time visibility", "Source-to-appointment tracking", "Rep follow-up review", "Weekly exception list"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Lead-flow baseline", body: "Map every lead source, current response path, ownership rule, and measurable handoff." },
      { label: "Day 60", title: "Response system live", body: "Launch priority automations, routing, alerts, and exception views in real sales workflows." },
      { label: "Day 90", title: "Managed follow-up engine", body: "Finalize escalation, reporting, and the weekly review rhythm that keeps opportunities moving." }
    ],
    faqs: [
      { question: "What does speed to lead mean for contractors?", answer: "Speed to lead is the time between a prospect's inquiry and the contractor's first useful response. A complete system also covers assignment, contact attempts, appointment booking, estimate follow-up, and visibility when a lead becomes stuck." },
      { question: "Does RAKE replace AccuLynx, RoofSnap, or our current CRM?", answer: "Not automatically. RAKE can work alongside tools such as AccuLynx, RoofSnap, JobNimbus, or another CRM when they remain useful. The custom work focuses on the response, connection, and visibility gaps in the current stack." },
      { question: "Can the first response be automated?", answer: "Yes. Depending on the available integrations, RAKE can support immediate acknowledgments, routing, notifications, and follow-up workflows. The implementation defines where automation helps and where a salesperson or coordinator should take over." },
      { question: "How long does a speed-to-lead rollout take?", answer: "RAKE uses a 90-day rollout. Lead sources and benchmarks are mapped by day 30, core routing and response workflows are live by day 60, and escalation and reporting routines are established by day 90." }
    ],
    relatedLinks: [
      { label: "Contractor operations software", href: "/contractor-operations-software" },
      { label: "Estimate follow-up system", href: "/contractor-estimate-follow-up" },
      { label: "Review and referral automation", href: "/contractor-review-referral-automation" },
      { label: "RAKE owner visibility", href: "/" }
    ]
  },
  {
    vertical: "rake",
    brand: "RAKE",
    slug: "contractor-operations-software",
    canonicalUrl: `${rakeBase}/contractor-operations-software`,
    title: "Custom Contractor Operations Software and Internal Tools",
    description:
      "Connect leads, estimates, jobs, margin, follow-up, and reporting with custom contractor operations software built through a 90-day RAKE rollout.",
    eyebrow: "Contractor operations software",
    headline: "Connect the contractor systems you have to the operating view you need.",
    summary:
      "RAKE is custom contractor operations software for service businesses doing roughly $1–6 million in annual revenue. It connects the useful parts of your CRM, estimating, production, accounting, phone, and marketing stack with focused internal tools and one owner-level view of what needs attention.",
    idealFor: "Roofing and service contractors with approximately $1–6 million in annual revenue",
    primaryKeyword: "contractor operations software",
    sections: [
      {
        title: "Fill the gaps between industry platforms",
        body:
          "Contractors often have strong point solutions for measurements, estimates, CRM, production, and accounting. The friction appears in the handoffs between them. RAKE maps those handoffs and builds only the connections or tools the operation is missing.",
        bullets: ["Lead-to-estimate handoffs", "Estimate-to-production visibility", "Job and margin exceptions", "Customer follow-up triggers"]
      },
      {
        title: "Build internal tools around your workflow",
        body:
          "Generic software makes every contractor choose from the same fields, stages, and reports. RAKE can create focused internal tools around the way your team sells, produces, communicates, and reviews work without rebuilding functions your current platforms already handle well.",
        bullets: ["Custom owner scorecards", "Exception and recovery queues", "Role-specific work views", "Workflow automation"]
      },
      {
        title: "Make operating benchmarks part of the rollout",
        body:
          "The implementation begins with baseline measures and clear ownership. By day 60, the priority workflows are operating with real data. By day 90, the team has a defined management rhythm for reviewing performance and fixing exceptions.",
        bullets: ["Current-state systems map", "30- and 60-day benchmarks", "90-day operational rollout", "Documented ownership"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Systems and benchmark map", body: "Document the current stack, critical handoffs, data availability, and priority operating measures." },
      { label: "Day 60", title: "Priority tools in use", body: "Launch the first integrations, internal views, and automations against live contractor workflows." },
      { label: "Day 90", title: "Connected operating layer", body: "Complete the rollout, document ownership, and establish recurring owner and team reviews." }
    ],
    faqs: [
      { question: "What is contractor operations software?", answer: "Contractor operations software coordinates the work across leads, estimates, jobs, customers, finances, and follow-up. RAKE focuses on connecting existing platforms and adding custom internal tools where generic software leaves important workflow or visibility gaps." },
      { question: "Is RAKE a contractor CRM?", answer: "RAKE can support CRM-related workflows, but it does not have to replace the CRM you already use. It is designed as a custom operating layer that can connect CRM, estimating, production, accounting, communications, and marketing data." },
      { question: "Can RAKE integrate with AccuLynx or RoofSnap?", answer: "Potential integrations depend on the access and APIs available in the contractor's current accounts. The first phase evaluates the existing stack, preserves tools that work, and defines practical ways to connect or supplement them." },
      { question: "Who is the best fit for RAKE?", answer: "RAKE is designed for roofing and service contractors around $1–6 million in annual revenue that have outgrown spreadsheets and disconnected point tools but need a system tailored to their operation rather than a generic enterprise rollout." }
    ],
    relatedLinks: [
      { label: "Contractor speed to lead", href: "/contractor-speed-to-lead" },
      { label: "Contractor job costing", href: "/contractor-job-costing" },
      { label: "Estimate follow-up system", href: "/contractor-estimate-follow-up" },
      { label: "RAKE owner visibility", href: "/" }
    ]
  },
  {
    vertical: "rake",
    brand: "RAKE",
    slug: "contractor-estimate-follow-up",
    canonicalUrl: `${rakeBase}/contractor-estimate-follow-up`,
    title: "Contractor Estimate Follow-Up and Recovery System",
    description:
      "Recover aging contractor estimates with clear ownership, timed follow-up, response tracking, and owner visibility through a custom 90-day RAKE rollout.",
    eyebrow: "Contractor estimate follow-up",
    headline: "Keep every sent estimate moving until the customer gives an answer.",
    summary:
      "RAKE builds a contractor estimate follow-up system for roofing and service businesses doing roughly $1–6 million in annual revenue. It turns open quotes into an owned recovery queue with timely outreach, visible responses, clear stop rules, and one owner view of the work still available to win.",
    idealFor: "Roofing and service contractors with valuable estimates aging without consistent follow-up",
    primaryKeyword: "contractor estimate follow-up",
    sections: [
      {
        title: "Turn open estimates into an active recovery queue",
        body:
          "A sent estimate should have a next action, an owner, and a clear status. RAKE can organize open quote value by age, service, salesperson, and likelihood of recovery so the team starts with the opportunities that deserve attention now.",
        bullets: ["Estimate aging and value", "Assigned next actions", "Priority recovery queues", "Won, lost, paused, and no-response states"]
      },
      {
        title: "Automate timing without automating judgment",
        body:
          "Useful follow-up is consistent and contextual. We design message timing, channels, templates, and handoffs around the contractor's sales process, while keeping scope questions, objections, and negotiation with the right person.",
        bullets: ["Timed email and text workflows", "Salesperson alerts", "Response and stop rules", "Human handoff for active conversations"]
      },
      {
        title: "See where estimates stall and why",
        body:
          "RAKE connects follow-up activity to estimate outcomes so owners can review which quotes are aging, which stages create friction, and whether responsibilities are being completed. The purpose is a short action list, not another passive pipeline report.",
        bullets: ["Aging by stage and salesperson", "Follow-up completion", "Outcome and reason tracking", "Weekly recovery review"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Estimate baseline", body: "Map estimate sources, stages, current follow-up, ownership, and the value already sitting open." },
      { label: "Day 60", title: "Recovery queue live", body: "Launch priority views, timed workflows, alerts, and response handling against real estimates." },
      { label: "Day 90", title: "Managed recovery engine", body: "Finalize stop rules, reporting, team ownership, and the weekly estimate-recovery cadence." }
    ],
    faqs: [
      { question: "What is contractor estimate follow-up software?", answer: "Contractor estimate follow-up software keeps sent quotes visible, assigns the next action, schedules appropriate outreach, records responses, and stops communication when an estimate is won, lost, paused, or no longer eligible for contact." },
      { question: "Can RAKE follow up on estimates from our existing CRM?", answer: "Potential connections depend on the data access and APIs available in the contractor's current CRM or estimating platform. The first phase identifies how estimates can enter the recovery workflow without replacing tools that already work." },
      { question: "Does automated follow-up replace the salesperson?", answer: "No. Automation can handle timing, reminders, acknowledgments, and routine messages. Questions about scope, price, financing, objections, and next steps should be handed to the responsible salesperson or coordinator." },
      { question: "How long does an estimate-recovery rollout take?", answer: "RAKE uses a 90-day rollout. Open-estimate flow and benchmarks are mapped by day 30, the recovery queue is active by day 60, and stop rules, ownership, and recurring review are established by day 90." }
    ],
    relatedLinks: [
      { label: "Contractor speed to lead", href: "/contractor-speed-to-lead" },
      { label: "Contractor job costing", href: "/contractor-job-costing" },
      { label: "Contractor operations software", href: "/contractor-operations-software" }
    ]
  },
  {
    vertical: "rake",
    brand: "RAKE",
    slug: "contractor-job-costing",
    canonicalUrl: `${rakeBase}/contractor-job-costing`,
    title: "Contractor Job Costing and Profitability System",
    description:
      "Connect estimated and actual job costs, supplements, labor, materials, and margin with a custom contractor profitability system built through RAKE.",
    eyebrow: "Contractor job costing",
    headline: "See the job that is losing margin while there is still time to act.",
    summary:
      "RAKE builds a contractor job-costing system for roofing and service businesses doing roughly $1–6 million in annual revenue. It connects contract value, estimated cost, actual materials, labor, subcontractors, supplements, and change orders into an owner view of job profitability and missing cost information.",
    idealFor: "Roofing and service contractors that see revenue clearly but learn true job margin too late",
    primaryKeyword: "contractor job costing",
    sections: [
      {
        title: "Create one cost story for every job",
        body:
          "Job profitability becomes difficult to trust when revenue is in the CRM, materials are in supplier records, labor is in payroll, and subcontractor costs are in accounting. RAKE maps those sources into a consistent estimated-versus-actual view.",
        bullets: ["Contract and estimate baseline", "Materials and purchase costs", "Labor and subcontractors", "Supplements and change orders"]
      },
      {
        title: "Surface missing costs before closeout",
        body:
          "A margin number is only useful when the underlying job record is complete. Exception views can identify jobs missing invoices, labor, supplements, or approvals so managers know which number needs attention before relying on it.",
        bullets: ["Missing-cost alerts", "Budget-versus-actual variance", "Open supplement visibility", "Closeout readiness"]
      },
      {
        title: "Use completed jobs to improve the next estimate",
        body:
          "The operating value continues after closeout. RAKE can organize profitability by service, crew, salesperson, lead source, neighborhood, or job type so owners can refine pricing and decide where the business should focus.",
        bullets: ["Margin by job type", "Crew and sales patterns", "Lead-source profitability", "Pricing review inputs"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Cost-source map", body: "Define job-cost categories, source systems, baseline completeness, and the first profitability benchmarks." },
      { label: "Day 60", title: "Live job-cost view", body: "Connect priority cost inputs and launch exception views for active and recently completed jobs." },
      { label: "Day 90", title: "Profitability review system", body: "Finalize ownership, closeout checks, reporting, and the recurring margin-review cadence." }
    ],
    faqs: [
      { question: "What should contractor job costing include?", answer: "Contractor job costing should compare contract revenue with estimated and actual materials, labor, subcontractors, equipment, permits, supplements, change orders, and other direct job costs. Overhead treatment should be defined with the contractor's accounting advisor." },
      { question: "Does RAKE replace accounting software?", answer: "No. RAKE can connect operating and financial signals into job-level views, but the accounting platform remains the financial system of record. The implementation defines which data can be connected and where manager input is still required." },
      { question: "Can RAKE show estimated versus actual margin?", answer: "Yes, when the necessary contract, estimate, and actual-cost data is available. RAKE can organize those inputs and flag incomplete records so owners understand both the margin view and the confidence they should place in it." },
      { question: "How long does a contractor job-costing rollout take?", answer: "RAKE uses a 90-day rollout. Cost sources and benchmarks are mapped by day 30, the first live job-cost and exception views are operating by day 60, and ownership and review routines are established by day 90." }
    ],
    relatedLinks: [
      { label: "Contractor operations software", href: "/contractor-operations-software" },
      { label: "Estimate follow-up system", href: "/contractor-estimate-follow-up" },
      { label: "Review and referral automation", href: "/contractor-review-referral-automation" }
    ]
  },
  {
    vertical: "rake",
    brand: "RAKE",
    slug: "contractor-review-referral-automation",
    canonicalUrl: `${rakeBase}/contractor-review-referral-automation`,
    title: "Contractor Review and Referral Automation System",
    description:
      "Turn completed contractor jobs into timely review requests, referral follow-up, and visible customer advocacy with a custom 90-day RAKE rollout.",
    eyebrow: "Contractor review and referral automation",
    headline: "Make a completed job the beginning of the next customer relationship.",
    summary:
      "RAKE builds a review and referral automation system for roofing and service contractors doing roughly $1–6 million in annual revenue. It connects job-completion signals to timely customer outreach, tracks who responded, and gives the owner a visible process for reviews, referrals, repeat work, and follow-up.",
    idealFor: "Roofing and service contractors that complete strong work but rely on memory to ask for reviews and referrals",
    primaryKeyword: "contractor review and referral automation",
    sections: [
      {
        title: "Trigger the right request from a real job milestone",
        body:
          "Review and referral outreach works best when it follows a clear customer moment. RAKE can use completion, final walkthrough, payment, or another approved milestone to create the next action without asking the team to remember every time.",
        bullets: ["Completion-based triggers", "Review request workflows", "Referral invitations", "Escalation for unresolved issues"]
      },
      {
        title: "Keep outreach personal and accountable",
        body:
          "Automation should support the customer relationship, not flatten it. We design timing, channels, ownership, and stop rules around the contractor's brand, with a human path for questions, concerns, and high-value advocates.",
        bullets: ["Brand-aligned messages", "Email and text sequencing", "Response and stop rules", "Owner or rep follow-up"]
      },
      {
        title: "Connect advocacy back to the original job",
        body:
          "RAKE can link review and referral activity with the customer, service, salesperson, crew, neighborhood, and lead source. That gives owners a clearer view of which completed jobs create trust and which relationships deserve another conversation.",
        bullets: ["Request-status visibility", "Referral-source tracking", "Customer reactivation cues", "Neighborhood and service patterns"]
      }
    ],
    rollout: [
      { label: "Day 30", title: "Customer-journey baseline", body: "Map completion milestones, current outreach, review destinations, referral handling, and service recovery." },
      { label: "Day 60", title: "Advocacy workflows live", body: "Launch priority review and referral sequences with response tracking and human handoffs." },
      { label: "Day 90", title: "Managed customer engine", body: "Finalize triggers, ownership, reporting, and the recurring review of advocacy and repeat-work signals." }
    ],
    faqs: [
      { question: "What is contractor review automation?", answer: "Contractor review automation uses an approved job milestone to schedule and track customer review requests. A complete workflow also includes message timing, response status, stop rules, service-recovery handoffs, and visibility into which customers still need follow-up." },
      { question: "Can RAKE automate contractor referral requests?", answer: "Yes. Depending on the current systems and communication access, RAKE can trigger referral invitations, record responses, route referred leads, and connect the referral back to the original customer and completed job." },
      { question: "What happens if a customer has an unresolved issue?", answer: "The workflow should route unresolved service issues to a person instead of continuing promotional outreach. During implementation, the team defines which job or customer signals pause review and referral messages and who owns recovery." },
      { question: "How long does review and referral automation take to implement?", answer: "RAKE uses a 90-day rollout. Customer milestones and outreach are mapped by day 30, initial workflows are live by day 60, and triggers, ownership, and reporting are established by day 90." }
    ],
    relatedLinks: [
      { label: "Contractor job costing", href: "/contractor-job-costing" },
      { label: "Contractor speed to lead", href: "/contractor-speed-to-lead" },
      { label: "Contractor operations software", href: "/contractor-operations-software" }
    ]
  }
];

export const allSeoPages = [...clopenSeoPages, ...rakeSeoPages];

export function getSeoTitle(page: SeoLandingPage) {
  return new RegExp(`\\b${page.brand}\\b`, "i").test(page.title) ? page.title : `${page.title} | ${page.brand}`;
}

export function getSeoPage(vertical: SeoLandingPage["vertical"], slug: string) {
  return allSeoPages.find((page) => page.vertical === vertical && page.slug === slug);
}
