"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-blue-700">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Frequently Asked
            <span className="block text-green-600">Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Everything you need to know before booking your Kashmir trip with
            Zanpaan Kashmir.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold transition-all duration-300 ${
                      isOpen
                        ? "bg-green-600 text-white rotate-180"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-8 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Our travel experts are available to help you choose the perfect
            Kashmir package and answer all your questions before booking.
          </p>
        </div>
      </div>
    </section>
  );
}