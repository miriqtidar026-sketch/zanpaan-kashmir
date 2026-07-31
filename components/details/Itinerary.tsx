type ItineraryItem = {
  day: string;
  title: string;
  description: string;
};

type ItineraryProps = {
  itinerary: ItineraryItem[];
};

export default function Itinerary({ itinerary }: ItineraryProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Day-wise Itinerary
          </h2>

          <p className="mt-4 text-gray-600">
            A carefully planned journey through the breathtaking beauty of
            Kashmir.
          </p>
        </div>

        <div className="space-y-8">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                {item.day}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}