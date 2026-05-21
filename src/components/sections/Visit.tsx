import {
  OpeningHours,
  PhotoPlaceholder,
  Section,
  SectionHead,
  Wrap,
} from "@/components/primitives";

export function Visit() {
  return (
    <Section id="visit" dark label="Find us">
      <Wrap>
        <div className="visit-grid">
          <div style={{ maxWidth: 480 }}>
            <SectionHead
              eyebrow="Find us"
              title="26 Chapel Street, Petersfield"
              lead="Right in the heart of town. We're easy to find — look for the warm lights and the charcoal smoke."
              onDark
            />

            <address
              style={{
                fontStyle: "normal",
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                lineHeight: 1.55,
                color: "rgba(245,239,230,.9)",
                marginBottom: "1.5rem",
              }}
            >
              26 Chapel Street
              <br />
              Petersfield
              <br />
              Hampshire GU32 3DT
            </address>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".75rem",
                marginBottom: "2rem",
              }}
            >
              <a
                href="https://maps.google.com/?q=26+Chapel+Street+Petersfield+GU32+3DT"
                target="_blank"
                rel="noopener noreferrer"
                className="pk-btn pk-btn--ghost-dark"
                style={{ fontSize: ".72rem", padding: "14px 24px" }}
              >
                Get directions
              </a>
              <a
                href="tel:01730263348"
                className="pk-btn pk-btn--primary"
                style={{ fontSize: ".72rem", padding: "14px 24px" }}
              >
                Call now
              </a>
            </div>

            <OpeningHours />
          </div>

          <div>
            <PhotoPlaceholder
              kind="place"
              aspect="4/3"
              label="Map location — 26 Chapel Street, Petersfield"
              note="Placeholder for embedded map or street photograph"
              kicker="Map"
              style={{ borderRadius: 4 }}
            />
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
