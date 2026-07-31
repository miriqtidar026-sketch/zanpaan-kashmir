type ExcludedProps = {
  excluded: string[];
};

export default function Excluded({
  excluded,
}: ExcludedProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg md:p-12">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            What's Not Included
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {excluded.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-red-500 hover:bg-red-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600">
                  ✕
                </div>

                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}