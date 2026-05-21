import type { Metadata } from "next";
import { Footer, Header } from "@/components/chrome";
import {
  Button,
  Chip,
  PhotoPlaceholder,
  Section,
  SectionHead,
  Wrap,
} from "@/components/primitives";
import { StickyBar } from "@/components/sections/StickyBar";

export const metadata: Metadata = {
  title: "Menu — Petersfield Kebab",
  description:
    "Charcoal-grilled kebabs, mixed grills, wraps, burgers and sides. Fresh bread, cooked to order on Chapel Street, Petersfield.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu — Petersfield Kebab",
    description:
      "Charcoal-grilled kebabs, mixed grills, wraps, burgers and sides.",
    url: "https://petersfieldkebab.co.uk/menu",
  },
};

/* ---------- Menu data ---------- */
type ChipTone = "default" | "hot" | "mild" | "veggie" | "signature";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  allergens?: string[];
  chips?: { label: string; tone?: ChipTone }[];
}

interface MenuCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

const MENU: MenuCategory[] = [
  {
    title: "Charcoal kebabs",
    note: "Served in fresh lavash with salad and sauce of your choice.",
    items: [
      {
        name: "Lamb doner",
        description: "Thin-sliced lamb, carved from the spit.",
        price: "£7.50",
        allergens: ["G", "M"],
        chips: [{ label: "Signature", tone: "signature" }],
      },
      {
        name: "Chicken doner",
        description: "Marinated chicken breast, carved fresh.",
        price: "£7.50",
        allergens: ["G", "M"],
      },
      {
        name: "Mixed doner",
        description: "Lamb and chicken together.",
        price: "£8.50",
        allergens: ["G", "M"],
      },
      {
        name: "Lamb shish",
        description: "Cubed lamb, marinated overnight, grilled over charcoal.",
        price: "£8.95",
        allergens: ["G", "M"],
        chips: [{ label: "Signature", tone: "signature" }],
      },
      {
        name: "Chicken shish",
        description: "Tender chicken pieces, marinated and chargrilled.",
        price: "£8.50",
        allergens: ["G", "M"],
        chips: [{ label: "Lean", tone: "mild" }],
      },
      {
        name: "Adana kofte",
        description: "Spiced lamb mince, hand-rolled and grilled.",
        price: "£8.50",
        allergens: ["G", "M"],
        chips: [{ label: "Hot", tone: "hot" }],
      },
    ],
  },
  {
    title: "Mixed grills",
    note: "All served with rice or chips, salad and bread.",
    items: [
      {
        name: "Petersfield mixed grill",
        description: "Lamb shish, chicken shish, kofte and lamb chop.",
        price: "£16.95",
        allergens: ["G", "M"],
        chips: [
          { label: "For two", tone: "default" },
          { label: "Signature", tone: "signature" },
        ],
      },
      {
        name: "Lamb grill",
        description: "Lamb shish, kofte and lamb chop.",
        price: "£14.95",
        allergens: ["G", "M"],
      },
      {
        name: "Chicken grill",
        description: "Chicken shish, chicken wings and chicken doner.",
        price: "£14.50",
        allergens: ["G", "M"],
      },
      {
        name: "Grill for one",
        description: "Lamb shish, chicken shish and kofte.",
        price: "£13.50",
        allergens: ["G", "M"],
      },
    ],
  },
  {
    title: "Wraps",
    note: "Hot lavash wrap with salad, sauce and your choice of filling.",
    items: [
      {
        name: "Lamb doner wrap",
        price: "£6.95",
        allergens: ["G", "M", "Se"],
        chips: [{ label: "Signature", tone: "signature" }],
      },
      {
        name: "Chicken doner wrap",
        price: "£6.95",
        allergens: ["G", "M", "Se"],
      },
      { name: "Lamb shish wrap", price: "£7.50", allergens: ["G", "M", "Se"] },
      {
        name: "Chicken shish wrap",
        price: "£7.50",
        allergens: ["G", "M", "Se"],
      },
      {
        name: "Falafel wrap",
        description: "Crispy falafel with hummus and tahini.",
        price: "£6.50",
        allergens: ["G", "Se", "N"],
        chips: [{ label: "Vegan", tone: "veggie" }],
      },
    ],
  },
  {
    title: "Burgers",
    note: "Brioche bun, lettuce, tomato, house sauce.",
    items: [
      {
        name: "Cheeseburger",
        description: "Beef patty with melted cheddar.",
        price: "£6.95",
        allergens: ["G", "M", "E", "Mu"],
      },
      {
        name: "Chicken burger",
        description: "Crispy breadcrumbed chicken breast.",
        price: "£6.95",
        allergens: ["G", "M", "E", "Mu"],
      },
      {
        name: "Lamb burger",
        description: "Lamb patty with mint yoghurt.",
        price: "£7.50",
        allergens: ["G", "M", "Mu"],
      },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Chips", price: "£2.50" },
      { name: "Cheesy chips", price: "£3.50", allergens: ["M"] },
      { name: "Onion rings", price: "£3.50", allergens: ["G"] },
      { name: "Garlic bread", price: "£3.50", allergens: ["G", "M"] },
      {
        name: "Halloumi fries",
        description: "With chilli and mint yoghurt.",
        price: "£4.95",
        allergens: ["M"],
        chips: [{ label: "Veggie", tone: "veggie" }],
      },
    ],
  },
  {
    title: "Sauces",
    items: [
      { name: "Garlic sauce", price: "£0.80" },
      {
        name: "Chilli sauce",
        price: "£0.80",
        chips: [{ label: "Hot", tone: "hot" }],
      },
      { name: "BBQ sauce", price: "£0.80" },
      { name: "Ketchup", price: "£0.80" },
    ],
  },
];

