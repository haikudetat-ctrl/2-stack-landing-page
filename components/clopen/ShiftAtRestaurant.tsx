"use client";

const moments = [
  {
    stage: "Opening",
    time: "10:30 AM",
    title: "Opening the Restaurant",
    typical:
      "Chef is doing the morning walk-through. Inventory numbers don’t look right. Food cost has been creeping up. Figuring out why means digging through invoices, prep sheets, and spreadsheets.",
    withClopen:
      "Recipe costing and inventory tracking highlight variance automatically. The chef sees where margin is slipping before service even starts."
  },
  {
    stage: "Pre-Service",
    time: "4:30 PM",
    title: "Menu Change Before Service",
    typical:
      "Chef decides to 86 a dish before dinner service. Kitchen doesn’t have a POS terminal. Someone runs to the office. Someone else texts FOH. Half the staff gets the update. Two servers still ring it in.",
    withClopen:
      "Chef updates the item from their phone. Clopen syncs the change directly to the POS. The FOH team sees the update instantly in lineup notes. Service starts clean."
  },
  {
    stage: "Service",
    time: "7:05 PM",
    title: "Dishwasher No-Call-No-Show",
    typical:
      "Dishwasher never shows. Chef finds out mid-service. Now someone is texting staff while trying to run the line, or someone gets pulled off prep.",
    withClopen:
      "The shift absence triggers coverage notifications automatically. Available staff are pinged in order. A replacement gets confirmed without the chef leaving the line."
  },
  {
    stage: "Service",
    time: "8:10 PM",
    title: "Cocktail From Three Menus Ago",
    typical:
      "Guest asks about a house cocktail they remember from a few years ago. None of the current bartenders were here when it existed. The recipe might be in an old binder somewhere, or it’s gone.",
    withClopen:
      "Every house cocktail is archived in a searchable recipe library. Bartender pulls it up instantly. Ingredients, specs, and notes are right there."
  },
  {
    stage: "Service",
    time: "8:45 PM",
    title: "New Hire Mid-Service",
    typical:
      "New server is on their second shift. They trained with one manager. Tonight’s manager wasn’t there. Now nobody is completely sure what they’ve actually learned.",
    withClopen:
      "Training modules track exactly what each staff member has completed. Managers see certifications instantly. Everyone knows where the new hire is in the training process."
  }
];

export function ShiftAtRestaurant() {
  const openBooking = () => {
    window.dispatchEvent(new CustomEvent("openClopenBooking"));
  };

  return (
    <section id="systems-check" className="pt-20">
      <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm md:p-10">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#1f2933] md:text-3xl">
          A Shift at Your Restaurant
        </h2>
        <p className="mt-3 max-w-3xl text-[#6b7280]">
          Every restaurant runs into the same moments during a shift. The difference is whether your systems make
          them easier, or invisible.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[#6b7280]">Shift Progression</p>
            <ol className="mt-3 space-y-3">
              {moments.map((moment) => (
                <li key={`${moment.time}-${moment.title}`} className="relative border-l border-[#d1d5db] pl-3">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#6b7280]">{moment.stage}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#1f2933]">
                    {moment.time} <span className="font-normal text-[#6b7280]">— {moment.title}</span>
                  </p>
                </li>
              ))}
            </ol>
          </aside>

          <div className="space-y-4">
            {moments.map((moment) => (
              <article key={`${moment.time}-${moment.title}`} className="rounded-lg border border-[#e5e7eb] bg-white p-4 md:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#f1efe9] px-2 py-1 text-xs font-semibold text-[#6b7280]">{moment.time}</span>
                  <h3 className="text-lg font-semibold text-[#1f2933]">{moment.title}</h3>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-md border border-[#e5e7eb] bg-[#fafafa] p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#6b7280]">Without Clopen</p>
                    <p className="mt-2 text-sm leading-7 text-[#4b5563]">{moment.typical}</p>
                  </div>
                  <div className="rounded-md border border-[#e7dcc7] bg-[#fbf7ef] p-4">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#8b5d24]">With Clopen</p>
                    <p className="mt-2 text-sm leading-7 text-[#4b5563]">{moment.withClopen}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-[#e5e7eb] bg-[#f7f6f3] p-5">
          <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#1f2933]">Service Is Already Hard Enough</h3>
          <p className="mt-3 text-sm text-[#6b7280]">Restaurants shouldn’t run on:</p>
          <ul className="mt-3 space-y-1 text-sm text-[#4b5563]">
            <li>• group texts</li>
            <li>• binders</li>
            <li>• spreadsheets</li>
            <li>• memory</li>
          </ul>
          <p className="mt-4 text-sm font-medium text-[#1f2933]">Clopen builds the systems behind the service.</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/clopen#systems-overview"
              className="rounded-lg bg-[#c27c2c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              See the Clopen System
            </a>
            <button
              type="button"
              onClick={openBooking}
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Book a Walkthrough
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
