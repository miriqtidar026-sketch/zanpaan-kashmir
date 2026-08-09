import PackageCard from "../home/PackageCard";

export default function FeaturedPackages() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Signature Collections
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
           Curated Kashmir Journeys
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Discover our hand-crafted luxury itineraries covering Srinagar, Gulmarg, Sonamarg, and beyond.
             Experience uncompromising comfort with premium boutique stays,
              private VIP transportation, and an authentic local concierge to guide your escape.
          </p>
        </div>

        {/* Package Card */}
        <div className="mx-auto max-w-5xl">
          <PackageCard
            image="/images/packages/cou.jpeg"
            title="The Zanpaan Signature Journey"
            duration="5 Days • 4 Nights"
            destinations={[
              "Srinagar",
              "Gulmarg",
              "Sonamarg",
              "Local Sightseeing",
            ]}
            price="69,999 / Couple"
          />
        </div>
      </div>
    </section>
  );
}