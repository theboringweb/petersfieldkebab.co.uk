import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/#about" },
  { label: "Find us", href: "/#visit" },
];

const LOGO_W = 921;
const LOGO_H = 851;
const LOGO_ASPECT = LOGO_W / LOGO_H;

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
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          aria-label="Petersfield Kebab House — home"
          className="pk-logo-link pk-logo-link--header"
        >
          <Image
            src="/brand/logo-full.png"
            alt="Petersfield Kebab House"
            width={LOGO_W}
            height={LOGO_H}
            priority
            sizes="(max-width: 640px) 44px, 56px"
            style={{
              height: 56,
              width: 56 * LOGO_ASPECT,
              display: "block",
            }}
          />
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
      <style>
        {`@media (max-width: 640px) {
          .pk-logo-link--header img { height: 44px !important; width: ${44 * LOGO_ASPECT}px !important; }
        }`}
      </style>
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
            gap: "1.5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            aria-label="Petersfield Kebab House — home"
            className="pk-logo-link"
          >
            <Image
              src="/brand/logo-full.png"
              alt="Petersfield Kebab House"
              width={LOGO_W}
              height={LOGO_H}
              sizes="96px"
              style={{
                height: 96,
                width: 96 * LOGO_ASPECT,
                display: "block",
              }}
            />
          </Link>
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
              style={{ color: "var(--gold)", marginBottom: 12 }}
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
                  color: "var(--gold)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--gold)",
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
              style={{ color: "var(--gold)", marginBottom: 12 }}
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
              style={{ color: "var(--gold)", marginBottom: 12 }}
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
                border: "1px solid var(--gold)",
                color: "var(--gold)",
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
