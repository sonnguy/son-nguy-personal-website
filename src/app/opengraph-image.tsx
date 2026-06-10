import { ImageResponse } from "next/og";

export const alt =
  "Son Nguy, Product Engineer specializing in payments, Martech, and customer experience";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f5f2eb",
          color: "#171717",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #171717",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#8a4b2a",
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Son Nguy
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                maxWidth: 940,
              }}
            >
              Product Engineer
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                lineHeight: 1.35,
                maxWidth: 940,
              }}
            >
              Payments, Martech &amp; Customer Experience Platforms
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            sonnguy.dev
          </div>
        </div>
      </div>
    ),
    size,
  );
}
