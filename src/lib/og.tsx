import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

// Mismos valores que los tokens de globals.css (ImageResponse no lee CSS).
const colors = {
  paper: "#f7f6f2",
  ink: "#2b2f33",
  inkSoft: "#5a6066",
  rose: "#f0dde3",
  roseDeep: "#7b2646",
  sky: "#dceaf3",
  skyDeep: "#2c5670",
};

const backgrounds = { paper: colors.paper, rose: colors.rose, sky: colors.sky };

export type OgChip = { label: string; tone: "rose" | "sky" | "neutral" };

const chipStyles = {
  rose: { background: colors.rose, color: colors.roseDeep },
  sky: { background: colors.sky, color: colors.skyDeep },
  neutral: { background: colors.paper, color: colors.ink },
};

/** Imagen Open Graph compartida por la página de inicio y los casos. */
export function renderOgImage({
  eyebrow,
  title,
  text,
  chips,
  background = "paper",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  chips: OgChip[];
  background?: keyof typeof backgrounds;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: backgrounds[background],
          color: colors.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: colors.ink,
              color: colors.paper,
              fontSize: 26,
            }}
          >
            {siteConfig.initials}
          </div>
          <div style={{ display: "flex", fontSize: 30 }}>
            {siteConfig.name} · {siteConfig.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 3 }}>{eyebrow.toUpperCase()}</div>
          <div
            style={{
              display: "flex",
              fontSize: text ? 104 : 76,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {text && (
            <div style={{ display: "flex", fontSize: 34, lineHeight: 1.3, maxWidth: 960 }}>{text}</div>
          )}
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {chips.map((chip) => (
            <div
              key={chip.label}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                fontSize: 26,
                ...chipStyles[chip.tone],
              }}
            >
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
