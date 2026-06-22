import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "2Stack operating systems for owner-operators";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101722",
          color: "#ffffff",
          padding: "64px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 82% 22%, rgba(91,173,227,.28), transparent 34%), radial-gradient(circle at 15% 90%, rgba(111,157,69,.2), transparent 36%)"
          }}
        />
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -2 }}>2Stack</div>
          <div style={{ width: 1, height: 36, background: "rgba(255,255,255,.28)" }} />
          <div style={{ fontSize: 18, color: "#b9c5d6", letterSpacing: 4, textTransform: "uppercase" }}>
            Built for operators
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: 980 }}>
          <div style={{ color: "#78bce9", fontSize: 18, letterSpacing: 5, textTransform: "uppercase", marginBottom: 24 }}>
            Operational foundations
          </div>
          <div style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 700, letterSpacing: -4 }}>
            Systems for businesses built by real operators.
          </div>
          <div style={{ marginTop: 28, fontSize: 25, lineHeight: 1.35, color: "#cdd6e3" }}>
            Practical structure for restaurant, landscaping, contractor, and home-service owners.
          </div>
        </div>
      </div>
    ),
    size
  );
}
