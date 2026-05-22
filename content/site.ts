/**
 * SITE CONTENT — Single source of truth.
 * Edit anything below to update the live site. No other files need to change.
 */

const IMG = "https://almeezanspicygrill.com/images";

export type MenuItem = {
  name: string;
  price: string;
  image?: string;
  blurb?: string;
  spicy?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  kicker: string;
  items: MenuItem[];
};

export const site = {
  brand: {
    name: "Al-Meezan",
    suffix: "Spicy Grill",
    tagline: "A halal kitchen of Middle Eastern fire & spice.",
    establishedHint: "Etobicoke",
  },

  hero: {
    eyebrow: "Halal · Charcoal-grilled · Open Daily",
    headline: ["Smoke,", "spice,", "& tradition."],
    sub: "From slow-marinated kabobs to fire-licked tandoori, every plate at Al-Meezan carries the rich flavors of the Middle East — built on fresh ingredients and the spice routes that started it all.",
    primaryCta: { label: "See the Menu", href: "#menu" },
    secondaryCta: { label: "Visit Tonight", href: "#visit" },
    showcase: {
      large: `${IMG}/1732676406.jpg`, // Sultani Kabob
      smallTop: `${IMG}/1733856856.jpg`, // Tandoori Salmon
      smallBottom: `${IMG}/1726334763.jpg`, // Lamb Kabob
    },
    ticker: [
      "Sultani Kabob",
      "Tandoori Salmon",
      "Lamb Shank",
      "Chicken Shawarma",
      "Falafel Plate",
      "Family Dinners",
      "Open till 11pm",
    ],
  },

  about: {
    eyebrow: "Our table",
    title: "Cooking the way it ought to be cooked.",
    body: [
      "We opened Al-Meezan Spicy Grill to share the food we grew up around — the kebabs lifted off live charcoal, the rice perfumed with cardamom and cloves, the breads pulled hot from the oven and torn between friends.",
      "Everything is halal, made fresh through the day. Our spice blends are mixed in-house. Our meat is marinated overnight. And the wood-fire grill is on from the moment we open the door until the last guest leaves.",
    ],
    figureImage: `${IMG}/1732680491.jpg`,
    smallStat: { value: "11—11", label: "Open daily" },
  },

  menu: {
    eyebrow: "The Menu",
    title: "A short list, done properly.",
    sub: "Platters arrive with seasoned rice, salad, hummus and warm naan. Wraps come hot off the grill, wrapped in soft pita.",
    categories: [
      {
        id: "platters",
        title: "Platters",
        kicker: "Served with rice, salad, hummus & naan",
        items: [
          { name: "Sultani Kabob", price: "17.25", image: `${IMG}/1732676406.jpg`, blurb: "Tenderloin & seekh — the house platter.", spicy: true },
          { name: "Waziri Kabob", price: "17.25", image: `${IMG}/1726331800.jpg`, blurb: "Charcoal beef chops, ginger-garlic rub." },
          { name: "Beef T-Bone Steak", price: "19.50", image: `${IMG}/1725827581.jpg`, blurb: "Aged, grilled hot, finished with smoked salt." },
          { name: "Beef Shami Kabob", price: "17.50", image: `${IMG}/1725330980.jpg`, blurb: "Slow-spiced minced beef, gentle char." },
          { name: "Lamb Kabob", price: "17.25", image: `${IMG}/1726334763.jpg`, blurb: "Lamb leg, yogurt-marinated overnight." },
          { name: "Lamb Shank", price: "17.25", image: `${IMG}/1732676517.jpg`, blurb: "Braised four hours, fall-off-the-bone." },
          { name: "Tandoori Salmon", price: "17.25", image: `${IMG}/1733856856.jpg`, blurb: "Mustard-oil marinade, kissed by the tandoor." },
          { name: "Chicken Tandoori", price: "15.05", image: `${IMG}/1732422715.JPG`, blurb: "The classic. Yogurt, paprika, fire.", spicy: true },
          { name: "Spicy Chicken Tikka", price: "15.05", image: `${IMG}/1732676458.jpg`, blurb: "Bone-in, generous on the heat.", spicy: true },
          { name: "Chicken Tikka", price: "15.05", image: `${IMG}/1732676851.JPG`, blurb: "Bone-in, generous on the smoke." },
          { name: "Chicken Shawarma", price: "15.05", image: `${IMG}/1732677065.JPG`, blurb: "Stacked & shaved off the vertical spit." },
          { name: "Chicken Curry", price: "15.05", image: `${IMG}/1732677332.jpg`, blurb: "Tomato, onion, ginger — built slow." },
          { name: "Fish & Chips", price: "15.05", image: `${IMG}/1732678925.jpg`, blurb: "Crisp batter, hand-cut fries." },
          { name: "Chicken Leg", price: "10.99", image: `${IMG}/1732680283.JPG`, blurb: "The everyday plate." },
          { name: "Falafel Plate", price: "10.99", image: `${IMG}/1732679711.JPG`, blurb: "Chickpea, herbs, tahini." },
          { name: "Daal & Rice", price: "10.99", image: `${IMG}/1732679430.jpg`, blurb: "Tempered lentils. Comfort, plain & true." },
        ],
      },
      {
        id: "wraps",
        title: "Wraps",
        kicker: "Hot off the grill, folded in soft pita",
        items: [
          { name: "Veggie Falafel Wrap", price: "8.18", image: `${IMG}/1733857895.jpg` },
          { name: "Chicken Shawarma Wrap", price: "9.95", image: `${IMG}/1733858028.JPG` },
          { name: "Beef Shami Kabob Wrap", price: "10.85", image: `${IMG}/1733858840.JPG` },
          { name: "Beef Tikka Wrap", price: "10.85", image: `${IMG}/1733859319.JPG` },
          { name: "Spicy Chicken Tikka Wrap", price: "10.85", image: `${IMG}/1733859406.JPG`, spicy: true },
          { name: "Chicken Tikka Wrap", price: "10.85", image: `${IMG}/1733859570.JPG` },
          { name: "Lamb Kabob Wrap", price: "10.85", image: `${IMG}/1733859698.JPG` },
          { name: "Fish Wrap", price: "10.85", image: `${IMG}/1733859798.JPG` },
        ],
      },
    ] as MenuCategory[],
  },

  specials: {
    eyebrow: "Bring the table",
    title: "Family Dinners",
    sub: "Built to feed everyone. Multiple entrées, sides, beverages — already sorted.",
    items: [
      {
        name: "Dinner for Two",
        price: "34.00",
        serves: "2 guests",
        image: `${IMG}/1733856538.JPG`,
        includes: ["Two entrées", "Seasoned rice & salad", "Hummus & naan", "Two beverages"],
      },
      {
        name: "Dinner for Three",
        price: "45.00",
        serves: "3 guests",
        image: `${IMG}/1733857582.JPG`,
        includes: ["Three entrées", "Seasoned rice & salad", "Hummus & naan", "Three beverages"],
      },
      {
        name: "Dinner for Four",
        price: "70.00",
        serves: "4 guests",
        image: `${IMG}/1733857716.JPG`,
        includes: ["Four entrées", "Seasoned rice & salad", "Hummus & naan", "Four beverages"],
      },
    ],
  },

  offer: {
    label: "Tonight's special",
    title: "Chicken Leg Dinner",
    discount: "20% off",
    price: "10.99",
    image: `${IMG}/1732420225.jpg`,
  },

  visit: {
    eyebrow: "Find us",
    title: "670 Rexdale Boulevard.",
    sub: "Five minutes from the airport. Easy parking. Walk in or call ahead.",
    address: {
      line1: "670 Rexdale Blvd",
      line2: "Etobicoke, ON M9W 0B5",
    },
    phone: "(416) 675-7775",
    hoursLabel: "Open daily",
    hoursValue: "11:00 AM — 11:00 PM",
    mapsUrl: "https://maps.google.com/?q=670+Rexdale+Blvd+Etobicoke+ON+M9W+0B5",
    telUrl: "tel:+14166757775",
  },

  footer: {
    rights: "All rights reserved.",
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Family Dinners", href: "#specials" },
      { label: "Visit", href: "#visit" },
      { label: "Call", href: "tel:+14166757775" },
    ],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/almeezans/" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
} as const;

export type SiteContent = typeof site;
