"use client";
import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    MessageCircle,
} from "lucide-react";

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
       
        trip: "",
    });
    const sendToWhatsApp = () => {
  const message = `Hello Zanpaan Kashmir!

Name: ${form.name}
Email: ${form.email}

Trip Details:
${form.trip}`;

  window.open(
    `https://wa.me/919682181623?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};


    return (
        <section className="bg-stone-50 py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 font-medium">
                        Contact Us
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-gray-900">
                        Let's Plan Your Kashmir Journey
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-7">
                        Have questions or ready to plan your trip? We'd love to help you
                        create an unforgettable experience in Kashmir.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">          <div className="space-y-6">

                    <div className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                                <MapPin size={22} />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Address
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    Bandipora, Jammu & Kashmir, India
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                                <Phone size={22} />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Phone
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    +91 9682181623
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-white p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                                <Mail size={22} />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Email
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    info@zanpaankashmir.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/919682181623?text=Hi!%20I'm%20interested%20in%20planning%20a%20trip%20to%20Kashmir."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 rounded-2xl bg-gray-900 px-6 py-4 text-white font-medium hover:bg-black transition-colors"
                    >
                        <MessageCircle size={22} />
                        Chat on WhatsApp
                    </a>

                </div>          <div className="rounded-3xl bg-white p-8 border border-gray-200 shadow-sm">

                        <form className="space-y-5">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-gray-900 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="Tell us about your trip..."
                                    value={form.trip}
onChange={(e) => setForm({ ...form, trip: e.target.value })}
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-gray-900 transition-colors"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={sendToWhatsApp}
                                className="w-full rounded-xl bg-gray-900 py-3 text-white font-medium hover:bg-black transition-colors"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>        </div>

            </div>
        </section>
    );
}