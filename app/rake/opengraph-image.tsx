import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rake by 2Stack: you paid for the lead, somebody else signed the roof.";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

// Sized for LinkedIn and Facebook link previews (1200x630).
export default function Image() {
  const leaks = ["Slow first touch", "No-shows", "No follow-up after the sit", "The quoted pile"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16181b",
          color: "#ece9e2",
          padding: "64px 72px"
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
          <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: 2 }}>RAKE</span>
          <span style={{ fontSize: 24, color: "#9ba2a9" }}>by 2Stack</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 0.98, letterSpacing: -2, maxWidth: 1000 }}>
            You paid for the lead. Somebody else signed the roof.
          </div>
          <div style={{ display: "flex", gap: 28, marginTop: 40, fontSize: 24, color: "#9ba2a9" }}>
            {leaks.map((leak) => (
              <div key={leak} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 12, height: 12, background: "#5c9ce6", transform: "rotate(45deg)" }} />
                <span>{leak}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
