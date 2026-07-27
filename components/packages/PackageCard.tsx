import Image from "next/image";
import Link from "next/link";

interface PackageCardProps {
  image: string;
  title: string;
  duration: string;
  destinations: string[];
  price: string;
}

export default function PackageCard({
  image,
  title,
  duration,
  destinations,
  price,
}: PackageCardProps) {
  return (
    <div className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black backdrop-blur">
          ⭐ Signature Tour
        </div>

        {/* Text on Image */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-sm uppercase tracking-[0.25em] opacity-90">
            {duration}
          </p>

          <h3 className="mt-2 text-4xl font-bold leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Destinations */}
        <div className="flex flex-wrap gap-3">
          {destinations.map((place) => (
            <span
              key={place}
             className="rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700"
            >
              📍 {place}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm font-semibold">🏨 Premium Hotels</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm font-semibold">🚗 Private Cab</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm font-semibold">🛶 Shikara Ride</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-4">
            <p className="text-sm font-semibold"> 24/7 Travel Support</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex items-center justify-between border-t pt-6">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
              Starting From
            </p>

            <h4 className="mt-1 text-3xl font-bold text-black">
              {price}
            </h4>
          </div>

          <Link
            href="/packages/kashmir-signature-tour"
            className="rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800"
          >
            View Tour →
          </Link>
        </div>
      </div>
    </div>
  );
}