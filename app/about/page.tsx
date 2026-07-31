import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zanpaan Kashmir | Trusted Kashmir Travel Agency",
  description:
    "Learn about Zanpaan Kashmir, a trusted local travel agency offering premium Kashmir tour packages, honeymoon tours, family vacations, group trips, and personalized travel experiences across Srinagar, Gulmarg, Pahalgam, and Sonamarg.",
  keywords: [
    "About Zanpaan Kashmir",
    "Kashmir travel agency",
    "Local Kashmir tour operator",
    "Kashmir tour packages",
    "Kashmir honeymoon packages",
    "Luxury Kashmir tours",
    "Family Kashmir tours",
    "Srinagar travel",
    "Gulmarg tours",
    "Pahalgam tours",
    "Sonamarg tours",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="uppercase tracking-[0.35em] text-sm text-gray-500 text-center">
          About Us
        </p>

        <h1 className="text-5xl font-bold text-center mt-4 text-gray-900">
          Experience Kashmir Like Never Before
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-600 text-center max-w-3xl mx-auto">
          Welcome to <strong>Zanpaan Kashmir</strong>, your trusted local travel
          partner for exploring the breathtaking beauty of Kashmir.
        </p>

        <div className="mt-16 space-y-8 text-gray-700 text-lg leading-8">
          <p>
            We specialize in premium Kashmir tour packages designed for
            honeymoon couples, families, solo travelers, and groups. Every trip
            is carefully planned to provide comfort, safety, and unforgettable
            memories.
          </p>

          <p>
            From luxury hotels and private transportation to personalized
            itineraries, our experienced local team takes care of every detail,
            allowing you to explore Srinagar, Gulmarg, Pahalgam, Sonamarg, and
            other beautiful destinations across Kashmir with complete peace of
            mind.
          </p>

          <p>
            At Zanpaan Kashmir, our mission is to provide authentic Kashmir
            travel experiences through personalized service, local expertise,
            transparent pricing, and carefully curated itineraries that create
            lifelong memories.
          </p>
        </div>
      </div>
    </main>
  );
}