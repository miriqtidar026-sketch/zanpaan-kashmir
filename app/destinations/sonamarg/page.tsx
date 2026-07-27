import Image from "next/image";
import SonamargGallery from "@/components/gallery/SonamargGallery";

export default function SonamargPage() {
  return (
    <main className="bg-white">
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/sonamarg/sonamarghero.jpg"
          alt="Sonamarg"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Experience Sonamarg
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Discover the Meadow of Gold, where snow-capped mountains,
              sparkling rivers, alpine meadows, and breathtaking glaciers
              create one of Kashmir's most unforgettable landscapes.
            </p>
          </div>
        </div>
      </section>

      <SonamargGallery />
    </main>
  );
}