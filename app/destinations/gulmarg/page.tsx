import Image from "next/image";
import Gallery from "@/components/gallery/GulmargGallery";

export default function GulmargPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/gulmarg/gulmarghero.jpg"
          alt="Gulmarg"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Experience Gulmarg
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Discover snow-covered mountains, alpine meadows, and unforgettable
              adventures in the heart of Kashmir.
            </p>
          </div>
        </div>
      </section>

      <Gallery />
    </main>
  );
}