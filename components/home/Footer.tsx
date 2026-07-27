import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
              ZanPaan Kashmir
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-stone-600">
              Crafting unforgettable journeys through the breathtaking beauty,
              culture, and hospitality of Kashmir. Every trip is thoughtfully
              designed to create memories that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="text-stone-600 transition-colors hover:text-stone-900"
              >
                Home
              </Link>

              <Link
                href="/#destinations"
                className="text-stone-600 transition-colors hover:text-stone-900"
              >
                Destinations
              </Link>

              <Link
                href="/#faq"
                className="text-stone-600 transition-colors hover:text-stone-900"
              >
                FAQ
              </Link>

              <Link
                href="/#contact"
                className="text-stone-600 transition-colors hover:text-stone-900"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold text-stone-900">
              Connect With Us
            </h3>

            <div className="mt-5 flex flex-col gap-5">
              <a
                href="https://www.instagram.com/zanpaankashmir/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-600 transition-colors hover:text-stone-900"
              >
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>

              <a
                href="https://wa.me/919682181623"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-600 transition-colors hover:text-stone-900"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://maps.app.goo.gl/CTQQ5Z8VX4QgSKcd7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone-600 transition-colors hover:text-stone-900"
              >
                <MapPin size={20} />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-stone-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} ZanPaan Kashmir. All rights reserved.
            </p>

            <p>
              Designed with ❤️ for unforgettable Kashmir experiences.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}