const ALLERGEN_KEY: Record<string, string> = {
  G: "Gluten",
  M: "Milk",
  E: "Egg",
  N: "Nuts",
  Se: "Sesame",
  Mu: "Mustard",
  S: "Soya",
};

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <div className="pk-menu-row">
      <div style={{ minWidth: 0 }}>
        <div className="pk-menu-row__name">{item.name}</div>
        {item.description ? (
          <div className="pk-menu-row__desc">{item.description}</div>
        ) : null}
        {(item.chips?.length || item.allergens?.length) && (
          <div className="pk-menu-row__meta">
            {item.chips?.map((c) => (
              <Chip key={c.label} tone={c.tone}>
                {c.label}
              </Chip>
            ))}
            {item.allergens?.length ? (
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--ink-soft)",
                  alignSelf: "center",
                }}
              >
                Allergens:{" "}
                {item.allergens.map((a) => ALLERGEN_KEY[a] || a).join(", ")}
              </span>
            ) : null}
          </div>
        )}
      </div>
      <div className="pk-menu-row__price pk-tnum">{item.price}</div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero band — inverse */}
        <section
          style={{
            background: "var(--surface-inverse)",
            color: "var(--ink-on-dark)",
            padding: "clamp(3rem, 6vw, 4.5rem) 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(60% 80% at 80% 30%, rgba(248,192,40,0.18) 0%, transparent 60%)," +
                "radial-gradient(50% 70% at 20% 80%, rgba(80,80,88,0.45) 0%, transparent 60%)",
            }}
          />
          <Wrap style={{ position: "relative" }}>
            <SectionHead
              eyebrow="The menu"
              title="The full menu."
              lead="Every kebab carved fresh. Every grill cooked over charcoal. Bread made daily."
              onDark
              center
              maxWidth={720}
            />
          </Wrap>
        </section>

        {/* Featured signature strip */}
        <Section tight>
          <Wrap>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 18,
              }}
              className="pk-feature-grid"
            >
              {[
                {
                  alt: "Lamb doner, carved from the spit, dripping juice into hot lavash",
                  label: "Lamb doner",
                  tone: "warm" as const,
                  note: "Signature · £7.50",
                },
                {
                  alt: "Mixed grill platter — shish, kofte, lamb chop, rice and bread",
                  label: "Petersfield mixed grill",
                  tone: "ember" as const,
                  note: "Signature · £16.95",
                },
                {
                  alt: "Chicken shish skewer, chargrilled, with rice and salad",
                  label: "Chicken shish",
                  tone: "warm" as const,
                  note: "Lean · £8.50",
                },
              ].map((p) => (
                <PhotoPlaceholder
                  key={p.label}
                  tone={p.tone}
                  aspect="4/3"
                  alt={p.alt}
                  label={p.label}
                  note={p.note}
                  style={{ borderRadius: 4 }}
                />
              ))}
            </div>
          </Wrap>
          <style>
            {`@media (max-width: 800px) {
              .pk-feature-grid { grid-template-columns: 1fr !important; }
            }`}
          </style>
        </Section>

        {/* Menu categories */}
        <Section>
          <Wrap>
            <div style={{ maxWidth: 780, margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.75rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="primary"
                  href="https://connect.poscraft.co.uk/"
                >
                  Order online
                </Button>
                <Button variant="outline" href="tel:01730263348">
                  <span className="pk-tnum">Call 01730 263348</span>
                </Button>
              </div>

              {MENU.map((category) => (
                <section key={category.title} style={{ marginBottom: "3rem" }}>
                  <div className="pk-gold-rule" style={{ marginBottom: 14 }} />
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 600,
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "var(--ink)",
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {category.title}
                  </h2>
                  {category.note ? (
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--ink-muted)",
                        marginBottom: "1rem",
                      }}
                    >
                      {category.note}
                    </p>
                  ) : null}
                  <div>
                    {category.items.map((item) => (
                      <MenuRow
                        key={`${category.title}-${item.name}`}
                        item={item}
                      />
                    ))}
                  </div>
                </section>
              ))}

              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.4rem 1.6rem",
                  background: "var(--canvas-warm)",
                  borderRadius: 4,
                  fontSize: "0.88rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ color: "var(--ink)" }}>Allergen key:</strong> G
                = Gluten, M = Milk, E = Egg, N = Nuts, Se = Sesame, Mu =
                Mustard, S = Soya. Please tell us about any allergies before
                ordering — most dishes can be adapted.
              </div>
            </div>
          </Wrap>
        </Section>
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
