import { ImageResponse } from "next/og";

export const alt = "Hernan Aronson – AI-driven Business & Financial Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "700",
              color: "white",
              letterSpacing: "-1px",
              lineHeight: 1.1,
            }}
          >
            Hernan Aronson
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#93c5fd",
              fontWeight: "500",
            }}
          >
            AI-driven Business & Financial Data Analyst
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            SQL · Excel · Python · Power BI
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          hernanaronson.com
        </div>
      </div>
    ),
    size
  );
}
