import { Metadata } from "next";
import PackageHero from "@/components/packages/PackageHero";
import PackageGrid from "@/components/packages/PackageGrid";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages | Honeymoon, Family & Group Tours | Zanpaan Kashmir",
  description:
    "Explore premium Kashmir tour packages by Zanpaan Kashmir. Discover honeymoon, family, group, luxury, and customized tours to Srinagar, Gulmarg, Pahalgam, Sonamarg, and more.",
};

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <PackageHero />
      <PackageGrid />
    </main>
  );
}