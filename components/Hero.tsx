"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1598091383021-15ddea10925d"
        alt="Beautiful view of Dal Lake surrounded by the Himalayan mountains in Srinagar, Kashmir"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <p className="uppercase tracking-[8px] text-sm mb-4">
          Premium Kashmir Experiences
        </p>

        <h1 className="text-5xl md:text-8xl font-bold leading-none">
          Luxury Kashmir Tour Packages
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
          Discover Srinagar, Gulmarg, Pahalgam, and Sonamarg with premium
          Kashmir tour packages, private transport, luxury stays, and
          unforgettable local experiences.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/packages"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 inline-flex items-center justify-center"
          >
            Explore Packages
          </Link>

          <a
            href="https://wa.me/919469181623?text=Hello%20Zanpaan%20Kashmir!%20I'm%20interested%20in%20booking%20a%20Kashmir%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100 hover:scale-105 transition duration-300 inline-flex items-center justify-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}