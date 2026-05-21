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
  inverse,
  tight,
  label,
  style,
}: {
  id?: string;
  children: ReactNode;
  band?: boolean;
  inverse?: boolean;
  tight?: boolean;
  label?: string;
  style?: CSSProperties;
}) {
  const classes = [
    "section",
    band ? "section--band" : "",
    inverse ? "section--inverse" : "",
    tight ? "section--tight" : "",
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
  onDark,
  gold,
  style,
}: {
  children: ReactNode;
  onDark?: boolean;
  gold?: boolean;
  style?: CSSProperties;
}) {
  const classes = [
    "pk-eyebrow",
    onDark ? "pk-eyebrow--on-dark" : "",
    gold ? "pk-eyebrow--gold" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} style={style}>
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
  goldRule = true,
  maxWidth = 680,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  onDark?: boolean;
  goldRule?: boolean;
  maxWidth?: number;
}) {
  return (
    <div
      style={{
        maxWidth,
        marginBottom: "2.5rem",
        marginLeft: center ? "auto" : undefined,
        marginRight: center ? "auto" : undefined,
        textAlign: center ? "center" : undefined,
      }}
    >
      {goldRule ? (
        <div
          className={`pk-gold-rule${center ? " pk-gold-rule--center" : ""}`}
        />
      ) : null}
      {eyebrow ? (
        <Eyebrow onDark={onDark} style={{ marginBottom: "0.75rem" }}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
          letterSpacing: "-0.015em",
          lineHeight: 1.1,
          textWrap: "pretty",
          color: onDark ? "var(--ink-on-dark)" : "var(--ink)",
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p
          style={{
            marginTop: "1rem",
            color: onDark ? "var(--ink-on-dark-soft)" : "var(--ink-muted)",
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
type ButtonVariant = "primary" | "outline" | "outline-on-dark";
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
        fontSize: "0.95rem",
        color: onDark ? "var(--ink-on-dark)" : "var(--ink)",
        textDecoration: "none",
        borderBottom: `2px solid var(--gold)`,
        paddingBottom: 2,
      }}
    >
      {children}
    </a>
  );
}

/* ---------- Chip ---------- */
type ChipTone = "default" | "hot" | "mild" | "veggie" | "signature";
export function Chip({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: ChipTone;
}) {
  const cls = tone === "default" ? "pk-chip" : `pk-chip pk-chip--${tone}`;
  return <span className={cls}>{children}</span>;
}

/* ---------- Chevron rule (single ornament, lifted from the badge) ----------
   The wordmark on the badge separates KEBAB > HOUSE with this chevron — the
   only piece of styling unique to the brand. Used 2–3 times per page max. */
export function ChevronRule({ onDark = false }: { onDark?: boolean }) {
  const colour = onDark ? "var(--gold)" : "var(--ink)";
  const lineColour = onDark ? "var(--rule-on-dark)" : "var(--rule)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        padding: "1.5rem 0",
      }}
      aria-hidden
    >
      <span
        style={{
          flex: 1,
          height: 1,
          background: lineColour,
          maxWidth: 220,
        }}
      />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flex: "none" }}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6.5 3.5 L13 10 L6.5 16.5"
          stroke={colour}
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
      </svg>
      <span
        style={{
          flex: 1,
          height: 1,
          background: lineColour,
          maxWidth: 220,
        }}
      />
    </div>
  );
}

