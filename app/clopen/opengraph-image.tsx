import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clopen by 2Stack";
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
          background: "#0B0B0B",
          color: "#F5F5F5",
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
              "radial-gradient(circle at 78% 32%, rgba(217,119,54,.3), transparent 34%), linear-gradient(130deg, rgba(244,162,97,.12), transparent 52%)"
          }}
        />
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 14,
              border: "1px solid rgba(244,162,97,.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F4A261",
              fontSize: 28,
              fontWeight: 700
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1 }}>Clopen</span>
            <span style={{ fontSize: 18, color: "#A3A3A3", letterSpacing: 5, textTransform: "uppercase" }}>by 2Stack</span>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: 900 }}>
          <div style={{ color: "#F4A261", fontSize: 18, letterSpacing: 6, textTransform: "uppercase", marginBottom: 24 }}>
            Standards stay in the building
          </div>
          <h1 style={{ fontSize: 84, lineHeight: 0.94, margin: 0, fontWeight: 700 }}>
            When Your Best Server Leaves, Your Standards Shouldn&apos;t.
          </h1>
          <p style={{ marginTop: 28, fontSize: 29, lineHeight: 1.3, color: "#D8D8D8", maxWidth: 850 }}>
            Structure for restaurants that take hospitality personally.
          </p>
        </div>
      </div>
    ),
    size
  );
}
