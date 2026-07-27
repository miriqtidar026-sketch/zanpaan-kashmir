import Image from "next/image";
import PahalgamGallery from "@/components/gallery/PahalgamGallery";

export default function PahalgamPage() {
  return (
    <main className="bg-white">
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/pahalgam/pahalgamhero.jpg"
          alt="Pahalgam"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Experience Pahalgam
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Escape to the Valley of Shepherds, where lush green meadows,
              crystal-clear rivers, pine forests, and breathtaking mountain
              landscapes create one of Kashmir's most peaceful and scenic
              destinations.
            </p>
          </div>
        </div>
      </section>

      <PahalgamGallery />
    </main>
  );
}