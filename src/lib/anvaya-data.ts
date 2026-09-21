export type ProductStatus = "Exploring" | "Sourcing" | "Enquire";

export type Product = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  description: string;
  form: string;
  status: ProductStatus;
  index: string;
  color: "spice" | "moss" | "clay" | "indigo";
};

export const categories = [
  "All products",
  "Spices & Seasonings",
  "Rice & Grains",
  "Nuts & Seeds",
  "Specialty & Healthy Foods",
  "Agricultural Products",
] as const;

export const products: Product[] = [
  {
    slug: "turmeric",
    name: "Turmeric",
    category: "Spices & Seasonings",
    eyebrow: "01 / spice",
    description: "A considered starting point for conversations around Indian spice sourcing.",
    form: "Form to be confirmed",
    status: "Exploring",
    index: "01",
    color: "spice",
  },
  {
    slug: "makhana",
    name: "Makhana",
    category: "Specialty & Healthy Foods",
    eyebrow: "02 / specialty",
    description: "Fox nuts as a potential ingredient for contemporary, better-for-you food lines.",
    form: "Form to be confirmed",
    status: "Sourcing",
    index: "02",
    color: "clay",
  },
  {
    slug: "basmati-rice",
    name: "Basmati Rice",
    category: "Rice & Grains",
    eyebrow: "03 / grain",
    description: "Long-grain rice sourcing conversations, kept open to specification and format.",
    form: "Form to be confirmed",
    status: "Exploring",
    index: "03",
    color: "indigo",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "Spices & Seasonings",
    eyebrow: "04 / spice",
    description: "A foundational category for future product and buyer discovery.",
    form: "Form to be confirmed",
    status: "Enquire",
    index: "04",
    color: "moss",
  },
  {
    slug: "green-cardamom",
    name: "Green Cardamom",
    category: "Spices & Seasonings",
    eyebrow: "05 / spice",
    description: "Aromatic whole-spice conversations shaped by the eventual buyer brief.",
    form: "Form to be confirmed",
    status: "Exploring",
    index: "05",
    color: "moss",
  },
  {
    slug: "millets",
    name: "Millets & Supergrains",
    category: "Rice & Grains",
    eyebrow: "06 / grain",
    description: "A future-facing category for ingredient and value-added food exploration.",
    form: "Format to be confirmed",
    status: "Exploring",
    index: "06",
    color: "clay",
  },
  {
    slug: "sesame-seeds",
    name: "Sesame Seeds",
    category: "Nuts & Seeds",
    eyebrow: "07 / seed",
    description: "An open category for food manufacturers and distributors to enquire about.",
    form: "Form to be confirmed",
    status: "Enquire",
    index: "07",
    color: "spice",
  },
  {
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    category: "Nuts & Seeds",
    eyebrow: "08 / nut",
    description: "Potential sourcing conversations for bulk or retail-ready directions.",
    form: "Format to be confirmed",
    status: "Exploring",
    index: "08",
    color: "indigo",
  },
];

export const markets = [
  {
    name: "United Arab Emirates",
    short: "UAE",
    note: "Research market",
    focus: "Ingredient buyers / distributors",
  },
  {
    name: "United States",
    short: "USA",
    note: "Research market",
    focus: "Specialty food / wholesale",
  },
  { name: "United Kingdom", short: "UK", note: "Research market", focus: "Retail / food service" },
  { name: "Europe", short: "EU", note: "Research market", focus: "To be mapped" },
];

export const statusStyles: Record<ProductStatus, string> = {
  Exploring: "bg-ivory-soft text-clay border-clay/25",
  Sourcing: "bg-moss-soft text-moss border-moss/25",
  Enquire: "bg-spice-soft text-ink border-spice/40",
};
