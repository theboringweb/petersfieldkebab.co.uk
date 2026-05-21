import {
  HeritageBadge,
  PhotoPlaceholder,
  Section,
  SectionHead,
  Wrap,
} from "@/components/primitives";

export function About() {
  return (
    <Section id="about" band label="About">
      <Wrap>
        <div className="about-grid">
          <div>
            <PhotoPlaceholder
              kind="place"
              aspect="4/3"
              label="The storefront on Chapel Street at dusk"
              note="Placeholder — real storefront photo to come after client confirmation"
              kicker="Place"
              style={{ borderRadius: 4 }}
            />
          </div>

          <div style={{ maxWidth: 520 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <HeritageBadge year={2008} size={96} />
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: ".72rem",
                  fontWeight: 600,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "var(--pk-amber)",
                }}
              >
                Serving Petersfield
                <br />
                since [year]
              </div>
            </div>

            <SectionHead
              eyebrow="Our story"
              title="A local kitchen, built on charcoal and consistency"
              lead="Fifteen years on Chapel Street, grilling kebabs the same way: over charcoal, to order, with fresh bread made daily."
            />

            <p
              style={{
                color: "var(--pk-ink-soft)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginTop: "1.2rem",
              }}
            >
              {/* TBC: copy from Grace */}
              The family-run kitchen behind Petersfield's Kebab House has been a
              late-night fixture for locals and a warm stop for passers-through.
              Every mixed grill is cooked over charcoal. Every wrap is rolled to
              order. The menu hasn't changed much in fifteen years — because it
              hasn't needed to.
            </p>

            <p
              style={{
                color: "var(--pk-ink-soft)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginTop: "1rem",
              }}
            >
              {/* TBC: copy from Grace */}
              We're proud of what we do simply: good meat, good bread, fair
              prices, and a team that knows most customers by name.
            </p>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
