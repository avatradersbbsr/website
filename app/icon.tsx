import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1.5px solid #1E2A78",
          padding: "3px",
        }}
      >
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <path
            d="M 30 140 Q 55 160, 75 90 Q 85 55, 100 100 Q 115 145, 130 90 Q 145 40, 170 140"
            stroke="#1E2A78"
            strokeWidth="15"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="25" y1="100" x2="175" y2="85" stroke="#E63946" strokeWidth="10" strokeLinecap="round" />
          <circle cx="105" cy="72" r="10" fill="#E63946" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
