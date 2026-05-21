import {
  Button,
  OpeningHours,
  OpenStatus,
  PhotoPlaceholder,
  Section,
  SectionHead,
  Wrap,
} from "@/components/primitives";

const MAP_QUERY = "26+Chapel+Street+Petersfield+GU32+3DT";

export function Visit() {
  return (
    <Section id="visit" band label="Find us">
      <Wrap>
        <div className="visit-grid">
          <div style={{ maxWidth: 480 }}>
            <SectionHead
              eyebrow="Find us"
              title="26 Chapel Street, Petersfield."
              lead="Two minutes from the square. Look for the warm light spilling out the door, smell the charcoal."
              maxWidth={520}
            />

            <div style={{ marginBottom: "1.25rem" }}>
              <OpenStatus />
            </div>

            <address
              style={{
                fontStyle: "normal",
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: "1.1rem",
                lineHeight: 1.55,
                color: "var(--ink)",
                marginBottom: "1.25rem",
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
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <Button
                variant="outline"
                href={`https://maps.google.com/?q=${MAP_QUERY}`}
              >
                Get directions
              </Button>
              <Button variant="primary" href="tel:01730263348">
                <span className="pk-tnum">Call 01730 263348</span>
              </Button>
            </div>

            <OpeningHours />
          </div>

          <div>
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 5",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid var(--rule)",
              }}
            >
              <iframe
                title="Map of 26 Chapel Street, Petersfield"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  filter: "saturate(0.85)",
                }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <PhotoPlaceholder
                tone="warm"
                aspect="16/9"
                alt="Shopfront on Chapel Street at dusk with warm light spilling onto the pavement"
                label="The shopfront at dusk"
                note="Find-us anchor photo · to come from the upcoming shoot"
                style={{ borderRadius: 4 }}
              />
            </div>
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
