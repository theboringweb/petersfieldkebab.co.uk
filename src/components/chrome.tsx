import Link from "next/link";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/#about" },
  { label: "Find us", href: "/#visit" },
];

export function Header() {
  return (
    <header
      style={{
        background:
          "radial-gradient(140% 120% at 50% 0%, var(--pk-charcoal-mid), var(--pk-charcoal))",
        color: "var(--pk-cream)",
        borderBottom: "1px solid rgba(232,163,61,.15)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div
        className="hdr-wrap"
        style={{
          maxWidth: "var(--wrap-max)",
          margin: "0 auto",
          padding: "18px 40px 22px",
        }}
      >
        {/* utility strip */}
        <div
          className="hdr-utility"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-sans)",
            fontSize: ".68rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "rgba(245,239,230,.6)",
          }}
        >
          <a
            href="tel:01730263348"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            T ·{" "}
            <span style={{ color: "var(--pk-amber-soft)" }}>01730 263348</span>
          </a>
          <nav aria-label="Primary" style={{ display: "flex", gap: "1.8rem" }}>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="pk-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* wordmark block */}
        <div style={{ textAlign: "center", marginTop: 14 }}>
          <Link
            href="/"
            className="pk-wordmark"
            style={{
              display: "inline-block",
              fontSize: "clamp(1.35rem, 3vw, 1.8rem)",
            }}
          >
            Petersfield's Kebab House
          </Link>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: ".6rem",
              letterSpacing: ".38em",
              textTransform: "uppercase",
              color: "var(--pk-cream)",
              opacity: 0.7,
              marginTop: 6,
              paddingLeft: ".38em",
            }}
          >
            Charcoal grill · Chapel Street
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "var(--pk-charcoal)",
        color: "rgba(245,239,230,.6)",
        padding: "4rem 40px 2.5rem",
        fontFamily: "var(--font-sans)",
        fontSize: ".84rem",
        letterSpacing: ".02em",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div
        style={{
          maxWidth: "var(--wrap-max)",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            className="pk-wordmark"
            style={{
              display: "inline-block",
              fontSize: "1.35rem",
              marginBottom: 6,
            }}
          >
            Petersfield's Kebab House
          </div>
          <div
            style={{
              fontSize: ".6rem",
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "rgba(245,239,230,.5)",
              marginBottom: "2rem",
              paddingLeft: ".32em",
            }}
          >
            Est. [year] · Petersfield
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(232,163,61,.18)",
            maxWidth: 220,
            margin: "0 auto 2.2rem",
          }}
        />

        <div className="footer-grid" style={{ color: "rgba(245,239,230,.72)" }}>
          <div>
            <div
              style={{
                fontSize: ".66rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--pk-amber)",
                marginBottom: ".8rem",
              }}
            >
              Find us
            </div>
            <address
              style={{
                fontStyle: "normal",
                fontFamily: "var(--font-serif)",
                fontSize: "1rem",
                lineHeight: 1.55,
                color: "rgba(245,239,230,.85)",
              }}
            >
              26 Chapel Street
              <br />
              Petersfield
              <br />
              Hampshire GU32 3DT
            </address>
            <div style={{ marginTop: "1rem" }}>
              <a
                href="tel:01730263348"
                style={{
                  color: "var(--pk-amber-soft)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--pk-amber)",
                  paddingBottom: 2,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: ".95rem",
                  letterSpacing: ".04em",
                }}
              >
                01730 263348
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: ".66rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--pk-amber)",
                marginBottom: ".8rem",
              }}
            >
              Hours
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                lineHeight: 1.65,
                color: "rgba(245,239,230,.85)",
              }}
            >
              <div>Mon – Thu · 11am – 11pm</div>
              <div>Fri – Sat · 11am – 12am</div>
              <div>Sun · 12pm – 10pm</div>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: ".66rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "var(--pk-amber)",
                marginBottom: ".8rem",
              }}
            >
              The pages
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: 1.95,
                fontFamily: "var(--font-sans)",
              }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "About", href: "/#about" },
                { label: "Find us", href: "/#visit" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      color: "rgba(245,239,230,.78)",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(232,163,61,.3)",
                      paddingBottom: 2,
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: "2.8rem",
            paddingTop: "1.4rem",
            borderTop: "1px solid rgba(232,163,61,.15)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: ".7rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "rgba(245,239,230,.35)",
          }}
        >
          <span>© Petersfield's Kebab House</span>
          <span>Concept build — May 2026</span>
        </div>
      </div>
    </footer>
  );
}
