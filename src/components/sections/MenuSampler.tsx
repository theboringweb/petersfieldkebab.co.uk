import {
  Button,
  ChevronRule,
  Chip,
  Section,
  SectionHead,
  Wrap,
} from "@/components/primitives";

type SampleItem = {
  name: string;
  desc: string;
  price: string;
  chips?: {
    label: string;
    tone?: "default" | "hot" | "mild" | "veggie" | "signature";
  }[];
};

const SAMPLE: SampleItem[] = [
  {
    name: "Lamb doner",
    desc: "Thin-sliced lamb, carved from the spit, in fresh lavash.",
    price: "£7.50",
    chips: [{ label: "Signature", tone: "signature" }],
  },
  {
    name: "Chicken shish",
    desc: "Marinated chicken breast, chargrilled, with rice and salad.",
    price: "£8.50",
    chips: [{ label: "Lean", tone: "mild" }],
  },
  {
    name: "Adana kofte",
    desc: "Spiced lamb mince, hand-rolled and grilled over coals.",
    price: "£8.50",
    chips: [{ label: "Hot", tone: "hot" }],
  },
  {
    name: "Lamb shish",
    desc: "Cubed lamb, marinated overnight, grilled to order.",
    price: "£8.95",
    chips: [{ label: "Signature", tone: "signature" }],
  },
  {
    name: "Mixed grill — for two",
    desc: "Lamb shish, chicken shish, kofte, lamb chop. Rice, bread, salad.",
    price: "£16.95",
  },
  {
    name: "Falafel wrap",
    desc: "Crispy falafel with hummus, tahini, pickled cabbage.",
    price: "£6.50",
    chips: [{ label: "Vegan", tone: "veggie" }],
  },
];

export function MenuSampler() {
  return (
    <>
      <Wrap>
        <ChevronRule />
      </Wrap>
      <Section id="menu-sampler" band label="Menu sampler">
        <Wrap>
          <SectionHead
            eyebrow="Tonight's menu"
            title="Charcoal kebabs"
            lead="A taste of the menu — six off the grill. Full list, allergens and meal deals on the menu page."
            maxWidth={620}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0 3rem",
            }}
            className="pk-sampler-grid"
          >
            {SAMPLE.map((item) => (
              <div
                key={item.name}
                className="pk-menu-row"
                style={{ borderColor: "var(--rule-strong)" }}
              >
                <div style={{ minWidth: 0 }}>
                  <div className="pk-menu-row__name">{item.name}</div>
                  <div className="pk-menu-row__desc">{item.desc}</div>
                  {item.chips ? (
                    <div className="pk-menu-row__meta">
                      {item.chips.map((c) => (
                        <Chip key={c.label} tone={c.tone}>
                          {c.label}
                        </Chip>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="pk-menu-row__price pk-tnum">{item.price}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" href="/menu">
              See the full menu
            </Button>
            <Button variant="outline" href="https://connect.poscraft.co.uk/">
              Order online
            </Button>
          </div>
        </Wrap>
      </Section>
      <style>
        {`@media (max-width: 760px) {
          .pk-sampler-grid { grid-template-columns: 1fr !important; }
        }`}
      </style>
    </>
  );
}
