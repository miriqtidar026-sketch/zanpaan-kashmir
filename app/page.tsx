import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedPackages from "../components/packages/FeaturedPackages";
import PopularDestinations from "@/components/sections/PopularDestinations";
import WhyChoose from "@/components/home/WhyChoose";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPackages/>
      <PopularDestinations/>
      <WhyChoose />
      <Faq/>
      <ContactSection/>
      <Footer/>
    </>
  );
}