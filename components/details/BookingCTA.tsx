import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

type BookingCTAProps = {
  title: string;
};

export default function BookingCTA({
  title,
}: BookingCTAProps) {
  const whatsappMessage = encodeURIComponent(
    `Hello Zanpaan Kashmir,

I am interested in your ${title}.

Please share the complete itinerary, price, hotel details, and availability.

Thank you!`
  );

  return (
    <section className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-white p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to Explore Kashmir?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Book your dream Kashmir vacation today. Contact our travel experts
            for personalized assistance, the latest offers, and instant
            confirmation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href={`https://wa.me/919469181623?text=${whatsappMessage}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={22} />
              Book on WhatsApp
            </Link>

            <Link
              href="tel:+919469181623"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              <Phone size={22} />
              Call Now
            </Link>
          </div>

          <div className="mt-8 rounded-xl bg-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Why Book With Zanpaan Kashmir?
            </h3>

            <div className="mt-5 grid gap-4 text-left sm:grid-cols-2">
              <div>✅ Local Kashmir Travel Experts</div>
              <div>✅ Best Price Guarantee</div>
              <div>✅ 24/7 Customer Support</div>
              <div>✅ Customized Tour Packages</div>
              <div>✅ Premium Hotels</div>
              <div>✅ Private Transportation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}