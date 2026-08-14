import { createFileRoute } from "@tanstack/react-router";

import { hotel, seo } from "@/data/hotel";
import { BookingProvider } from "@/components/site/booking";
import { Navbar } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { BookingBar } from "@/components/site/booking-bar";
import { Intro } from "@/components/site/intro";
import { MountainStory } from "@/components/site/mountain-story";
import { Rooms } from "@/components/site/rooms";
import { Dining } from "@/components/site/dining";
import { Experiences } from "@/components/site/experiences";
import { Amenities } from "@/components/site/amenities";
import { Reviews } from "@/components/site/reviews";
import { Location } from "@/components/site/location";
import { FinalCTA } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Cursor } from "@/components/site/cursor";

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.name,
  description: seo.description,
  telephone: hotel.phone,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: hotel.address.street,
    addressLocality: hotel.address.locality,
    addressRegion: hotel.address.region,
    postalCode: hotel.address.postalCode,
    addressCountry: "IN",
  },
  hasMap: hotel.mapsPlaceUrl,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: hotel.name,
  url: "/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Stay", item: "/#stay" },
    { "@type": "ListItem", position: 3, name: "Location", item: "/#location" },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(hotelSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function Index() {
  return (
    <BookingProvider>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        <Intro />
        <MountainStory />
        <div id="rooms">
          <Rooms />
        </div>
        <Dining />
        <Experiences />
        <Amenities />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </BookingProvider>
  );
}
