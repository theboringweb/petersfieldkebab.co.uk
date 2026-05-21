import { Button, OpenStatus, Wrap } from "@/components/primitives";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--surface-inverse)",
        color: "var(--ink-on-dark)",
        minHeight: "min(78vh, 720px)",
      }}
      aria-label="Hero"
    >
      {/* Background: warm gold radial on deep brand-charcoal */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(75% 60% at 75% 35%, rgba(248,192,40,0.20) 0%, transparent 60%)," +
            "radial-gradient(60% 70% at 78% 70%, rgba(80,80,88,0.55) 0%, transparent 60%)," +
            "linear-gradient(180deg, #1a1b20 0%, #2b2d33 100%)",
        }}
      />
      {/* Subtle char texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.018) 14px 16px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Concept-photo label, anchored top-right */}
      <div
        role="img"
        aria-label="Concept placeholder — full-bleed hero of doner being carved"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontFamily: "var(--font-body)",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--gold)",
          border: "1px solid var(--gold)",
          borderRadius: 2,
          padding: "4px 8px",
          zIndex: 2,
          opacity: 0.85,
        }}
      >
        Concept placeholder · Doner being carved
      </div>

      <Wrap
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(4rem, 9vw, 7rem) 0 clamp(3rem, 6vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: "1.25rem",
              fontFamily: "var(--font-display)",
              fontSize: 12,
              lineHeight: "18px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 24,
                height: 1,
                background: "var(--gold)",
              }}
            />
            <span>Charcoal grill</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              lineHeight: 1,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: "var(--ink-on-dark)",
            }}
          >
            Petersfield's kebab house since 2008.
          </h1>

          <p
            style={{
              marginTop: "1.6rem",
              color: "var(--ink-on-dark-soft)",
              fontSize: "1.15rem",
              lineHeight: 1.55,
              maxWidth: 560,
            }}
          >
            Charcoal grill on Chapel Street. Open late, every day.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "2.2rem",
            }}
          >
            <Button variant="primary" href="https://connect.poscraft.co.uk/">
              Order now
            </Button>
            <Button variant="outline-on-dark" href="tel:01730263348">
              <span className="pk-tnum">Call 01730 263348</span>
            </Button>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <OpenStatus />
          </div>
        </div>
      </Wrap>
    </section>
  );
}
