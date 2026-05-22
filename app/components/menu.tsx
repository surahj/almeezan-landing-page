import Image from "next/image";
import { site, type MenuItem } from "@/content/site";

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="group flex items-baseline py-4 border-b border-char/10 hover:bg-parchment-deep/40 -mx-3 px-3 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h4 className="display text-[1.4rem] md:text-[1.55rem] text-char leading-tight">
            {item.name}
          </h4>
          {item.spicy && (
            <span className="eyebrow text-ember">· spicy</span>
          )}
        </div>
        {item.blurb && (
          <p className="mt-1 text-[0.92rem] text-char-soft leading-relaxed">
            {item.blurb}
          </p>
        )}
      </div>
      <div className="leader hidden sm:block" />
      <p className="display text-[1.4rem] md:text-[1.55rem] text-ember tabular-nums">
        ${item.price}
      </p>
    </li>
  );
}

export function Menu() {
  const { menu, offer } = site;
  return (
    <section id="menu" className="relative bg-parchment-deep py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-10 mb-20">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-ember">{menu.eyebrow}</p>
            <h2 className="display mt-6 text-char text-[clamp(2.6rem,6vw,5.5rem)]">
              A short list,{" "}
              <span className="display-italic">done properly.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-6">
            <p className="text-[1.05rem] leading-[1.75] text-char-soft max-w-md">
              {menu.sub}
            </p>
          </div>
        </div>

        {/* Featured "tonight's special" card */}
        <div className="mb-24 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-5 relative aspect-[4/3] overflow-hidden rounded-[2px]">
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-ember text-parchment px-3 py-2">
              <p className="eyebrow">{offer.discount}</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="eyebrow text-ember">{offer.label}</p>
            <h3 className="display mt-4 text-char text-[clamp(2rem,4.5vw,3.5rem)]">
              {offer.title}
            </h3>
            <p className="mt-4 text-char-soft max-w-md leading-relaxed">
              The Chicken Leg Dinner — slow-marinated, charcoal-grilled, served
              with seasoned rice, salad, hummus, and warm naan. The everyday
              plate, at a price worth showing up for.
            </p>
            <div className="mt-6 flex items-baseline gap-4">
              <span className="display text-4xl text-ember">${offer.price}</span>
              <span className="text-char-soft line-through text-[0.95rem]">$13.74</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-24">
          {menu.categories.map((cat) => (
            <div key={cat.id} className="grid grid-cols-12 gap-10">
              {/* Sticky category header */}
              <div className="col-span-12 md:col-span-4">
                <div className="md:sticky md:top-32">
                  <p className="eyebrow text-ember">{cat.kicker}</p>
                  <h3 className="display mt-4 text-char text-[clamp(2.2rem,5vw,4rem)]">
                    {cat.title}
                  </h3>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-12 bg-char/30" />
                    <span className="text-[0.82rem] text-char-soft tabular-nums">
                      {cat.items.length} dishes
                    </span>
                  </div>
                </div>
              </div>

              {/* Items list */}
              <ul className="col-span-12 md:col-span-7 md:col-start-6">
                {cat.items.map((item) => (
                  <MenuRow key={item.name} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
