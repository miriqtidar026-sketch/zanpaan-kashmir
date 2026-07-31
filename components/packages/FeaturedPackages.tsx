import PackageCard from "../home/PackageCard";

export default function FeaturedPackages() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Featured Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Premium Kashmir Tour Packages
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore our carefully curated Kashmir tour packages covering
            Srinagar, Gulmarg, Sonamarg, and other breathtaking destinations.
            Enjoy luxury stays, private transportation, authentic Kashmiri
            hospitality, and unforgettable travel experiences.
          </p>
        </div>

        {/* Package Card */}
        <div className="mx-auto max-w-5xl">
          <PackageCard
            image="/images/packages/cou.jpeg"
            title="Kashmir Signature Tour"
            duration="5 Days • 4 Nights"
            destinations={[
              "Srinagar",
              "Gulmarg",
              "Sonamarg",
              "Local Sightseeing",
            ]}
            price="₹48,000 / Couple"
          />
        </div>
      </div>
    </section>
  );
}