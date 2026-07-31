import { IndianRupee, CalendarDays, Users, Car } from "lucide-react";

type PackageInfoProps = {
  price: string;
  duration: string;
  bestFor: string;
  transport: string;
};

export default function PackageInfo({
  price,
  duration,
  bestFor,
  transport,
}: PackageInfoProps) {
  const cards = [
    {
      icon: IndianRupee,
      title: "Starting Price",
      value: price,
    },
    {
      icon: CalendarDays,
      title: "Duration",
      value: duration,
    },
    {
      icon: Users,
      title: "Best For",
      value: bestFor,
    },
    {
      icon: Car,
      title: "Transport",
      value: transport,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {card.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}