/* ---------- Photo placeholder (cuisine-coded, concept-honest) ---------- */
type PhotoTone = "warm" | "ember" | "cream";
export function PhotoPlaceholder({
  tone = "warm",
  label,
  note,
  aspect = "4/3",
  alt,
  style,
}: {
  tone?: PhotoTone;
  label?: ReactNode;
  note?: ReactNode;
  aspect?: string;
  alt: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={`pk-photo pk-photo--${tone}`}
      role="img"
      aria-label={`Concept placeholder — ${alt}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      <div className="pk-photo__overlay" />
      <div className="pk-photo__caption">
        <span className="pk-photo__tag">Concept placeholder</span>
        {label ? <div className="pk-photo__title">{label}</div> : null}
        {note ? <div className="pk-photo__note">{note}</div> : null}
      </div>
    </figure>
  );
}

/* ---------- Dish tile (homepage 6-up grid) ---------- */
export function DishTile({
  name,
  price,
  alt,
  caption,
  chips = [],
  tone = "warm",
}: {
  name: string;
  price: string;
  alt: string;
  caption?: string;
  chips?: { label: string; tone?: ChipTone }[];
  tone?: PhotoTone;
}) {
  return (
    <article className="pk-dish-tile">
      <PhotoPlaceholder
        tone={tone}
        aspect="4/3"
        alt={alt}
        label={name}
        note={caption}
        style={{ borderRadius: 0 }}
      />
      <div className="pk-dish-tile__body">
        <div className="pk-dish-tile__title">
          <div className="pk-dish-tile__name">{name}</div>
          <div className="pk-dish-tile__price pk-tnum">{price}</div>
        </div>
        {chips.length > 0 ? (
          <div className="pk-dish-tile__meta">
            {chips.map((c) => (
              <Chip key={c.label} tone={c.tone}>
                {c.label}
              </Chip>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

/* ---------- Trust strip item ---------- */
export function TrustItem({
  kicker,
  headline,
  detail,
  href,
}: {
  kicker: string;
  headline: ReactNode;
  detail: ReactNode;
  href?: string;
}) {
  const inner = (
    <div
      style={{
        padding: "1.5rem 1.25rem",
        textAlign: "center",
        borderRight: "1px solid var(--rule)",
        height: "100%",
      }}
      className="pk-trust-item"
    >
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.66rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-muted)",
          marginBottom: 8,
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 600,
          fontSize: "1.25rem",
          color: "var(--ink)",
          lineHeight: 1.2,
        }}
      >
        {headline}
      </div>
      <div
        style={{
          marginTop: 4,
          fontFamily: "var(--font-sans)",
          fontSize: "0.82rem",
          color: "var(--ink-muted)",
        }}
      >
        {detail}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {inner}
      </a>
    );
  }
  return inner;
}

/* ---------- Star rating ---------- */
export function StarRating({
  rating = 4.8,
  count = 535,
  compact = false,
  onDark = false,
}: {
  rating?: number;
  count?: number;
  compact?: boolean;
  onDark?: boolean;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: compact ? "0.82rem" : "0.92rem",
        color: onDark ? "var(--ink-on-dark-soft)" : "var(--ink-muted)",
      }}
    >
      <span
        style={{
          color: "var(--gold)",
          fontSize: compact ? "1rem" : "1.1rem",
          letterSpacing: "0.05em",
        }}
        aria-hidden
      >
        ★★★★★
      </span>
      <span style={{ fontWeight: 600 }} className="pk-tnum">
        {rating.toFixed(1)}
      </span>
      <span aria-hidden style={{ opacity: 0.55 }}>
        ·
      </span>
      <span>{count.toLocaleString("en-GB")} Google reviews</span>
    </div>
  );
}

/* ---------- Opening hours + live status ---------- */
const HOURS: Record<
  number,
  {
    day: string;
    short: string;
    hours: string;
    openMin: number;
    closeMin: number;
  }
> = {
  0: {
    day: "Sunday",
    short: "Sun",
    hours: "12pm – 10pm",
    openMin: 12 * 60,
    closeMin: 22 * 60,
  },
  1: {
    day: "Monday",
    short: "Mon",
    hours: "11am – 11pm",
    openMin: 11 * 60,
    closeMin: 23 * 60,
  },
  2: {
    day: "Tuesday",
    short: "Tue",
    hours: "11am – 11pm",
    openMin: 11 * 60,
    closeMin: 23 * 60,
  },
  3: {
    day: "Wednesday",
    short: "Wed",
    hours: "11am – 11pm",
    openMin: 11 * 60,
    closeMin: 23 * 60,
  },
  4: {
    day: "Thursday",
    short: "Thu",
    hours: "11am – 11pm",
    openMin: 11 * 60,
    closeMin: 23 * 60,
  },
  5: {
    day: "Friday",
    short: "Fri",
    hours: "11am – 1am",
    openMin: 11 * 60,
    closeMin: 25 * 60, // 1am next day
  },
  6: {
    day: "Saturday",
    short: "Sat",
    hours: "11am – 1am",
    openMin: 11 * 60,
    closeMin: 25 * 60,
  },
};

function formatClose(minutes: number): string {
  const m = minutes % (24 * 60);
  const hour = Math.floor(m / 60);
  const display =
    hour === 0
      ? "midnight"
      : hour === 12
        ? "12pm"
        : hour > 12
          ? `${hour - 12}pm`
          : `${hour}am`;
  return display;
}

function computeStatus(now: Date) {
  const day = now.getDay();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const today = HOURS[day];
  if (nowMin >= today.openMin && nowMin < today.closeMin) {
    return {
      open: true,
      label: `Open now · closes ${formatClose(today.closeMin)}`,
    };
  }
  const yesterday = HOURS[(day + 6) % 7];
  if (yesterday.closeMin > 24 * 60 && nowMin < yesterday.closeMin - 24 * 60) {
    return {
      open: true,
      label: `Open now · closes ${formatClose(yesterday.closeMin)}`,
    };
  }
  if (nowMin < today.openMin) {
    return {
      open: false,
      label: `Closed · opens ${formatOpen(today.openMin)}`,
    };
  }
  const tomorrow = HOURS[(day + 1) % 7];
  return {
    open: false,
    label: `Closed · opens ${tomorrow.short} ${formatOpen(tomorrow.openMin)}`,
  };
}

function formatOpen(minutes: number): string {
  const hour = Math.floor(minutes / 60);
  return hour === 12 ? "12pm" : hour > 12 ? `${hour - 12}pm` : `${hour}am`;
}

export function OpenStatus() {
  const status = computeStatus(new Date());
  return (
    <span
      className={`pk-chip pk-chip--${status.open ? "open" : "closed"}`}
      style={{ fontSize: "0.7rem" }}
      aria-live="polite"
    >
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: status.open ? "var(--ink)" : "var(--canvas)",
          marginRight: 6,
          boxShadow: status.open ? "0 0 0 3px rgba(31,33,38,0.15)" : "none",
        }}
      />
      {status.label}
    </span>
  );
}

export function OpeningHours({ onDark = false }: { onDark?: boolean }) {
  const today = new Date().getDay();
  return (
    <div>
      <div
        className="pk-eyebrow"
        style={{
          color: onDark ? "var(--gold)" : "var(--ink-muted)",
          marginBottom: 12,
        }}
      >
        Opening hours
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: onDark ? "var(--ink-on-dark)" : "var(--ink)",
        }}
      >
        {Object.entries(HOURS).map(([idx, h]) => {
          const isToday = Number(idx) === today;
          return (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "6px 0",
                borderBottom: `1px solid ${onDark ? "var(--rule-on-dark)" : "var(--rule)"}`,
                fontWeight: isToday ? 600 : 400,
                color: isToday
                  ? onDark
                    ? "var(--gold)"
                    : "var(--ink)"
                  : "inherit",
              }}
            >
              <span>
                {h.day}
                {isToday ? " · today" : ""}
              </span>
              <span className="pk-tnum">{h.hours}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
