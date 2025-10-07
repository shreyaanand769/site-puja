// src/pandalHopping.js

/**
 * An array of objects, each representing a Durga Puja pandal.
 * This structure is designed to support an e-commerce-like experience
 * for users to browse, save (add to interest), and schedule their pandal hopping.
 */
export const pandalHopping = [
  {
    id: 1,
    title: "Bagbazar Sarbojanin",
    description: "One of the oldest and most revered Durga Pujas in Kolkata, known for its enduring traditional charm and magnificent idol.",
    image: "/images/bagbazar.jpeg",
    location: {
      address: "Bagbazar, Kolkata, West Bengal 700003",
      latitude: 22.5992,
      longitude: 88.3693,
    },
    timings: {
      // Using 24-hour format
      opens: "10:00",
      closes: "03:00", // Closes early morning next day
    },
    peakHours: "19:00 - 23:00",
    nearestMetro: "Shyambazar (1.2 km)",
    rating: 4.8,
    reviews: 1250,
    entryFee: "Free",
    tags: ["Traditional", "Iconic", "Must Visit"],
    specialAttractions: ["Traditional Idol", "Bonedi Barir Puja Feel", "Fairground"],
  },
  {
    id: 2,
    title: "College Square Puja",
    description: "Famed for its stunning setting by a large water tank, where the beautiful idol and elaborate lighting are reflected mesmerizingly.",
    image: "/images/1.jpeg",
    location: {
      address: "53, College St, Kolkata, West Bengal 700073",
      latitude: 22.5744,
      longitude: 88.3626,
    },
    timings: {
      opens: "11:00",
      closes: "02:00",
    },
    peakHours: "20:00 - 00:00",
    nearestMetro: "Mahatma Gandhi Road (800 m)",
    rating: 4.7,
    reviews: 1100,
    entryFee: "Free",
    tags: ["Scenic", "Lighting", "Reflection"],
    specialAttractions: ["Lakeside view", "Spectacular lighting", "Photography spot"],
  },
  {
    id: 3,
    title: "Kumartuli Park Sarbojanin",
    description: "Located in the heart of the idol-makers' colony, this pandal is celebrated for its artistic brilliance and innovative themes.",
    image: "/images/images(1).jpeg",
    location: {
      address: "Kumartuli Park, Kolkata, West Bengal 700005",
      latitude: 22.6033,
      longitude: 88.3718,
    },
    timings: {
      opens: "12:00",
      closes: "02:30",
    },
    peakHours: "19:30 - 23:30",
    nearestMetro: "Sovabazar Sutanuti (600 m)",
    rating: 4.6,
    reviews: 980,
    entryFee: "Free",
    tags: ["Artistic", "Themed", "Creative"],
    specialAttractions: ["Unique idol artistry", "Close to idol workshops", "Innovative Pandal design"],
  },
];