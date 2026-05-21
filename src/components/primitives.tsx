import type { CSSProperties, ReactNode } from "react";

/* ---------- Layout helpers ---------- */
export function Wrap({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className="wrap" style={style}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  band,
  dark,
  label,
  style,
}: {
  id?: string;
  children: ReactNode;
  band?: boolean;
  dark?: boolean;
  label?: string;
  style?: CSSProperties;
}) {
  const classes = [
    "section",
    band ? "section--band" : "",
    dark ? "section--dark" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section
      id={id}
      data-screen-label={label}
      className={classes}
      style={style}
    >
      {children}
    </section>
  );
}

/* ---------- Eyebrow / Section head ---------- */
export function Eyebrow({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className="pk-eyebrow" style={style}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  onDark,
  maxWidth = 680,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  onDark?: boolean;
  maxWidth?: number;
}) {
  return (
    <div
      style={{
        maxWidth,
        marginBottom: "3rem",
        marginLeft: center ? "auto" : undefined,
        marginRight: center ? "auto" : undefined,
        textAlign: center ? "center" : undefined,
      }}
    >
      {eyebrow ? (
        <Eyebrow style={{ marginBottom: "1rem" }}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontVariationSettings: "'SOFT' 20, 'WONK' 1, 'opsz' 144",
          fontWeight: 400,
          fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
          letterSpacing: "-.015em",
          lineHeight: 1.08,
          textWrap: "pretty",
          color: onDark ? "var(--pk-amber-soft)" : "var(--pk-ink)",
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p
          style={{
            marginTop: "1.1rem",
            color: onDark ? "rgba(245,239,230,.78)" : "var(--pk-ink-soft)",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            textWrap: "pretty",
          }}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ---------- Button ---------- */
type ButtonVariant = "primary" | "ghost-dark" | "ghost-light";
export function Button({
  children,
  variant = "primary",
  href,
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  href: string;
}) {
  return (
    <a className={`pk-btn pk-btn--${variant}`} href={href}>
      {children}
    </a>
  );
}

/* ---------- Text link ---------- */
export function TextLink({
  children,
  href,
  onDark,
}: {
  children: ReactNode;
  href: string;
  onDark?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: ".95rem",
        color: onDark ? "var(--pk-amber-soft)" : "var(--pk-oxblood)",
        textDecoration: "none",
        borderBottom: "1px solid var(--pk-amber)",
        paddingBottom: 2,
        letterSpacing: ".02em",
      }}
    >
      {children}
    </a>
  );
}

/* ---------- Photo placeholder ---------- */
type PhotoKind = "hero" | "dish" | "place" | "people" | "detail";
const PHOTO_GRADIENTS: Record<PhotoKind, string> = {
  hero: "radial-gradient(120% 90% at 30% 20%, #5c2a14 0%, #1a1614 70%, #0f0d0c 100%)",
  dish: "linear-gradient(160deg, #3a2010, #1a1208)",
  place: "linear-gradient(160deg, #4a2e18, #1a1208)",
  people: "linear-gradient(160deg, #3a2820, #1a1208)",
  detail: "linear-gradient(160deg, #2a2014, #120d07)",
};

export function PhotoPlaceholder({
  kind = "dish",
  label,
  note,
  aspect = "4/3",
  kicker,
  style,
}: {
  kind?: PhotoKind;
  label?: ReactNode;
  note?: ReactNode;
  aspect?: string;
  kicker?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      style={{
        aspectRatio: aspect,
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--pk-rule)",
        background: PHOTO_GRADIENTS[kind],
        margin: 0,
        ...style,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(232,163,61,0.03) 10px, rgba(232,163,61,0.03) 20px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 24,
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: ".6rem",
            letterSpacing: ".28em",
            textTransform: "uppercase",
            color: "var(--pk-amber)",
            fontWeight: 700,
            paddingBottom: 6,
            borderBottom: "1px solid rgba(232,163,61,.35)",
            marginBottom: 6,
          }}
        >
          Photography placeholder
        </div>
        {label ? (
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontVariationSettings: "'opsz' 144, 'SOFT' 30",
              fontSize: "clamp(1.1rem, 2.3vw, 1.5rem)",
              color: "var(--pk-cream)",
              lineHeight: 1.25,
              maxWidth: "78%",
              textWrap: "balance",
            }}
          >
            {label}
          </div>
        ) : null}
        {note ? (
          <div
            style={{
              marginTop: 4,
              fontFamily: "var(--font-sans)",
              fontSize: ".72rem",
              color: "rgba(245,239,230,.62)",
              lineHeight: 1.55,
              maxWidth: "72%",
              letterSpacing: ".02em",
              textWrap: "pretty",
            }}
          >
            {note}
          </div>
        ) : null}
      </div>
      {kicker ? (
        <figcaption
          style={{
            position: "absolute",
            bottom: 12,
            left: 18,
            fontFamily: "var(--font-sans)",
            fontSize: ".6rem",
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "rgba(232,163,61,.85)",
            fontWeight: 700,
          }}
        >
          {kicker}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ---------- Heritage badge ---------- */
export function HeritageBadge({
  year = 2008,
  town = "Petersfield",
  size = 108,
  tone = "light",
}: {
  year?: number;
  town?: string;
  size?: number;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: dark
          ? "1px solid rgba(232,163,61,.45)"
          : "1px solid var(--pk-amber)",
        background: dark ? "transparent" : "var(--bg-elev)",
        boxShadow: dark
          ? "inset 0 0 0 4px transparent, inset 0 0 0 5px rgba(232,163,61,.25)"
          : "inset 0 0 0 4px var(--bg-elev), inset 0 0 0 5px rgba(232,163,61,.4)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        flex: "none",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: size * 0.075,
          letterSpacing: ".22em",
          fontWeight: 700,
          color: dark ? "var(--pk-amber-soft)" : "var(--pk-amber)",
        }}
      >
        EST.
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: size * 0.27,
          lineHeight: 1,
          color: dark ? "var(--pk-cream)" : "var(--pk-ink)",
          fontVariationSettings: "'opsz' 144, 'SOFT' 30",
        }}
      >
        {year}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: size * 0.065,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: dark ? "rgba(245,239,230,.7)" : "var(--pk-ink-soft)",
          fontWeight: 600,
        }}
      >
        {town}
      </div>
    </div>
  );
}

