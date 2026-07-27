import PackageCard from "./PackageCard";

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
            Curated Kashmir Experiences
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover thoughtfully designed journeys through the heart of
            Kashmir with premium stays, breathtaking landscapes, and authentic
            Kashmiri hospitality.
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