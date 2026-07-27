import {
  Compass,
  MapPinned,
  HeartHandshake,
  Car,
  Mountain,
  Sparkles,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Compass,
    title: "Ground-Level Kashmir Experiences",
    description:
      "Explore Kashmir beyond the usual tourist attractions with experiences, hidden gems, and local moments tailored to your interests.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Your Trip, Your Way",
    description:
      "Every itinerary is thoughtfully customized around your travel style, whether you're planning a honeymoon, family vacation, luxury escape, or adventure.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Dedicated Travel Partner",
    description:
      "From your first inquiry until the end of your journey, we're here to guide you and make every step smooth and stress-free.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Local Knowledge That Matters",
    description:
      "Discover scenic routes, peaceful locations, and authentic experiences recommended by people who truly know Kashmir.",
  },
  {
    number: "05",
    icon: Car,
    title: "Comfort Without the Hassle",
    description:
      "We help coordinate transport, stays, and sightseeing so you can simply enjoy the beauty of Kashmir.",
  },
  {
    number: "06",
    icon: Mountain,
    title: "Memories Over Itineraries",
    description:
      "Every journey is designed to create meaningful experiences that stay with you long after your trip ends.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-stone-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="uppercase tracking-[0.35em] text-sm text-gray-500 font-medium">
            Why Choose ZanPaan
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Every Journey Deserves
            <br />
            <span className="text-gray-700">
              A Personal Touch
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            We believe unforgettable journeys aren't copied from a brochure.
            They're thoughtfully designed around the people taking them,
            creating experiences that feel authentic, personal, and truly memorable.
          </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
  {features.map((feature) => {
    const Icon = feature.icon;

    return (
      <div
        key={feature.number}
      className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
      >
        <span className="absolute -top-6 right-5 text-[5.5rem] font-black text-gray-100 select-none">
          {feature.number}
        </span>

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-gray-900 text-white flex items-center justify-center mb-8">
            <Icon size={24} />
          </div>

          <h3 className="text-xxl font-semibold text-gray-900">
            {feature.title}
          </h3>

          <p className="mt-2 text-gray-600 leading-7">
            {feature.description}
          </p>
        </div>
      </div>
    );
  })}
</div>
<div className="mt-16 text-center max-w-4xl mx-auto">

  <p className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
    Luxury isn't about spending more.
    <br />
    It's about experiencing more.
  </p>

  <p className="mt-8 text-lg text-gray-600 leading-8">
    At ZanPaan Kashmir, every itinerary is thoughtfully crafted to
    create meaningful experiences, authentic connections, and memories
    you'll carry long after your journey ends.
  </p>

</div>

      </div>
    </section>
  );
}