/* ---------- Star rating ---------- */
export function StarRating({
  rating = 4.8,
  count = 535,
}: {
  rating?: number;
  count?: number;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: ".88rem",
        color: "var(--pk-ink-soft)",
      }}
    >
      <span style={{ color: "var(--pk-amber)", fontSize: "1.05rem" }}>★</span>
      <span style={{ fontWeight: 600 }}>{rating.toFixed(1)}</span>
      <span style={{ color: "var(--pk-ink-soft)", opacity: 0.7 }}>·</span>
      <span>{count.toLocaleString("en-GB")} Google reviews</span>
    </div>
  );
}

/* ---------- Opening hours with live status ---------- */
const HOURS: Record<
  number,
  { day: string; hours: string; open: string; close: string }
> = {
  0: { day: "Sunday", hours: "12pm – 10pm", open: "12:00", close: "22:00" },
  1: { day: "Monday", hours: "11am – 11pm", open: "11:00", close: "23:00" },
  2: { day: "Tuesday", hours: "11am – 11pm", open: "11:00", close: "23:00" },
  3: { day: "Wednesday", hours: "11am – 11pm", open: "11:00", close: "23:00" },
  4: { day: "Thursday", hours: "11am – 11pm", open: "11:00", close: "23:00" },
  5: { day: "Friday", hours: "11am – 12am", open: "11:00", close: "00:00" },
  6: { day: "Saturday", hours: "11am – 12am", open: "11:00", close: "00:00" },
};

export function OpeningHours() {
  const now = new Date();
  const dayIndex = now.getDay();

  return (
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
        Opening hours
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          lineHeight: 1.65,
          color: "var(--fg-on-dark)",
        }}
      >
        {Object.entries(HOURS).map(([idx, h]) => {
          const i = Number(idx);
          const isToday = i === dayIndex;
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                paddingBottom: 6,
                borderBottom: isToday
                  ? "1px solid rgba(232,163,61,.25)"
                  : "1px solid transparent",
                marginBottom: isToday ? 6 : 0,
              }}
            >
              <span
                style={{
                  fontWeight: isToday ? 600 : 400,
                  color: isToday ? "var(--pk-amber-soft)" : "inherit",
                }}
              >
                {h.day}
              </span>
              <span>{h.hours}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
