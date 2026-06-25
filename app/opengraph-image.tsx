import { ImageResponse } from "next/og";

export const alt = "1nx — One idea. N executions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#ffffff",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="84" height="84" viewBox="0 0 48 48">
            <g stroke="#22D3EE" strokeWidth="2.6" strokeLinecap="round">
              <path d="M12 24 L35 11" />
              <path d="M12 24 L35 24" />
              <path d="M12 24 L35 37" />
            </g>
            <circle cx="11" cy="24" r="4" fill="#22D3EE" />
            <circle cx="36" cy="11" r="3" fill="#22D3EE" />
            <circle cx="36" cy="24" r="3" fill="#22D3EE" />
            <circle cx="36" cy="37" r="3" fill="#22D3EE" />
          </svg>
          <div style={{ display: "flex", fontSize: 60, fontWeight: 700 }}>
            <span>1</span>
            <span style={{ color: "#22D3EE" }}>nx</span>
          </div>
        </div>
        <div style={{ fontSize: 82, fontWeight: 700, marginTop: 44, letterSpacing: -2 }}>
          One idea. N executions.
        </div>
        <div style={{ fontSize: 28, color: "#9aa6b2", marginTop: 26 }}>
          AI-enabled solutions · Digital transformation · Automation — for the enterprise
        </div>
      </div>
    ),
    { ...size },
  );
}
