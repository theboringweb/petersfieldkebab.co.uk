import type { Metadata } from "next";
import { Footer, Header } from "@/components/chrome";
import { PhotoPlaceholder, SectionHead, Wrap } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Menu — Petersfield's Kebab House",
  description:
    "Browse our charcoal-grilled kebabs, mixed grills, wraps, burgers and sides. Fresh bread daily, cooked to order.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu — Petersfield's Kebab House",
    description:
      "Browse our charcoal-grilled kebabs, mixed grills, wraps, burgers and sides.",
    url: "https://petersfieldkebab.co.uk/menu",
  },
};

/* ---------- Menu data ---------- */
interface MenuItem {
  name: string;
  description?: string;
  price: string;
  allergen?: string;
  spice?: boolean;
}

interface MenuCategory {
  title: string;
  note?: string;
  items: MenuItem[];
}

const MENU: MenuCategory[] = [
  {
    title: "Charcoal kebabs",
    note: "Served in fresh bread with salad and sauce of your choice",
    items: [
      {
        name: "Lamb doner",
        description: "Thin-sliced lamb, carved from the spit",
        price: "£7.50",
        allergen: "G, M",
      },
      {
        name: "Chicken doner",
        description: "Marinated chicken breast, carved fresh",
        price: "£7.50",
        allergen: "G, M",
      },
      {
        name: "Mixed doner",
        description: "Lamb and chicken together",
        price: "£8.50",
        allergen: "G, M",
      },
      {
        name: "Shish kebab",
        description: "Cubed lamb, marinated overnight, grilled over charcoal",
        price: "£8.95",
        allergen: "G, M",
      },
      {
        name: "Chicken shish",
        description: "Tender chicken pieces, marinated and chargrilled",
        price: "£8.50",
        allergen: "G, M",
      },
      {
        name: "Kofte kebab",
        description: "Spiced lamb mince, hand-rolled and grilled",
        price: "£8.50",
        allergen: "G, M",
        spice: true,
      },
    ],
  },
  {
    title: "Mixed grills",
    note: "All served with rice or chips, salad and bread",
    items: [
      {
        name: "Petersfield mixed grill",
        description: "Lamb shish, chicken shish, kofte and lamb chop",
        price: "£16.95",
        allergen: "G, M",
      },
      {
        name: "Lamb grill",
        description: "Lamb shish, kofte and lamb chop",
        price: "£14.95",
        allergen: "G, M",
      },
      {
        name: "Chicken grill",
        description: "Chicken shish, chicken wings and chicken doner",
        price: "£14.50",
        allergen: "G, M",
      },
      {
        name: "For one",
        description: "Lamb shish, chicken shish and kofte",
        price: "£13.50",
        allergen: "G, M",
      },
    ],
  },
  {
    title: "Wraps",
    note: "Toasted tortilla with salad, sauce and your choice of filling",
    items: [
      { name: "Lamb doner wrap", price: "£6.95", allergen: "G, M, Se" },
      { name: "Chicken doner wrap", price: "£6.95", allergen: "G, M, Se" },
      { name: "Shish wrap", price: "£7.50", allergen: "G, M, Se" },
      { name: "Chicken shish wrap", price: "£7.50", allergen: "G, M, Se" },
      {
        name: "Falafel wrap",
        description: "Crispy falafel with hummus and tahini",
        price: "£6.50",
        allergen: "G, Se, N",
        spice: true,
      },
    ],
  },
  {
    title: "Burgers",
    note: "Served in a brioche bun with lettuce, tomato and house sauce",
    items: [
      {
        name: "Cheeseburger",
        description: "Beef patty with melted cheddar",
        price: "£6.95",
        allergen: "G, M, E, Mu",
      },
      {
        name: "Chicken burger",
        description: "Crispy breadcrumbed chicken breast",
        price: "£6.95",
        allergen: "G, M, E, Mu",
      },
      {
        name: "Lamb burger",
        description: "Lamb patty with mint yoghurt",
        price: "£7.50",
        allergen: "G, M, Mu",
      },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Chips", price: "£2.50" },
      { name: "Cheesy chips", price: "£3.50", allergen: "M" },
      { name: "Onion rings", price: "£3.50", allergen: "G" },
      { name: "Garlic bread", price: "£3.50", allergen: "G, M" },
      {
        name: "Halloumi fries",
        description: "With chilli and mint yoghurt",
        price: "£4.95",
        allergen: "M",
      },
    ],
  },
  {
    title: "Sauces",
    items: [
      { name: "Garlic sauce", price: "£0.80" },
      { name: "Chilli sauce", price: "£0.80", spice: true },
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
        <div className="pk-menu-row__name">
          {item.name}
          {item.spice ? (
            <span style={{ marginLeft: 6, fontSize: ".8rem" }}>🌶️</span>
          ) : null}
        </div>
        {item.description ? (
          <div className="pk-menu-row__desc">{item.description}</div>
        ) : null}
        {item.allergen ? (
          <div
            style={{
              fontSize: ".7rem",
              color: "var(--pk-ink-soft)",
              marginTop: 4,
              opacity: 0.75,
            }}
          >
            Allergens:{" "}
            {item.allergen
              .split(", ")
              .map((a) => ALLERGEN_KEY[a] || a)
              .join(", ")}
          </div>
        ) : null}
      </div>
      <div className="pk-menu-row__price">{item.price}</div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background:
              "radial-gradient(120% 90% at 50% 0%, var(--pk-charcoal-mid), var(--pk-charcoal))",
            color: "var(--pk-cream)",
            padding: "clamp(2.5rem, 6vw, 4rem) 0 clamp(2rem, 4vw, 3rem)",
          }}
        >
          <Wrap>
            <SectionHead
              eyebrow="Our menu"
              title="Charcoal-grilled, cooked to order"
              lead="Every kebab carved fresh. Every grill cooked over charcoal. Bread made daily."
              onDark
              center
              maxWidth={720}
            />
          </Wrap>
        </section>

        {/* Signature photo strip */}
        <section
          style={{ padding: "2rem 0", background: "var(--pk-cream-warm)" }}
        >
          <Wrap>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 14,
              }}
            >
              <PhotoPlaceholder
                kind="dish"
                aspect="4/3"
                label="Lamb doner, carved from the spit"
                note="Concept placeholder"
                kicker="Signature"
                style={{ borderRadius: 4 }}
              />
              <PhotoPlaceholder
                kind="dish"
                aspect="4/3"
                label="Mixed grill with rice and bread"
                note="Concept placeholder"
                kicker="Grill"
                style={{ borderRadius: 4 }}
              />
              <PhotoPlaceholder
                kind="dish"
                aspect="4/3"
                label="Chicken shish, chargrilled and sauced"
                note="Concept placeholder"
                kicker="Charcoal"
                style={{ borderRadius: 4 }}
              />
            </div>
          </Wrap>
        </section>

        {/* Menu categories */}
        <section style={{ padding: "4rem 0 5rem" }}>
          <Wrap>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: ".75rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://connect.poscraft.co.uk/"
                  className="pk-btn pk-btn--primary"
                >
                  Order now
                </a>
                <a
                  href="tel:01730263348"
                  className="pk-btn pk-btn--ghost-light"
                >
                  Call 01730 263348
                </a>
              </div>

              {MENU.map((category) => (
                <section key={category.title} style={{ marginBottom: "3rem" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontVariationSettings: "'SOFT' 20, 'WONK' 1, 'opsz' 144",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: "var(--pk-ink)",
                      marginBottom: ".3rem",
                    }}
                  >
                    {category.title}
                  </h2>
                  {category.note ? (
                    <p
                      style={{
                        fontSize: ".9rem",
                        color: "var(--pk-ink-soft)",
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
                  padding: "1.2rem",
                  background: "var(--pk-cream-warm)",
                  borderRadius: 4,
                  fontSize: ".82rem",
                  color: "var(--pk-ink-soft)",
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ color: "var(--pk-ink)" }}>
                  Allergen key:
                </strong>{" "}
                G = Gluten, M = Milk, E = Egg, N = Nuts, Se = Sesame, Mu =
                Mustard, S = Soya. Please inform us of any allergies before
                ordering.
              </div>
            </div>
          </Wrap>
        </section>
      </main>
      <Footer />
    </>
  );
}
