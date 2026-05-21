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
        background: "var(--canvas)",
        borderBottom: "1px solid var(--rule)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div
        className="hdr-wrap"
        style={{
          maxWidth: "var(--wrap-max)",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          className="pk-wordmark"
          style={{
            fontSize: "clamp(1.2rem, 2.4vw, 1.5rem)",
            display: "inline-flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          <span>Petersfield Kebab</span>
          <span
            aria-hidden
            style={{
              width: 1,
              height: 18,
              background: "var(--rule-strong)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
            }}
          >
            Charcoal grill
          </span>
        </Link>

        <nav
          aria-label="Primary"
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="pk-nav-link">
              {item.label}
            </Link>
          ))}
          <a
            href="tel:01730263348"
            className="pk-nav-link pk-tnum"
            style={{ fontWeight: 600 }}
          >
            01730 263348
          </a>
          <a
            href="https://connect.poscraft.co.uk/"
            className="pk-btn pk-btn--primary"
            style={{ padding: "10px 18px", fontSize: "0.72rem" }}
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "var(--surface-inverse)",
        color: "var(--ink-on-dark-soft)",
        padding: "4rem 40px 2.5rem",
        fontFamily: "var(--font-sans)",
        fontSize: "0.88rem",
        letterSpacing: "0.01em",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div
        style={{
          maxWidth: "var(--wrap-max)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <div
              className="pk-wordmark pk-wordmark--on-dark"
              style={{ fontSize: "1.4rem", marginBottom: 6 }}
            >
              Petersfield Kebab
            </div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--saffron)",
              }}
            >
              Charcoal grill · Chapel Street
            </div>
          </div>
          <a
            href="https://connect.poscraft.co.uk/"
            className="pk-btn pk-btn--primary"
          >
            Order online
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <div
              className="pk-eyebrow"
              style={{ color: "var(--saffron)", marginBottom: 12 }}
            >
              Find us
            </div>
            <address
              style={{
                fontStyle: "normal",
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                fontSize: "1rem",
                lineHeight: 1.55,
                color: "var(--ink-on-dark)",
              }}
            >
              26 Chapel Street
              <br />
              Petersfield
              <br />
              Hampshire GU32 3DT
            </address>
            <div style={{ marginTop: "0.9rem" }}>
              <a
                href="tel:01730263348"
                className="pk-tnum"
                style={{
                  color: "var(--saffron)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--saffron)",
                  paddingBottom: 2,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  letterSpacing: "0.02em",
                }}
              >
                01730 263348
              </a>
            </div>
          </div>

          <div>
            <div
              className="pk-eyebrow"
              style={{ color: "var(--saffron)", marginBottom: 12 }}
            >
              Hours
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 500,
                lineHeight: 1.7,
                color: "var(--ink-on-dark)",
              }}
              className="pk-tnum"
            >
              <div>Mon – Thu · 11am – 11pm</div>
              <div>Fri – Sat · 11am – 1am</div>
              <div>Sun · 12pm – 10pm</div>
            </div>
          </div>

          <div>
            <div
              className="pk-eyebrow"
              style={{ color: "var(--saffron)", marginBottom: 12 }}
            >
              Pages
            </div>
            <ul
              style={{
                lineHeight: 2,
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
                    className="pk-nav-link pk-nav-link--on-dark"
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
            marginTop: "3rem",
            paddingTop: "1.4rem",
            borderTop: "1px solid var(--rule-on-dark)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            color: "var(--ink-on-dark-soft)",
          }}
        >
          <div
            style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 8px",
                border: "1px solid var(--saffron)",
                color: "var(--saffron)",
                borderRadius: 2,
                fontWeight: 700,
              }}
            >
              FSA 5★
            </span>
            <span>Food Hygiene Rating</span>
          </div>
          <span>© {new Date().getFullYear()} Petersfield Kebab</span>
        </div>
      </div>
    </footer>
  );
}
