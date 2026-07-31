export default function PackageHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/packages/destinations/hero.jpg"
        alt="Kashmir Tour"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">

        {/* Badge */}
        <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
          Premium Kashmir Tours
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
        Explore Our Kashmir Tour Packages
          <br />
          of Kashmir
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
         Discover thoughtfully curated Kashmir tour packages for couples, families, groups, solo travelers, and luxury explorers.
          <span className="font-semibold"> Zanpaan Kashmir</span>.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

         

        </div>

      </div>
    </section>
  );
}