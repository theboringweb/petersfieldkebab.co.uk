import { Section, SectionHead, Wrap } from "@/components/primitives";

type Review = { quote: string; name: string; when: string };

const REVIEWS: Review[] = [
  {
    quote:
      "Best kebab south of London. The lamb is cooked properly over charcoal — you can tell. We drive over from Liphook for it.",
    name: "Sarah",
    when: "Local guide · last month",
  },
  {
    quote:
      "Open when nothing else is, always polite, and a doner that actually tastes of something. Petersfield's worst-kept secret.",
    name: "James",
    when: "Reviewed 3 weeks ago",
  },
  {
    quote:
      "The mixed grill is a properly generous plate. Bread fresh, salad fresh, chips hot. Family-run and it shows.",
    name: "Hannah",
    when: "Reviewed 2 months ago",
  },
];

function Stars() {
  return (
    <span
      role="img"
      aria-label="5 stars"
      style={{
        color: "var(--gold)",
        fontSize: "0.95rem",
        letterSpacing: "0.08em",
      }}
    >
      ★★★★★
    </span>
  );
}

export function Reviews() {
  return (
    <Section id="reviews" label="Reviews">
      <Wrap>
        <SectionHead
          eyebrow="Reviews"
          title="What the regulars say."
          lead="4.8 stars · 535 Google reviews. A few we keep coming back to."
          maxWidth={620}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="pk-reviews-grid"
        >
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              style={{
                padding: "1.75rem",
                background: "var(--canvas-soft)",
                border: "1px solid var(--rule)",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Stars />
              <blockquote
                style={{
                  fontWeight: 500,
                  fontSize: "1.05rem",
                  lineHeight: 1.5,
                  color: "var(--ink)",
                  textWrap: "pretty",
                }}
              >
                <span style={{ color: "var(--gold-deep)", marginRight: 4 }}>
                  “
                </span>
                {r.quote}
                <span style={{ color: "var(--gold-deep)", marginLeft: 2 }}>
                  ”
                </span>
              </blockquote>
              <figcaption
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  fontFamily: "var(--font-body)",
                  color: "var(--ink-muted)",
                  fontSize: "0.85rem",
                }}
              >
                <span
                  style={{
                    color: "var(--ink)",
                    fontWeight: 600,
                  }}
                >
                  {r.name}
                </span>
                <span style={{ fontSize: "0.78rem" }}>{r.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Wrap>
      <style>
        {`@media (max-width: 880px) {
          .pk-reviews-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }`}
      </style>
    </Section>
  );
}
