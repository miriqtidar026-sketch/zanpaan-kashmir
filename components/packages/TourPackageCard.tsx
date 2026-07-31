import Image from "next/image";
import Link from "next/link";

type TourPackageCardProps = {
  image: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  slug: string;
};

export default function TourPackageCard({
  image,
  title,
  price,
  duration,
  description,
  slug,
}: TourPackageCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-2 font-semibold text-green-700">
          {price}
        </p>

        <p className="mt-1 text-gray-600">
          🗓 {duration}
        </p>

        <p className="mt-4 line-clamp-3 leading-relaxed text-gray-700">
          {description}
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            href={`/packages/${slug}`}
            className="flex-1 rounded-lg border border-gray-900 py-3 text-center font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
          >
            View Details
          </Link>

          <Link
            href={`https://wa.me/919469181623?text=${encodeURIComponent(
              `Hello Zanpaan Kashmir,

I am interested in the ${title}.

Please share the itinerary, hotel details, pricing, availability, and booking process.

Thank you!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}