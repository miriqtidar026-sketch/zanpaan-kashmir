import TourPackageCard from "./TourPackageCard";
import { packages } from "@/components/data/packages";

export default function PackageGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Tour Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover the perfect Kashmir experience, whether you're travelling
            with family, friends, your partner, or on your own.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(packages).map(([slug, pkg]) => (
            <TourPackageCard
              key={slug}
              image={pkg.image}
              title={pkg.title}
              price={pkg.price}
              duration={pkg.duration}
              description={pkg.overview}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}