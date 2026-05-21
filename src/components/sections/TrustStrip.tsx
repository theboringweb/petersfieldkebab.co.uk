import { TrustItem, Wrap } from "@/components/primitives";

export function TrustStrip() {
  return (
    <section
      aria-label="Reputation and location"
      style={{ background: "var(--canvas)", padding: "0" }}
    >
      <Wrap style={{ padding: "0 var(--wrap-pad)" }}>
        <div className="trust-grid">
          <TrustItem
            kicker="Google"
            headline={
              <span>
                <span className="pk-tnum">4.8★</span>{" "}
                <span style={{ color: "var(--saffron)" }}>·</span>{" "}
                <span className="pk-tnum">535</span> reviews
              </span>
            }
            detail="From late-night locals and Hampshire regulars."
            href="https://maps.google.com/?q=Petersfield+Kebab+Chapel+Street"
          />
          <TrustItem
            kicker="Food Hygiene"
            headline={<span>FSA rating 5★</span>}
            detail="Highest standard, last inspection cleared."
          />
          <TrustItem
            kicker="Find us"
            headline={<span>Chapel Street, Petersfield</span>}
            detail="GU32 3DT · two minutes from the square."
            href="https://maps.google.com/?q=26+Chapel+Street+Petersfield+GU32+3DT"
          />
        </div>
      </Wrap>
      <style>
        {`@media (max-width: 900px) {
          .pk-trust-item { border-right: 0 !important; border-bottom: 1px solid var(--rule); }
          .pk-trust-item:last-child { border-bottom: 0; }
        }`}
      </style>
    </section>
  );
}
