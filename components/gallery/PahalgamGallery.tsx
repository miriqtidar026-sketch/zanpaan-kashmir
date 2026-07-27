"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

const images = [
  "/images/pahalgam/pahalgam1.jpg",
  "/images/pahalgam/pahalgam2.jpg",
  "/images/pahalgam/pahalgam3.jpg",
  "/images/pahalgam/pahalgam4.jpg",
  "/images/pahalgam/pahalgam5.jpg",
  "/images/pahalgam/pahalgam6.jpg",
  "/images/pahalgam/pahalgam7.jpg",
  "/images/pahalgam/pahalgam8.jpg",
  "/images/pahalgam/pahalgam9.jpg",
];

export default function PahalgamGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelected(index);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Image 1 */}
          <div
            className="relative md:col-span-8 h-[520px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(0)}
          >
            <Image
              src={images[0]}
              alt="Pahalgam"
              fill
              priority
              quality={100}
              sizes="(max-width:768px) 100vw,66vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 2 */}
          <div
            className="relative md:col-span-4 h-[520px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(1)}
          >
            <Image
              src={images[1]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 3 */}
          <div
            className="relative md:col-span-4 h-[300px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(2)}
          >
            <Image
              src={images[2]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
                    {/* Image 4 */}
          <div
            className="relative md:col-span-8 h-[300px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(3)}
          >
            <Image
              src={images[3]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,66vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 5 */}
          <div
            className="relative md:col-span-6 h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(4)}
          >
            <Image
              src={images[4]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 6 */}
          <div
            className="relative md:col-span-6 h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(5)}
          >
            <Image
              src={images[5]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 7 */}
          <div
            className="relative md:col-span-8 h-[520px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(6)}
          >
            <Image
              src={images[6]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,66vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
                    {/* Image 8 */}
          <div
            className="relative md:col-span-4 h-[520px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(7)}
          >
            <Image
              src={images[7]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="(max-width:768px) 100vw,33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image 9 */}
          <div
            className="relative md:col-span-12 h-[550px] rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => openImage(8)}
          >
            <Image
              src={images[8]}
              alt="Pahalgam"
              fill
              quality={100}
              sizes="100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      <Lightbox
        images={images}
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}