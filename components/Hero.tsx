export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>

      <img
        src="https://images.unsplash.com/photo-1598091383021-15ddea10925d"
        alt="Kashmir"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 text-center text-white px-6">

        <p className="uppercase tracking-[8px] text-sm mb-4">
          Premium Kashmir Experiences
        </p>

        <h1 className="text-5xl md:text-8xl font-bold leading-none">
          Discover the Paradise
        </h1>

        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
          Luxury tours, private transport, unforgettable moments and
          authentic Kashmir experiences.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">
            Explore Packages
          </button>

          <button className="px-8 py-4 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100 transition-all duration-300">
            Book Now
          </button>

        </div>

      </div>

    </section>
  );
}