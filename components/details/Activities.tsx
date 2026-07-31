type ActivitiesProps = {
  activities: string[];
};

export default function Activities({
  activities,
}: ActivitiesProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Activities Included
          </h2>

          <p className="mt-4 text-gray-600">
            Enjoy unforgettable experiences during your Kashmir trip.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl text-white">
                ✓
              </div>

              <span className="text-lg font-medium text-gray-800">
                {activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}