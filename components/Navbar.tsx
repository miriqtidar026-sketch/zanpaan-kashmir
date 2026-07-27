"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/dog.png"
            alt="ZanPaan Kashmir"
            width={54}
            height={54}
            className="rounded-full"
          />

          <div>
            <h1
              className={`${cormorant.className} text-[28px] md:text-[40px] font-bold leading-none tracking-tight text-black`}
            >
              ZanpaanKashmir
            </h1>

            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-700 mt-1">
              Luxury Kashmir Experiences
            </p>
          </div>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-black font-medium">

          <Link href="#" className="hover:text-gray-600 transition">
            Home
          </Link>

          <Link href="#" className="hover:text-gray-600 transition">
            Packages
          </Link>


          <Link href="#" className="hover:text-gray-600 transition">
            About
          </Link>

          <Link href="#" className="hover:text-gray-600 transition">
            Contact
          </Link>

          <button className="rounded-full bg-black text-white px-6 py-2.5 hover:bg-gray-800 transition">
            Book Now
          </button>

        </nav>

        {/* Mobile Menu */}
        <button className="lg:hidden p-2">
          <Menu
            size={24}
            strokeWidth={1.8}
            className="text-black"
          />
        </button>

      </div>
    </header>
  );
}