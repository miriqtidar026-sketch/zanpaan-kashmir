import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Srinagar",
    slug: "srinagar",
    image: "/images/packages/destinations/srinagar.jpg",
    description:
      "The heart of Kashmir, famous for Dal Lake, Mughal Gardens, and iconic houseboats.",
  },
  {
    name: "Gulmarg",
    slug: "gulmarg",
    image: "/images/packages/destinations/gulmarg.jpg",
    description:
      "Home to breathtaking meadows, thrilling Gondola rides, and unforgettable snow adventures.",
  },
  {
    name: "Pahalgam",
    slug: "pahalgam",
    image: "/images/packages/destinations/pahalgam.jpg",
    description:
      "Peaceful valleys, lush pine forests, and scenic rivers perfect for a relaxing getaway.",
  },
  {
    name: "Sonamarg",
    slug: "sonamarg",
    image: "/images/packages/destinations/sonamarg.jpg",
    description:
      "The Meadow of Gold, surrounded by glaciers, alpine landscapes, and stunning mountain views.",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Explore Kashmir
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover the most breathtaking places Kashmir has to offer, where
            every destination tells its own unforgettable story.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {destinations.map((place) => (
            <Link
              key={place.slug}
              href={`/destinations/${place.slug}`}
              className="group overflow-hidden rounded-3xl shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[420px]">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold">{place.name}</h3>

                  <p className="mt-3 max-w-md text-gray-200">
                    {place.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.15em] uppercase">
                    Explore {place.name}
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}