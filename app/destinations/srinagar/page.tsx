import Image from "next/image";
import SrinagarGallery from "@/components/gallery/SrinagarGallery";
export default function SrinagarPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/images/srinagar/srinagarhero.jpg"
          alt="Srinagar"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Experience Srinagar
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Cruise through the timeless Dal Lake, wander the Mughal Gardens,
              and experience the rich heritage and breathtaking beauty of
              Kashmir’s summer capital.
            </p>
          </div>
        </div>
      </section>

      <SrinagarGallery />
    </main>
  );
}