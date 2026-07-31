"use client";

import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/dog.png"
            alt="Zanpaan Kashmir"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <h1
              className={`${cormorant.className} text-2xl md:text-4xl font-bold leading-none text-black`}
            >
              Zanpaan Kashmir
            </h1>

            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mt-1">
              Luxury Kashmir Experiences
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-black font-medium">
          <Link href="/" className="hover:text-gray-500 transition">
            Home
          </Link>

          <Link href="/packages" className="hover:text-gray-500 transition">
            Packages
          </Link>

          <Link href="/about" className="hover:text-gray-500 transition">
            About
          </Link>

          <Link href="/#contact" className="hover:text-gray-500 transition">
            Contact
          </Link>

          <a
            href="https://wa.me/919469181623?text=Hello! I'm interested in booking a Kashmir tour with Zanpaan Kashmir."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/about"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
}