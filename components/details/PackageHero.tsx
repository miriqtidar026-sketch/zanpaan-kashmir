import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

type PackageHeroProps = {
  title: string;
  image: string;
};

export default function PackageHero({
  title,
  image,
}: PackageHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/packages"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft size={18} />
            Back to Packages
          </Link>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Discover the breathtaking beauty of Kashmir with our carefully
            curated travel package. Enjoy comfortable stays, private transport,
            unforgettable sightseeing, and memories that will last a lifetime.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`https://wa.me/919469181623?text=${encodeURIComponent(
                `Hello Zanpaan Kashmir,

I want to know more about the ${title}.

Please share the itinerary, availability, and booking details.

Thank you!`
              )}`}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
            </Link>

            <Link
              href="/packages"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Explore More Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}