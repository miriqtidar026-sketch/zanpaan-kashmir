type IncludedProps = {
  included: string[];
};

export default function Included({ included }: IncludedProps) {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold tracking-wide text-green-700">
            INCLUDED IN YOUR PACKAGE
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Everything You Need for a
            <span className="block text-green-600">
              Hassle-Free Kashmir Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            We've carefully planned every detail so you can simply relax and
            enjoy the breathtaking beauty of Kashmir. From arrival to
            departure, we've got everything covered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {included.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                ✓
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Included at no additional cost.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            No Hidden Charges
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-gray-600">
            Our packages are designed with transparency in mind. Every service
            listed above is included in your package price, so you can travel
            with complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  );
}