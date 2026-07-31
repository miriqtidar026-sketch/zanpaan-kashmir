type PackageOverviewProps = {
  overview: string;
};

export default function PackageOverview({
  overview,
}: PackageOverviewProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Package Overview
          </h2>

          <p className="text-lg leading-8 text-gray-600 whitespace-pre-line">
            {overview}
          </p>
        </div>
      </div>
    </section>
  );
}