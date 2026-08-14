/**
 * CENTRAL CONTENT FILE — edit hotel information here, never in the UI components.
 *
 * NOTE ON VERIFICATION: fields marked `// VERIFY` contain editable placeholder
 * copy written in neutral language. Replace them with hotel-confirmed details
 * before launch. Ratings, address and phone below are the figures supplied by
 * the hotel/its listings.
 */
import heroHimalayas from "@/assets/hero-himalayas.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import roomMountainView from "@/assets/room-mountain-view.jpg";
import roomTwin from "@/assets/room-twin.jpg";
import roomFamily from "@/assets/room-family.jpg";
import diningFood from "@/assets/dining-food.jpg";
import diningRoom from "@/assets/dining-room.jpg";
import breakfastBalcony from "@/assets/breakfast-balcony.jpg";
import monastery from "@/assets/monastery.jpg";
import natureWaterfall from "@/assets/nature-waterfall.jpg";
import scenicDrive from "@/assets/scenic-drive.jpg";
import mountainWide from "@/assets/mountain-wide.jpg";
import guestLounge from "@/assets/guest-lounge.jpg";
import sunsetClosing from "@/assets/sunset-closing.jpg";

export const images = {
  heroHimalayas,
  hotelExterior,
  roomMountainView,
  roomTwin,
  roomFamily,
  diningFood,
  diningRoom,
  breakfastBalcony,
  monastery,
  natureWaterfall,
  scenicDrive,
  mountainWide,
  guestLounge,
  sunsetClosing,
};

export const hotel = {
  name: "Hotel Sikkim Aurora",
  tagline: "Mountain Views. Warm Hospitality. Pelling.",
  address: {
    street: "Karki Dara, New Helipad",
    locality: "Pelling",
    region: "Sikkim",
    postalCode: "737113",
    country: "India",
  },
  phone: "+91 97322 58987",
  phoneHref: "tel:+919732258987",
  /** Set this to the hotel's real booking engine URL when available. */
  bookingUrl: "",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Hotel+Sikkim+Aurora,+Karki+Dara,+New+Helipad,+Pelling,+Sikkim+737113",
  mapsPlaceUrl:
    "https://www.google.com/maps/search/?api=1&query=Hotel+Sikkim+Aurora+Pelling+Sikkim",
  /** Add official profiles only when confirmed by the hotel. */
  social: [] as { label: string; url: string }[],
};

export const nav = [
  { label: "Stay", href: "#stay" },
  { label: "Experience", href: "#experience" },
  { label: "Dining", href: "#dining" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
];

export type Room = {
  name: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  description: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    name: "Mountain View Room", // VERIFY room category name
    image: roomMountainView,
    width: 1408,
    height: 1008,
    alt: "Hotel room with a large window framing the Himalayan mountains",
    description:
      "A calm room arranged around the view, with a comfortable bed and space to slow down after a day out in Pelling.", // VERIFY
    amenities: ["Mountain view", "Wi-Fi", "Room service"],
  },
  {
    name: "Twin Room", // VERIFY room category name
    image: roomTwin,
    width: 1400,
    height: 1000,
    alt: "Twin bedroom with ivory linens and a forest view window",
    description:
      "A practical, quiet room for two travellers, with warm wood detail and forested surroundings outside the window.", // VERIFY
    amenities: ["Two beds", "Wi-Fi", "Room service"],
  },
  {
    name: "Family Room", // VERIFY room category name
    image: roomFamily,
    width: 1400,
    height: 1000,
    alt: "Spacious family room with two beds and a seating area",
    description:
      "Extra space for families, with a sitting area and room to spread out between days of exploring West Sikkim.", // VERIFY
    amenities: ["Sitting area", "Wi-Fi", "Family friendly"],
  },
];

export const diningGallery = [
  {
    image: diningFood,
    width: 1200,
    height: 1504,
    alt: "Momos, thukpa and local Sikkimese dishes on a wooden table",
    title: "Local plates", // VERIFY menu details
    caption: "Comforting Himalayan favourites, cooked fresh through the day.",
  },
  {
    image: diningRoom,
    width: 1200,
    height: 1504,
    alt: "Hotel dining room with wooden tables beside a window overlooking misty hills",
    title: "The dining room",
    caption: "Quiet tables, big windows and hill light in the morning.",
  },
  {
    image: breakfastBalcony,
    width: 1200,
    height: 1500,
    alt: "Cup of tea resting on a balcony railing above a cloud filled valley",
    title: "Morning tea",
    caption: "Start slow with tea and clouds still sitting in the valley.",
  },
  {
    image: guestLounge,
    width: 1280,
    height: 1600,
    alt: "Hotel lounge with woven chairs, plants and a window looking onto hills",
    title: "Guest lounge",
    caption: "A shared corner to read, plan the day or simply sit.",
  },
];

export const experiences = [
  {
    name: "Himalayan viewpoints",
    image: mountainWide,
    width: 1920,
    height: 1088,
    alt: "Himalayan ridges and clouds seen from a terrace in Pelling",
    description:
      "Pelling is known for its wide views towards the Kanchenjunga range on clear mornings.", // VERIFY
  },
  {
    name: "Monasteries",
    image: monastery,
    width: 1200,
    height: 1500,
    alt: "Buddhist monastery with prayer flags in West Sikkim",
    description:
      "West Sikkim's monasteries are part of everyday life here, quiet and worth unhurried visits.", // VERIFY
  },
  {
    name: "Waterfalls & nature",
    image: natureWaterfall,
    width: 1200,
    height: 1500,
    alt: "Waterfall falling through mossy green Himalayan forest",
    description:
      "Green forest walks and waterfalls sit close to town for an easy half day out.", // VERIFY
  },
  {
    name: "Scenic drives",
    image: scenicDrive,
    width: 1200,
    height: 1500,
    alt: "Winding mountain road through pine forest with valley views",
    description:
      "Mountain roads through pine and cloud make the journey as memorable as the stops.", // VERIFY
  },
];

/** Only list amenities the hotel has confirmed. */
export const amenities = [
  { label: "Breakfast", icon: "coffee" },
  { label: "Wi-Fi", icon: "wifi" },
  { label: "Parking", icon: "car" },
  { label: "Room service", icon: "concierge" },
  { label: "Child friendly", icon: "family" },
  { label: "Airport transportation", icon: "plane" },
] as const;

export const ratings = [
  { source: "Google", score: "4.2", count: "562", url: hotel.mapsPlaceUrl },
  {
    source: "Tripadvisor",
    score: "4.2",
    count: "140",
    url: "https://www.tripadvisor.com/Search?q=Hotel%20Sikkim%20Aurora%20Pelling",
  },
];

/**
 * PLACEHOLDER REVIEW EXCERPTS — replace each `quote` with a verified guest
 * review before launch. `verified: false` hides nothing but flags the entry.
 */
export const reviews = [
  {
    quote: "Review excerpt to be added from a verified guest review.",
    attribution: "Guest review",
    verified: false,
  },
  {
    quote: "Review excerpt to be added from a verified guest review.",
    attribution: "Guest review",
    verified: false,
  },
  {
    quote: "Review excerpt to be added from a verified guest review.",
    attribution: "Guest review",
    verified: false,
  },
];

export const seo = {
  title: "Hotel Sikkim Aurora | Mountain Stay in Pelling, Sikkim",
  description:
    "Stay at Hotel Sikkim Aurora in Pelling, Sikkim. Enjoy a comfortable mountain stay near New Helipad with warm hospitality, scenic surroundings and easy access to Pelling's attractions.",
};