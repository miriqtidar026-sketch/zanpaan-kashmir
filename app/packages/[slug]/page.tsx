import { Metadata } from "next";
import { notFound } from "next/navigation";

import PackageHero from "@/components/details/PackageHero";
import PackageInfo from "@/components/details/PackageInfo";
import PackageOverview from "@/components/details/PackageOverview";
import Itinerary from "@/components/details/Itinerary";
import Included from "@/components/details/Included";
import Excluded from "@/components/details/Excluded";
import Activities from "@/components/details/Activities";
import FAQ from "@/components/details/FAQ";
import BookingCTA from "@/components/details/BookingCTA";

import { packages } from "@/components/data/packages";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(packages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    return {
      title: "Package Not Found | Zanpaan Kashmir",
      description: "The requested Kashmir tour package could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${pkg.title} | Zanpaan Kashmir`;
  const description =
    pkg.overview.length > 160
      ? `${pkg.overview.substring(0, 157)}...`
      : pkg.overview;

  const url = `https://zanpaankashmir.com/packages/${slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: ["/og-image.jpg"],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      pkg.title,
      "Kashmir Tour Package",
      "Kashmir Travel",
      "Kashmir Holiday",
      "Srinagar Tour",
      "Gulmarg Tour",
      "Pahalgam Tour",
      "Sonamarg Tour",
      "Luxury Kashmir Tour",
      "Zanpaan Kashmir",
    ],
  };
}

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <PackageHero title={pkg.title} image={pkg.image} />

      <PackageInfo
        price={pkg.price}
        duration={pkg.duration}
        bestFor={pkg.bestFor}
        transport={pkg.transport}
      />

      <PackageOverview overview={pkg.overview} />

      <Itinerary itinerary={pkg.itinerary} />

      <Included included={pkg.included} />

      <Excluded excluded={pkg.excluded} />

      <Activities activities={pkg.activities} />

      <FAQ faqs={pkg.faqs} />

      <BookingCTA title={pkg.title} />
    </>
  );
}