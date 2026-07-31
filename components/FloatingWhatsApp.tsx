"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phone = "919469181623";
  const message = encodeURIComponent(
    "Hi! I'm interested in booking a Kashmir tour with Zanpaan Kashmir."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}