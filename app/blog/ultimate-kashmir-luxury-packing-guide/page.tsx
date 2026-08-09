import type { Metadata } from "next";
import Image from "next/image";

const baseUrl = "https://zanpaankashmir.com";

export const metadata: Metadata = {
  title:
    "The Ultimate Kashmir Luxury Packing Guide: What to Wear for Elegance and Warmth | Zanpaan Kashmir",

  description:
    "Discover what to wear in Kashmir for winter luxury travel. From cashmere and Pashmina to tailored overcoats and winter boots, learn how to stay warm without compromising elegance.",

  keywords: [
    "Kashmir luxury packing guide",
    "what to wear in Kashmir",
    "Kashmir winter clothes",
    "Kashmir luxury travel",
    "Kashmir winter fashion",
    "Kashmir honeymoon packing",
    "Gulmarg winter clothing",
    "Srinagar luxury travel",
    "Pashmina Kashmir",
    "cashmere Kashmir",
    "Kashmir travel guide",
    "Zanpaan Kashmir",
  ],

  authors: [{ name: "Zanpaan Kashmir" }],
  creator: "Zanpaan Kashmir",
  publisher: "Zanpaan Kashmir",

  alternates: {
    canonical: `${baseUrl}/blog/ultimate-kashmir-luxury-packing-guide`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title:
      "The Ultimate Kashmir Luxury Packing Guide: What to Wear for Elegance and Warmth",
    description:
      "A refined winter packing guide for travelers who want warmth, comfort and impeccable style in Kashmir.",
    url: `${baseUrl}/blog/ultimate-kashmir-luxury-packing-guide`,
    siteName: "Zanpaan Kashmir",
    type: "article",
    images: [
      {
        url: `${baseUrl}/images/blog/kashmir-luxury-packing-guide-hero.png`,
        width: 1536,
        height: 1024,
        alt: "Luxury winter travel style in Kashmir",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Ultimate Kashmir Luxury Packing Guide | Zanpaan Kashmir",
    description:
      "What to wear in Kashmir for warmth, comfort and understated luxury.",
    images: [
      `${baseUrl}/images/blog/kashmir-luxury-packing-guide-hero.png`,
    ],
  },
};

export default function KashmirLuxuryPackingGuide() {
  return (
    <main className="bg-white text-neutral-900">

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden">
        <Image
          src="/images/blog/kashmir-luxury-packing-guide-hero.png"
          alt="Elegant winter travel style against the Kashmir landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-16 md:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
              The Zanpaan Edit
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              The Ultimate Kashmir Luxury Packing Guide:
              <span className="block">
                What to Wear for Elegance and Warmth
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              A refined approach to winter dressing in Kashmir, where
              uncompromising warmth meets understated elegance.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24">

        {/* INTRO */}
        <section>
          <p className="text-lg leading-8 text-neutral-700">
            Kashmir in winter is breathtaking, but it is not a climate that
            rewards careless packing. Snow, cold mountain air and long days
            outdoors demand clothing that performs without compromising the
            way you look.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            The philosophy is simple: <strong>you do not have to sacrifice a
            sharp silhouette to stay warm.</strong> The right fabrics,
            proportions and layers allow you to move between a refined
            Srinagar dinner and a snowy Gulmarg morning without looking
            over-dressed or under-prepared.
          </p>
        </section>

        {/* IMAGE 2 */}
        <figure className="my-14">
          <Image
            src="/images/blog/kashmir-winter-layering.png"
            alt="Premium winter fabrics including wool, cashmere and Pashmina"
            width={1536}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-neutral-500">
            Texture matters. Wool, cashmere and authentic Pashmina create
            warmth without unnecessary bulk.
          </figcaption>
        </figure>

        {/* SECTION 1 */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            The Architecture of Winter Layering
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Luxury winter dressing begins with the layer closest to the body.
            Choose breathable, insulating fabrics such as fine merino wool,
            cashmere or high-quality thermal layers before building outward.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            <strong>Proportion is just as important as fabric.</strong> Your
            winter shirts and base layers should ideally have around
            1–1.5 inches of additional length so they remain properly tucked
            and do not awkwardly ride up beneath heavier layers.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Over this, add a refined knit or cashmere layer, followed by a
            structured wool overcoat or technical outer layer depending on
            your destination and activity.
          </p>
        </section>

        {/* IMAGE 3 */}
        <figure className="my-14">
          <Image
            src="/images/blog/mens-kashmir-luxury-style.png"
            alt="Man wearing a tailored dark wool coat beside a Kashmir lake"
            width={1536}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-neutral-500">
            A tailored overcoat keeps the silhouette clean while providing
            room for considered winter layers underneath.
          </figcaption>
        </figure>

        {/* MEN'S EDIT */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            The Men&apos;s Luxury Edit
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            For the classic Kashmir look, start with a well-constructed wool
            overcoat in charcoal, deep navy, camel or black. Pair it with
            tailored trousers, a fine knit and premium leather or weather-ready
            boots.
          </p>

          <div className="my-8 overflow-hidden rounded-2xl border border-neutral-200">
            <div className="grid grid-cols-2 border-b border-neutral-200 bg-neutral-50 px-5 py-4 font-medium">
              <span>Piece</span>
              <span>Indicative investment</span>
            </div>

            <div className="grid grid-cols-2 border-b border-neutral-200 px-5 py-4">
              <span>Bespoke wool overcoat</span>
              <span>₹25,000–₹60,000+</span>
            </div>

            <div className="grid grid-cols-2 border-b border-neutral-200 px-5 py-4">
              <span>Cashmere / premium knit</span>
              <span>₹8,000–₹25,000+</span>
            </div>

            <div className="grid grid-cols-2 border-b border-neutral-200 px-5 py-4">
              <span>Tailored trousers</span>
              <span>₹5,000–₹15,000+</span>
            </div>

            <div className="grid grid-cols-2 px-5 py-4">
              <span>Premium winter boots</span>
              <span>₹10,000–₹30,000+</span>
            </div>
          </div>

          <p className="text-sm leading-7 text-neutral-500">
            These figures are indicative rather than fixed prices. The actual
            investment varies significantly by fabric, construction, tailoring
            and brand.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            For an evening at a refined Srinagar hotel, keep the look
            understated: a dark overcoat, fine knit, tailored trousers and
            polished boots. For Gulmarg, replace purely formal outerwear with
            a weather-resistant technical layer while keeping the underlying
            silhouette clean.
          </p>
        </section>

        {/* IMAGE 4 */}
        <figure className="my-14">
          <Image
            src="/images/blog/gulmarg-winter-style.png"
            alt="Elegant winter clothing in snowy Gulmarg"
            width={1536}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-neutral-500">
            Gulmarg demands performance. Choose weather protection without
            abandoning a refined silhouette.
          </figcaption>
        </figure>

        {/* CAMERA */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Dress for the Camera
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Kashmir does not need much help from your wardrobe. Its mountains,
            lakes, forests and winter skies already provide the visual drama.
            Your clothing should complement that environment rather than
            compete with it.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Choose <strong>deep, moody and neutral tones</strong> such as
            charcoal, black, navy, cream, camel and muted earth tones. They
            create natural contrast against snow, mountain shadows and pale
            winter skies.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Avoid excessive logos and overly artificial trends. The strongest
            photographs often come from simple clothing, natural light and the
            landscape itself.
          </p>
        </section>

        {/* IMAGE 5 */}
        <figure className="my-14">
          <Image
            src="/images/blog/kashmir-cinematic-winter-style.png"
            alt="Elegant neutral winter outfit against snow covered Kashmir mountains"
            width={1536}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-neutral-500">
            Neutral winter tones create contrast without overpowering the
            landscape.
          </figcaption>
        </figure>

        {/* FINAL */}
        <section>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Let Your Wardrobe Be the Only Thing You Have to Plan
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            Your wardrobe is personal. Everything else can be handled for
            you.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            With <strong>Zanpaan Kashmir</strong>, your journey can be designed
            around private premium transportation, hand-picked stays and a
            carefully managed itinerary that removes the friction from
            travelling through Kashmir.
          </p>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Whether you are planning an intimate honeymoon, a private family
            escape or an elevated winter retreat, the objective remains the
            same: experience Kashmir beautifully, comfortably and entirely
            on your terms.
          </p>
        </section>

        {/* IMAGE 6 */}
        <figure className="my-14">
          <Image
            src="/images/blog/zanpaan-luxury-kashmir-suv.png"
            alt="Luxury SUV beside a Kashmir lake and snow covered mountains"
            width={1536}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
        </figure>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-neutral-950 px-7 py-12 text-center text-white md:px-12">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Zanpaan Kashmir
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Design Your Kashmir Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
            Discover Kashmir through a privately designed itinerary,
            premium stays and thoughtfully arranged experiences.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/packages/customized"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Design Your Journey
            </a>

            <a
              href="/packages"
              className="rounded-full border border-white/30 px-7 py-3 font-medium text-white transition hover:bg-white/10"
            >
              View Curated Itineraries
            </a>
          </div>
        </section>

      </article>
    </main>
  );
}