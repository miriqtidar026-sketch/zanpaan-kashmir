"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What's included in your tour packages?",
    answer:
      "Our packages can include accommodation, transportation, sightseeing, airport transfers, and itinerary planning. The inclusions depend on the package you choose.",
  },
  {
    question: "Can I customize my trip?",
    answer:
      "Absolutely. We can tailor your itinerary based on your budget, travel dates, destinations, and preferences.",
  },
  {
    question: "Do you arrange airport pickup and drop-off?",
    answer:
      "Yes. Airport transfers can be included to ensure a smooth start and end to your trip.",
  },
  {
    question: "Which destinations do you cover?",
    answer:
      "We cover all destinations across Kashmir. Just tell us where you'd like to go, and we'll create an itinerary that matches your travel plans, preferences, and interests.",
  },
  {
    question: "How can I book a trip?",
    answer:
      "Simply contact us through WhatsApp or the contact form. We'll discuss your requirements and help you plan your journey.",
  },
  {
    question: "Is it safe to visit Kashmir?",
    answer:
      "Kashmir welcomes travelers from across the world every year. We'll keep you informed about local conditions and help you plan your trip accordingly.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 font-medium">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Everything You Need To Know
          </h2>

          <p className="mt-5 text-gray-600 leading-7 max-w-2xl mx-auto">
            Find answers to the most common questions about planning your
            Kashmir journey with ZanpaanKashmir.
          </p>

        </div>
        <div className="space-y-4">
  {faqs.map((faq, index) => {
    const isOpen = open === index;

    return (
      <div
        key={index}
        className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300"
      >
        <button
          onClick={() => setOpen(isOpen ? null : index)}
          className="w-full flex items-center justify-between px-6 py-5 text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            {faq.question}
          </h3>

          <ChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-gray-600 leading-7">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}