import {
  PhotoPlaceholder,
  Section,
  SectionHead,
  Wrap,
} from "@/components/primitives";

export function About() {
  return (
    <Section id="about" label="About">
      <Wrap>
        <div className="about-grid">
          <div>
            <PhotoPlaceholder
              tone="ember"
              aspect="5/4"
              alt="Charcoal grill in action — glowing embers, skewers laid across, hand turning a skewer"
              label="The grill, mid-service"
              note="Mid-section anchor photo — to come from the upcoming shoot"
              style={{ borderRadius: 4 }}
            />
          </div>

          <div style={{ maxWidth: 520 }}>
            <SectionHead
              eyebrow="About"
              title="Same grill. Same butcher. Same regulars."
              lead={null}
              maxWidth={520}
            />
            <p
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: "1.25rem",
                lineHeight: 1.45,
                textWrap: "pretty",
              }}
            >
              Since 2008. Family-run, charcoal-grilled, open till 1am at the
              weekend.
            </p>

            <p
              style={{
                color: "var(--ink-muted)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginTop: "1.2rem",
              }}
            >
              We've been on Chapel Street for the best part of two decades. The
              menu hasn't changed much — because it doesn't need to. Bread is
              made fresh. Lamb is butchered the same way it's always been.
              Everything off the grill is cooked to order.
            </p>

            <p
              style={{
                color: "var(--ink-muted)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginTop: "1rem",
              }}
            >
              If you've been in before, you'll know. If you haven't — come and
              say hi.
            </p>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
