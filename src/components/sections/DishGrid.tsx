import { DishTile, Section, SectionHead, Wrap } from "@/components/primitives";

type Dish = {
  name: string;
  price: string;
  alt: string;
  caption: string;
  chips: {
    label: string;
    tone?: "default" | "hot" | "mild" | "veggie" | "signature";
  }[];
  tone: "warm" | "ember" | "cream";
};

const DISHES: Dish[] = [
  {
    name: "Lamb doner wrap",
    price: "£6.95",
    alt: "Lamb doner wrap, carved from the spit, salad and chilli sauce",
    caption: "Carved fresh, hot lavash, chilli sauce.",
    chips: [{ label: "Signature", tone: "signature" }],
    tone: "warm",
  },
  {
    name: "Chicken shish",
    price: "£8.50",
    alt: "Chicken shish skewer, chargrilled, with rice and salad",
    caption: "Marinated overnight, grilled over charcoal.",
    chips: [{ label: "Lean", tone: "mild" }],
    tone: "ember",
  },
  {
    name: "Lamb shish",
    price: "£8.95",
    alt: "Lamb shish skewer with char marks, rice and grilled tomato",
    caption: "Cubed lamb, char-marked, rested.",
    chips: [{ label: "Signature", tone: "signature" }],
    tone: "warm",
  },
  {
    name: "Petersfield mixed grill",
    price: "£16.95",
    alt: "Mixed grill platter — shish, kofte, lamb chop, rice and bread",
    caption: "Shish, kofte, lamb chop. The full board.",
    chips: [
      { label: "For two", tone: "default" },
      { label: "Signature", tone: "signature" },
    ],
    tone: "ember",
  },
  {
    name: "Lamb kofte",
    price: "£8.50",
    alt: "Hand-rolled lamb kofte skewers with char marks and parsley",
    caption: "Spiced lamb mince, hand-rolled.",
    chips: [{ label: "Hot", tone: "hot" }],
    tone: "warm",
  },
  {
    name: "Falafel wrap",
    price: "£6.50",
    alt: "Falafel wrap with hummus, tahini, pickled cabbage and herbs",
    caption: "Crispy falafel, hummus, tahini.",
    chips: [
      { label: "Veggie", tone: "veggie" },
      { label: "Vegan", tone: "veggie" },
    ],
    tone: "cream",
  },
];

export function DishGrid() {
  return (
    <Section id="food" label="The food">
      <Wrap>
        <SectionHead
          eyebrow="Tonight's grill"
          title="From the charcoal."
          lead="Six things we make every day. Order any of them online, or from the counter — it's the same grill."
          maxWidth={620}
        />
        <div className="pk-dish-grid">
          {DISHES.map((d) => (
            <DishTile key={d.name} {...d} />
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
