"use client";

import {
  Button,
  PhotoPlaceholder,
  StarRating,
  Wrap,
} from "@/components/primitives";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, var(--pk-charcoal-mid), var(--pk-charcoal))",
        color: "var(--pk-cream)",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(3rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 5rem)",
      }}
    >
      <Wrap>
        <div className="hero-grid">
          <div style={{ maxWidth: 560 }}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: ".72rem",
                fontWeight: 600,
                letterSpacing: ".26em",
                textTransform: "uppercase",
                color: "var(--pk-amber)",
                marginBottom: "1.2rem",
              }}
            >
              Charcoal grill · Petersfield
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontVariationSettings: "'SOFT' 30, 'WONK' 1, 'opsz' 144",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-.02em",
                textWrap: "pretty",
              }}
            >
              Petersfield's kebab house since [year].
            </h1>

            <p
              style={{
                marginTop: "1.4rem",
                color: "rgba(245,239,230,.78)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: 460,
              }}
            >
              Charcoal grill on Chapel Street. Open late, every day.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".75rem",
                marginTop: "2rem",
              }}
            >
              <Button variant="primary" href="https://connect.poscraft.co.uk/">
                Order now
              </Button>
              <Button variant="ghost-dark" href="tel:01730263348">
                Call 01730 263348
              </Button>
            </div>

            <div style={{ marginTop: "2.2rem" }}>
              <StarRating rating={4.8} count={535} />
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <PhotoPlaceholder
              kind="hero"
              aspect="4/3"
              label="Charcoal-grilled lamb doner, carved fresh"
              note="Warm, low-key food photography — concept placeholder pending client photoshoot"
              kicker="Hero"
              style={{ borderRadius: 4 }}
            />
          </div>
        </div>
      </Wrap>
    </section>
  );
}
