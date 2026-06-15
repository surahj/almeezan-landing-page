/**
 * SITE CONTENT — Single source of truth.
 * Edit anything below to update the live site. No other files need to change.
 *
 * To swap any image: replace the unsplash() call with a path like "/images/menu/your-file.jpg"
 * and drop the file into public/images/menu/.
 *
 * Each Unsplash ID is followed by a // description so anyone editing
 * can confirm the visual match without having to load it.
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Portrait (9:16) center-crop of the same photo — served to phones so
 *  object-cover doesn't have to blow up a sliver of a landscape frame. */
const unsplashPortrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1080&h=1920&q=80`;

export type MenuCategoryId =
  | "appetizers"
  | "platters"
  | "wraps"
  | "family"
  | "desserts";

export type MenuItem = {
  id: string;
  category: MenuCategoryId;
  name: string;
  price: string;
  image: string;
  description: string;
  ingredients?: string;
  badges?: string[];
  serves?: string;
};

export const menuCategories: { id: MenuCategoryId | "all"; label: string }[] = [
  { id: "all",        label: "All" },
  { id: "appetizers", label: "Appetizers" },
  { id: "platters",   label: "Platters" },
  { id: "wraps",      label: "Wraps & Sandwiches" },
  { id: "family",     label: "Family Dinners" },
  { id: "desserts",   label: "Desserts" },
];

export const menuItems: MenuItem[] = [
  // ───────────── Appetizers ─────────────
  {
    id: "hummus-pita",
    category: "appetizers",
    name: "Hummus & Pita",
    price: "6.99",
    image: unsplash("1697126248475-a537cc5cce28"), // plate of hummus, pita bread, olive oil bowl
    description: "Creamy chickpea hummus whipped with tahini, lemon, and garlic. Finished with olive oil and warm pita torn for dipping.",
    ingredients: "Chickpea, tahini, lemon, garlic, olive oil, pita",
    badges: ["Vegetarian"],
  },
  {
    id: "mixed-mezze",
    category: "appetizers",
    name: "Mixed Mezze Plate",
    price: "12.50",
    image: unsplash("1743674453093-592bed88018e"), // platter of mediterranean dishes
    description: "A grazing plate of hummus, baba ghanoush, tabbouleh, falafel, and pickles — a guided tour of the Middle East on one board.",
    ingredients: "Hummus, baba ghanoush, tabbouleh, falafel, pickles, pita",
    badges: ["Bestseller", "Shareable"],
  },
  {
    id: "samosas",
    category: "appetizers",
    name: "Beef or Veggie Samosas",
    price: "5.99",
    image: unsplash("1714799263348-41c7245cd714"), // two fried food items on white plate
    description: "Crisp hand-folded pastries with a peppery spiced filling. Three pieces, served with tamarind chutney.",
    ingredients: "Pastry, beef or potato/pea filling, tamarind chutney",
    badges: ["Crunchy"],
  },
  {
    id: "falafel-starter",
    category: "appetizers",
    name: "Falafel Bites",
    price: "7.50",
    image: unsplash("1593001872095-7d5b3868fb1d"), // fried food in white bowl (falafel)
    description: "Six crisp-fried chickpea-and-herb balls. Light, green-flecked inside, almost shattering outside. Tahini on the side.",
    ingredients: "Chickpea, parsley, cilantro, cumin, tahini",
    badges: ["Vegetarian"],
  },

  // ───────────── Platters ─────────────
  {
    id: "sultani-kabob",
    category: "platters",
    name: "Sultani Kabob",
    price: "17.25",
    image: unsplash("1620167790054-de54f34308bb"), // cooked meat with sliced lemon
    description: "Tenderloin medallions and seekh kabob — the house platter. Charcoal-grilled and laid over basmati rice with salad, hummus and naan.",
    ingredients: "Beef tenderloin, seekh kabob, basmati rice, salad, hummus, naan",
    badges: ["Bestseller", "Spicy"],
  },
  {
    id: "waziri-kabob",
    category: "platters",
    name: "Waziri Kabob",
    price: "17.25",
    image: unsplash("1594489883219-010b0e5eeb9d"), // charcoal chops & ribs on naan, dark editorial board
    description: "Charcoal beef chops rubbed with ginger, garlic, and our house spice. Served with rice, salad, hummus and warm naan.",
    ingredients: "Beef chop, ginger, garlic, house spice, basmati rice, salad, hummus, naan",
  },
  {
    id: "beef-tbone",
    category: "platters",
    name: "Beef T-Bone Steak",
    price: "19.50",
    image: unsplash("1597445283613-5cee0bcfca9a"), // two T-bone steaks on charcoal grill, bone visible
    description: "10oz halal T-bone, aged and marinated overnight, grilled hot and finished with smoked salt. Plated with rice and salad.",
    ingredients: "Halal beef T-bone, smoked salt, rice, salad",
    badges: ["Premium"],
  },
  {
    id: "beef-shami",
    category: "platters",
    name: "Beef Shami Kabob",
    price: "17.50",
    image: unsplash("1532636875304-0c89119d9b4d"), // two minced-beef kofta kabobs plated w/ rice & tomato
    description: "Slow-spiced minced beef patties with a gentle char. Comes with rice, salad, hummus and naan.",
    ingredients: "Minced beef, garam masala, onion, ginger, rice, salad, hummus, naan",
  },
  {
    id: "lamb-kabob",
    category: "platters",
    name: "Lamb Kabob",
    price: "17.25",
    image: unsplash("1626323109252-0adb3b46692b"), // grilled meat on metal grill
    description: "Cubes of lamb leg, yogurt-marinated overnight, threaded onto skewers and grilled until just kissed by smoke.",
    ingredients: "Lamb leg, yogurt, lemon, garlic, rice, salad, hummus, naan",
  },
  {
    id: "lamb-shank",
    category: "platters",
    name: "Lamb Shank",
    price: "17.25",
    image: unsplash("1773417325310-cc9c9bef75e7"), // braised lamb shank, bone up, glossy sauce
    description: "Braised four hours in tomato, onion and warm spices until fall-off-the-bone tender. Served over rice with naan.",
    ingredients: "Lamb shank, tomato, onion, cinnamon, cardamom, rice, naan",
    badges: ["Slow-cooked"],
  },
  {
    id: "tandoori-salmon",
    category: "platters",
    name: "Tandoori Salmon",
    price: "17.25",
    image: unsplash("1519708227418-c8fd9a32b7a2"), // grilled fish + veggies
    description: "Salmon fillet in a mustard-oil and yogurt marinade, kissed by the tandoor. Served with rice, salad, hummus and naan.",
    ingredients: "Salmon, yogurt, mustard oil, kashmiri chili, rice, salad, naan",
    badges: ["House favorite"],
  },
  {
    id: "chicken-tandoori",
    category: "platters",
    name: "Chicken Tandoori",
    price: "15.05",
    image: unsplash("1617692855027-33b14f061079"), // tandoori chicken on white plate
    description: "The classic. Bone-in chicken marinated in yogurt, paprika and kashmiri chili, then blasted in the tandoor.",
    ingredients: "Chicken, yogurt, paprika, kashmiri chili, ginger, garlic, naan",
    badges: ["Spicy"],
  },
  {
    id: "spicy-chicken-tikka",
    category: "platters",
    name: "Spicy Chicken Tikka",
    price: "15.05",
    image: unsplash("1687020835890-b0b8c6a04613"), // plated tandoori chicken
    description: "Bone-in chicken tikka with our heavy hand on the chili. Served with rice, salad, hummus and naan.",
    ingredients: "Chicken, extra kashmiri chili, yogurt, rice, salad, naan",
    badges: ["Spicy"],
  },
  {
    id: "chicken-tikka",
    category: "platters",
    name: "Chicken Tikka",
    price: "15.05",
    image: unsplash("1599487488170-d11ec9c172f0"), // red-marinated chicken tikka skewers over smoking charcoal
    description: "Bone-in chicken tikka, generous on the smoke and easy on the heat. Yogurt-marinated and charcoal-cooked.",
    ingredients: "Chicken, yogurt, garam masala, rice, salad, naan",
  },
  {
    id: "chicken-shawarma",
    category: "platters",
    name: "Chicken Shawarma",
    price: "15.05",
    image: unsplash("1642346854073-a88b5a77038c"), // shaved spiced chicken shawarma over open flatbread
    description: "Slow-stacked and shaved off the vertical spit. Layered over rice with garlic sauce, pickles, and warm naan.",
    ingredients: "Chicken, garlic sauce, pickles, rice, salad, naan",
  },
  {
    id: "chicken-curry",
    category: "platters",
    name: "Chicken Curry",
    price: "15.05",
    image: unsplash("1603894584373-5ac82b2ae398"), // curry brown/green dish in wooden bowl
    description: "Tomato, onion and ginger built slow into a glossy curry. Bone-in chicken, basmati rice, and naan to mop the plate.",
    ingredients: "Chicken, tomato, onion, ginger, garlic, garam masala, rice, naan",
  },
  {
    id: "fish-chips",
    category: "platters",
    name: "Fish & Chips",
    price: "15.05",
    image: unsplash("1697748836791-9ddf7e616ece"), // fried fish + fries on plate
    description: "Crisp battered fish with hand-cut fries, tartar and lemon. The everyday off-menu favorite, fully on the menu.",
    ingredients: "Cod, batter, hand-cut fries, tartar, lemon",
  },
  {
    id: "chicken-leg",
    category: "platters",
    name: "Chicken Leg",
    price: "10.99",
    image: unsplash("1697155406147-7d640cbba0e7"), // plated chicken with onions & lemons
    description: "Marinated leg-quarter, slow-grilled and served with rice, salad, hummus and naan. The everyday plate.",
    ingredients: "Chicken leg, house marinade, rice, salad, hummus, naan",
    badges: ["20% off"],
  },
  {
    id: "falafel-plate",
    category: "platters",
    name: "Falafel Plate",
    price: "10.99",
    image: unsplash("1593001872095-7d5b3868fb1d"), // fried food in white bowl
    description: "Crisp-fried chickpea-and-herb balls with rice, salad, hummus and naan. Tahini drizzled over the top.",
    ingredients: "Chickpea, parsley, cilantro, tahini, rice, salad, naan",
    badges: ["Vegetarian"],
  },
  {
    id: "daal-rice",
    category: "platters",
    name: "Daal & Rice",
    price: "10.99",
    image: unsplash("1755090154817-58d9d36ec988"), // golden tadka daal in kadai w/ naan behind
    description: "Slow-simmered lentils tempered with cumin, garlic and ghee. Served with basmati rice. Comfort, plain and true.",
    ingredients: "Yellow lentil, cumin, garlic, ghee, basmati rice",
    badges: ["Vegetarian", "Comfort"],
  },

  // ───────────── Wraps & Sandwiches ─────────────
  {
    id: "veggie-falafel-wrap",
    category: "wraps",
    name: "Veggie Falafel Wrap",
    price: "8.18",
    image: unsplash("1681072530653-db8fe2538631"), // falafel wrap in checkered paper w/ fries
    description: "Crisp falafel, tahini, pickled vegetables and greens folded into a warm pita.",
    ingredients: "Falafel, tahini, pickles, greens, pita",
    badges: ["Vegetarian"],
  },
  {
    id: "chicken-shawarma-wrap",
    category: "wraps",
    name: "Chicken Shawarma Wrap",
    price: "9.95",
    image: unsplash("1529006557810-274b9b2fc783"), // open shawarma wraps w/ shaved chicken, onion & fries
    description: "Slow-roasted chicken shawarma with garlic sauce, pickles and fries — rolled tight in pita.",
    ingredients: "Chicken shawarma, garlic sauce, pickles, fries, pita",
    badges: ["Bestseller"],
  },
  {
    id: "beef-shami-wrap",
    category: "wraps",
    name: "Beef Shami Kabob Wrap",
    price: "10.85",
    image: unsplash("1699728088614-7d1d4277414b"), // pita stuffed with beef slices, tomato & parsley
    description: "House-made shami kabob with fresh vegetables and tangy yogurt sauce, wrapped in soft pita.",
    ingredients: "Shami kabob, lettuce, tomato, onion, yogurt sauce, pita",
  },
  {
    id: "beef-tikka-wrap",
    category: "wraps",
    name: "Beef Tikka Wrap",
    price: "10.85",
    image: unsplash("1676300187347-6f60002fd83e"), // pita sandwich
    description: "Charcoal beef tikka with crunchy salad, pickles and mint-yogurt sauce in warm pita.",
    ingredients: "Beef tikka, lettuce, onion, mint-yogurt sauce, pita",
  },
  {
    id: "spicy-chicken-tikka-wrap",
    category: "wraps",
    name: "Spicy Chicken Tikka Wrap",
    price: "10.85",
    image: unsplash("1584959370147-fcdd784b2e45"), // pita stuffed w/ charred grilled meat & lettuce
    description: "Spicy chicken tikka with extra kashmiri heat, garlic sauce and pickles. Wrapped tight.",
    ingredients: "Chicken tikka, kashmiri chili, garlic sauce, pickles, pita",
    badges: ["Spicy"],
  },
  {
    id: "chicken-tikka-wrap",
    category: "wraps",
    name: "Chicken Tikka Wrap",
    price: "10.85",
    image: unsplash("1666819476628-2f3afb0ca147"), // grilled chicken strips & white sauce in pita
    description: "Yogurt-marinated chicken tikka, salad, garlic sauce and pickles in warm pita.",
    ingredients: "Chicken tikka, garlic sauce, pickles, salad, pita",
  },
  {
    id: "lamb-kabob-wrap",
    category: "wraps",
    name: "Lamb Kabob Wrap",
    price: "10.85",
    image: unsplash("1612390649890-9498b83d445c"), // flatbread w/ gyro-style meat & pink pickled onion
    description: "Cubes of charcoal lamb kabob with mint-yogurt, pickled onion and crunchy lettuce. Folded in pita.",
    ingredients: "Lamb kabob, mint-yogurt, pickled onion, lettuce, pita",
  },
  {
    id: "fish-wrap",
    category: "wraps",
    name: "Fish Wrap",
    price: "10.85",
    image: unsplash("1560215987-307b2039a677"), // battered fish wraps w/ slaw & cilantro
    description: "Crisp battered fish with tartar, pickles and crunchy slaw in warm pita.",
    ingredients: "Cod, tartar, slaw, pickles, pita",
  },

  // ───────────── Family Dinners ─────────────
  {
    id: "dinner-for-2",
    category: "family",
    name: "Dinner for Two",
    price: "34.00",
    serves: "Serves 2",
    image: unsplash("1748540459503-19efc015143b"), // spread ready to eat
    description: "Two entrées, seasoned rice and salad, hummus and naan, plus two beverages. Built for date night or a quick family meal.",
    ingredients: "Choice of 2 entrées, rice, salad, hummus, naan, 2 beverages",
    badges: ["Shareable"],
  },
  {
    id: "dinner-for-3",
    category: "family",
    name: "Dinner for Three",
    price: "45.00",
    serves: "Serves 3",
    image: unsplash("1661994215679-cde7c2c5c060"), // real family feast table — rice platter, kofta, pastries
    description: "Three entrées, seasoned rice and salad, hummus and naan, three beverages. Plenty to pass around.",
    ingredients: "Choice of 3 entrées, rice, salad, hummus, naan, 3 beverages",
    badges: ["Shareable"],
  },
  {
    id: "dinner-for-4",
    category: "family",
    name: "Dinner for Four",
    price: "70.00",
    serves: "Serves 4",
    image: unsplash("1773958731605-076e3721f16f"), // serving food at a full table
    description: "Our biggest feast — four entrées, rice and salad, hummus and naan, plus four beverages. Built to feed the whole crew.",
    ingredients: "Choice of 4 entrées, rice, salad, hummus, naan, 4 beverages",
    badges: ["Best value"],
  },

  // ───────────── Desserts ─────────────
  {
    id: "baklava",
    category: "desserts",
    name: "Baklava",
    price: "4.50",
    image: unsplash("1617806501553-d3a6a3a7b227"), // two baklava pieces on white plate
    description: "Layers of brittle phyllo, crushed walnuts and pistachio, soaked in honey-rose syrup. The classic sweet finish.",
    ingredients: "Phyllo, walnut, pistachio, honey, rose water",
  },
  {
    id: "kheer",
    category: "desserts",
    name: "Rice Kheer",
    price: "5.50",
    image: unsplash("1618870027824-7d655f038eae"), // saffron rice pudding w/ pistachio & rose petals
    description: "Basmati rice slow-cooked in milk with cardamom, saffron and pistachio. Served warm or chilled.",
    ingredients: "Basmati rice, milk, cardamom, saffron, pistachio",
  },
  {
    id: "gulab-jamun",
    category: "desserts",
    name: "Gulab Jamun",
    price: "4.99",
    image: unsplash("1695568180070-8b5acead5cf4"), // doughnut-like sweets on plate
    description: "Warm milk-dough dumplings soaked in rose-cardamom syrup. Two pieces, just enough to share.",
    ingredients: "Milk solids, rose water, cardamom, sugar syrup",
    badges: ["House favorite"],
  },
];

export const site = {
  brand: {
    name: "Al-Meezan",
    suffix: "Spicy Grill",
    tagline: "A halal Afghan kitchen of fire & spice in Toronto.",
    establishedHint: "Etobicoke",
  },

  hero: {
    eyebrow: "Halal · Charcoal-grilled · Afghan kitchen",
    headline: ["SMOKE,", "SPICE,", "& AFGHAN SOUL"],
    sub: "Inspired by Afghan roots, made for Toronto. Kabobs slow-marinated overnight and lifted off live charcoal, basmati perfumed with cardamom, naan served warm — fresh and fully halal, every single day.",
    primaryCta: { label: "See the Menu", href: "#menu" },
    secondaryCta: { label: "Book Catering", href: "#catering" },
    // Cinematic slideshow — crossfades in order, first frame is the LCP image.
    // `src` is the wide frame (desktop), `portrait` the 9:16 crop (phones).
    backdrops: [
      {
        src: unsplash("1771285119318-b342c3ecc51c", 2400), // mixed grill feast platter — lamb chops, kofta, kabobs
        portrait: unsplashPortrait("1771285119318-b342c3ecc51c"),
        alt: "A grand mixed grill platter of lamb chops, kofta and kabobs",
      },
      {
        src: unsplash("1777891257717-6a83ac8e0bac", 2400), // grilled meat skewers w/ flatbread
        portrait: unsplashPortrait("1777891257717-6a83ac8e0bac"),
        alt: "Charcoal-grilled kabob skewers served with warm flatbread",
      },
      {
        src: unsplash("1603088549155-6ae9395b928f", 2400), // grilled meat close-up on charcoal grill
        portrait: unsplashPortrait("1603088549155-6ae9395b928f"),
        alt: "Marinated meat searing on the charcoal grill",
      },
      {
        src: unsplash("1777716003985-68fed08d0c7e", 2400), // kabob plate with rice, pita & tea — warm restaurant scene
        portrait: unsplashPortrait("1777716003985-68fed08d0c7e"),
        alt: "A kabob platter with rice and pita, served with black tea",
      },
      {
        src: unsplash("1777891257551-bd5ecdb71c7e", 2400), // chicken skewers w/ naan & olives on dark slate
        portrait: unsplashPortrait("1777891257551-bd5ecdb71c7e"),
        alt: "Grilled chicken skewers with naan, olives and grilled vegetables",
      },
      {
        src: unsplash("1692106914406-093b0df73a10", 2400), // crossed lamb rack chops w/ vibrant vegetables
        portrait: unsplashPortrait("1692106914406-093b0df73a10"),
        alt: "Grilled lamb chops crossed over charred vegetables",
      },
      {
        src: unsplash("1734987052573-0fbe611842ae", 2400), // herb-crusted lamb chops piled on wood board, dark backdrop
        portrait: unsplashPortrait("1734987052573-0fbe611842ae"),
        alt: "Herb-crusted lamb chops stacked on a rustic wooden board",
      },
    ],
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

  pillars: {
    eyebrow: "The Al-Meezan way",
    title: "Four things we never compromise.",
    items: [
      {
        n: "01",
        title: "Fire Fed",
        text: "Every kabob is grilled over live charcoal — never a flat-top, never a heat lamp. The fire is lit at open and stays lit until close.",
        image: unsplash("1779418682869-5a08f74ccaae", 900), // kabob skewers over crisp open flame
        tone: "ember",
      },
      {
        n: "02",
        title: "Hand Made",
        text: "Spices ground in-house. Meat marinated overnight. Naan warmed to order. Slow food, served fast.",
        image: unsplash("1756821753151-0879e7862e50", 900), // basket of fresh naan with herbs
        tone: "saffron",
      },
      {
        n: "03",
        title: "Halal Always",
        text: "Every ingredient is 100% certified halal — sourced fresh, prepared in-house, served with confidence.",
        image: unsplash("1631515243349-e0cb75fb8d3a", 900), // chicken pulao-style rice bowl
        tone: "moss",
      },
      {
        n: "04",
        title: "Family First",
        text: "Afghan food has always been shared. Our platters and family dinners are built for the middle of the table.",
        image: unsplash("1734770931927-6410f9a64832", 900), // afghan restaurant spread — naan, kabobs, soups
        tone: "char",
      },
    ],
  },

  about: {
    eyebrow: "Our story",
    title: "An Afghan table, set the old way.",
    body: [
      "Al-Meezan started with the food we grew up around — kabobs lifted off live charcoal, basmati perfumed with cardamom and cloves, and naan pulled warm from the oven and torn between friends.",
      "Everything is halal, made fresh through the day. Our spice blends are ground in-house. Our meat is marinated overnight. And the charcoal grill is on from the moment we open the door until the last guest leaves.",
    ],
    figureImage: unsplash("1746274394124-141a1d1c5af3", 1200), // afghan home table — pulao, salad, naan (film look)
    smallStat: { value: "11—11", label: "Open daily" },
  },

  menu: {
    eyebrow: "The Menu",
    title: "A short list, done properly.",
    sub: "Platters arrive with seasoned rice, salad, hummus and warm naan. Wraps come hot off the grill, folded in soft pita. Tap a category to filter.",
  },

  specials: {
    eyebrow: "Bring the table",
    title: "Family Dinners",
    sub: "Built to feed everyone. Multiple entrées, sides, beverages — already sorted.",
  },

  offer: {
    label: "Tonight's special",
    title: "Chicken Leg Dinner",
    discount: "20% off",
    price: "10.99",
    image: unsplash("1697155406147-7d640cbba0e7", 1200), // plated chicken with onions & lemons
  },

  catering: {
    eyebrow: "Catering & events",
    title: "Served with style.",
    sub: "From office lunches to wedding feasts, we bring the charcoal grill to your table — kabob platters, family trays and full-service spreads, sized for ten to two hundred guests.",
    note: "Please allow 48 hours' notice for large orders.",
    image: unsplash("1738291422837-85761f82a10e", 1600), // top-down spread w/ spice bowls on woven mat
    primaryCta: { label: "Call to Book", href: "tel:+14166757775" },
    secondaryCta: { label: "See Family Dinners", href: "#specials" },
  },

  faq: {
    eyebrow: "Good to know",
    title: "Questions, answered.",
    sub: "The things people ask us most — before they walk in and ask for seconds.",
    items: [
      {
        q: "What is Al-Meezan known for?",
        a: "Charcoal-grilled Afghan kabobs — Sultani, Waziri, lamb and chicken — served over seasoned basmati with salad, hummus and warm naan, made fresh through the day.",
      },
      {
        q: "Is everything halal?",
        a: "Yes — 100%. Every meat we serve is certified halal, and every dish is prepared in-house in a fully halal kitchen.",
      },
      {
        q: "Do you cater events?",
        a: "We do. From office lunches to wedding feasts, we build platters and full spreads for ten to two hundred guests. Call (416) 675-7775 and we'll plan it with you.",
      },
      {
        q: "Can we order for the whole family?",
        a: "That's the house specialty. Family Dinners for two, three or four come with your choice of entrées plus rice, salad, hummus, naan and beverages — already sorted.",
      },
      {
        q: "Where are you located?",
        a: "670 Rexdale Blvd in Etobicoke — five minutes from Pearson Airport, with easy parking. Open daily, 11:00 AM to 11:00 PM. Walk in or call ahead.",
      },
    ],
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
      { label: "Catering", href: "#catering" },
      { label: "FAQ", href: "#faq" },
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
