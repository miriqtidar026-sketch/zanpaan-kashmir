type FAQ = {
  question: string;
  answer: string;
};

type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export type Package = {
  title: string;
  price: string;
  duration: string;
  bestFor: string;
  transport: string;
  image: string;

  overview: string;

  itinerary: ItineraryDay[];

  included: string[];

  excluded: string[];

  activities: string[];

  faqs: FAQ[];
};

export const packages: Record<string, Package> = {
  honeymoon: {
    title: "Honeymoon Package",
    price: "₹30,000 / Person",
    duration: "5 Days / 4 Nights",
    bestFor: "Couples & Honeymooners",
    transport: "Private Cab Included",
    image: "/images/packages/destinations/honeymoon.jpg",

    overview:
      "Celebrate your love amidst the breathtaking landscapes of Kashmir. This honeymoon package includes romantic stays, private transportation, scenic sightseeing, and unforgettable experiences designed for couples.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar",
        description:
          "Arrival at Srinagar Airport. Meet our representative and transfer to your hotel or houseboat. Enjoy an evening Shikara ride on Dal Lake and relax overnight.",
      },
      {
        day: "Day 2",
        title: "Gulmarg Excursion",
        description:
          "Visit Gulmarg and enjoy the famous Gondola ride, snow activities (seasonal), and stunning mountain views before returning to Srinagar.",
      },
      {
        day: "Day 3",
        title: "Pahalgam Tour",
        description:
          "Explore Pahalgam, including Betaab Valley, Aru Valley, Lidder River, and local sightseeing before returning to your hotel.",
      },
      {
        day: "Day 4",
        title: "Sonamarg Excursion",
        description:
          "Visit Sonamarg, admire the picturesque meadows, enjoy optional pony rides, and spend quality time surrounded by nature.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "After breakfast, check out from the hotel and transfer to Srinagar Airport with unforgettable memories.",
      },
    ],

    included: [
      "Airport Pickup & Drop",
      "Hotel Accommodation",
      "Daily Breakfast",
      "Daily Dinner",
      "Private Cab",
      "Complete Sightseeing",
      "Shikara Ride",
      "Driver Charges",
      "Fuel Charges",
      "Parking Charges",
      "Toll Taxes",
      "24/7 Customer Support",
    ],

    excluded: [
      "Airfare",
      "Lunch",
      "Personal Expenses",
      "Entry Tickets",
      "Adventure Activities",
      "Travel Insurance",
      "Anything Not Mentioned Above",
    ],

    activities: [
      "Shikara Ride",
      "Gondola Ride",
      "Snow Activities",
      "Horse Riding",
      "Photography",
      "Shopping",
      "Nature Walk",
      "Local Sightseeing",
      "Camping (Optional)",
    ],

    faqs: [
      {
        question: "Is airfare included?",
        answer:
          "No. Airfare is not included in this package.",
      },
      {
        question: "Can we customize the itinerary?",
        answer:
          "Yes. The itinerary can be customized according to your preferences.",
      },
      {
        question: "Are honeymoon decorations included?",
        answer:
          "Yes, honeymoon room decoration can be arranged on request.",
      },
      {
        question: "Is the package available throughout the year?",
        answer:
          "Yes, subject to hotel and transport availability.",
      },
    ],
  },
    family: {
    title: "Family Package",
    price: "₹28,000 / Person",
    duration: "6 Days / 5 Nights",
    bestFor: "Families",
    transport: "Private Cab Included",
    image: "/images/packages/destinations/family.jpg",

    overview:
      "Spend quality time with your loved ones while exploring the beauty of Kashmir. This package is designed for families seeking comfort, sightseeing, and memorable experiences.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar",
        description:
          "Airport pickup, hotel check-in, local sightseeing and evening leisure.",
      },
      {
        day: "Day 2",
        title: "Gulmarg",
        description:
          "Visit Gulmarg, enjoy Gondola ride and family-friendly activities.",
      },
      {
        day: "Day 3",
        title: "Pahalgam",
        description:
          "Visit Betaab Valley, Aru Valley and Lidder River.",
      },
      {
        day: "Day 4",
        title: "Sonamarg",
        description:
          "Enjoy the scenic beauty of Sonamarg and optional pony rides.",
      },
      {
        day: "Day 5",
        title: "Srinagar City Tour",
        description:
          "Explore Mughal Gardens, Nishat Bagh, Shalimar Bagh and Hazratbal Shrine.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Breakfast followed by airport transfer.",
      },
    ],

    included: [
      "Airport Pickup & Drop",
      "Hotel Accommodation",
      "Breakfast & Dinner",
      "Private Cab",
      "Sightseeing",
      "Driver Charges",
      "Fuel Charges",
      "Parking Charges",
      "Toll Taxes",
      "24/7 Support",
    ],

    excluded: [
      "Airfare",
      "Lunch",
      "Entry Tickets",
      "Personal Expenses",
      "Adventure Activities",
      "Travel Insurance",
    ],

    activities: [
      "Shikara Ride",
      "Family Sightseeing",
      "Photography",
      "Shopping",
      "Nature Walk",
      "Garden Visit",
    ],

    faqs: [
      {
        question: "Is this package suitable for children?",
        answer:
          "Yes. The itinerary is designed to be comfortable for families with children.",
      },
      {
        question: "Can extra beds be arranged?",
        answer:
          "Yes. Extra beds are available at an additional cost.",
      },
      {
        question: "Can senior citizens join?",
        answer:
          "Yes. The itinerary is suitable for senior citizens as well.",
      },
    ],
  },

  group: {
    title: "Group Package",
    price: "₹24,999 / Person",
    duration: "5 Days / 4 Nights",
    bestFor: "Friends & Groups",
    transport: "Private Tempo Traveller",
    image: "/images/packages/destinations/group.jpg",

    overview:
      "Perfect for friends, colleges, corporate trips and adventure lovers. Enjoy Kashmir together with comfortable group transportation and exciting sightseeing.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar",
        description:
          "Airport pickup, hotel check-in and evening at Dal Lake.",
      },
      {
        day: "Day 2",
        title: "Gulmarg Adventure",
        description:
          "Enjoy Gondola ride, skiing (seasonal) and group activities.",
      },
      {
        day: "Day 3",
        title: "Pahalgam",
        description:
          "Visit Betaab Valley, Aru Valley and local sightseeing.",
      },
      {
        day: "Day 4",
        title: "Srinagar",
        description:
          "Visit Mughal Gardens, Lal Chowk and enjoy shopping.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast and airport transfer.",
      },
    ],

    included: [
      "Airport Pickup & Drop",
      "Hotel Accommodation",
      "Breakfast & Dinner",
      "Tempo Traveller",
      "Sightseeing",
      "Fuel Charges",
      "Parking Charges",
      "Driver Charges",
      "24/7 Support",
    ],

    excluded: [
      "Airfare",
      "Lunch",
      "Entry Tickets",
      "Adventure Activities",
      "Travel Insurance",
      "Personal Expenses",
    ],

    activities: [
      "Gondola Ride",
      "Snow Activities",
      "Group Photography",
      "Shopping",
      "Shikara Ride",
      "Bonfire (Optional)",
    ],

    faqs: [
      {
        question: "How many people are required?",
        answer:
          "The package is ideal for groups of 6 or more people.",
      },
      {
        question: "Can colleges book this package?",
        answer:
          "Yes. College and corporate group bookings are welcome.",
      },
      {
        question: "Do you provide a tour guide?",
        answer:
          "A guide can be arranged upon request.",
      },
    ],
  },
  signature: {
  title: "Kashmir Signature Tour",
  price: "₹48,000 / Couple",
  duration: "6 Days / 5 Nights",
  bestFor: "Couples, Families & Luxury Travelers",
  transport: "Private SUV / Sedan Included",
  image: "/images/packages/cou.jpeg",

  overview:
    "Our flagship Kashmir experience featuring premium hotels, a luxury houseboat stay, private transportation, iconic sightseeing, and authentic Kashmiri hospitality. Designed for travelers who want to experience the very best of Kashmir in comfort and style.",

  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Srinagar",
      description:
        "Airport pickup, hotel check-in, evening Shikara ride on Dal Lake and local market visit.",
    },
    {
      day: "Day 2",
      title: "Explore Srinagar",
      description:
        "Visit Mughal Gardens, Pari Mahal, Hazratbal Shrine and enjoy local shopping.",
    },
    {
      day: "Day 3",
      title: "Gulmarg",
      description:
        "Full-day excursion to Gulmarg with Gondola ride (optional) and scenic mountain views.",
    },
    {
      day: "Day 4",
      title: "Pahalgam",
      description:
        "Visit Betaab Valley, Aru Valley and enjoy the beautiful Lidder River.",
    },
    {
      day: "Day 5",
      title: "Sonamarg",
      description:
        "Explore Sonamarg and Thajiwas Glacier with optional pony rides and photography.",
    },
    {
      day: "Day 6",
      title: "Departure",
      description:
        "Breakfast, hotel checkout and airport transfer.",
    },
  ],

  included: [
    "Airport Pickup & Drop",
    "Luxury Hotel Accommodation",
    "Private Cab",
    "Breakfast & Dinner",
    "Shikara Ride",
    "Sightseeing",
    "Parking & Toll Taxes",
    "Driver Charges",
    "24/7 Travel Support",
  ],

  excluded: [
    "Airfare",
    "Lunch",
    "Personal Expenses",
    "Adventure Activities",
    "Gondola Tickets",
    "Travel Insurance",
  ],

  activities: [
    "Shikara Ride",
    "Gondola Ride",
    "Local Shopping",
    "Nature Photography",
    "Houseboat Stay",
    "Snow Activities (Seasonal)",
  ],

  faqs: [
    {
      question: "Can I customize this package?",
      answer:
        "Yes. We can customize the itinerary, hotels and activities according to your preferences.",
    },
    {
      question: "Are flights included?",
      answer:
        "No. Flights are not included in the package price.",
    },
    {
      question: "Is this package suitable for families?",
      answer:
        "Yes. It is ideal for couples, families and small groups.",
    },
    {
      question: "What type of hotels are included?",
      answer:
        "We provide carefully selected premium hotels and comfortable accommodations.",
    },
  ],
},
    solo: {
    title: "Solo Package",
    price: "₹26,000 / Person",
    duration: "4 Days / 3 Nights",
    bestFor: "Solo Travelers",
    transport: "Private Cab Included",
    image: "/images/packages/destinations/solo.jpg",

    overview:
      "Explore Kashmir at your own pace with our Solo Package. Perfect for travelers seeking peace, adventure, and breathtaking scenery while enjoying a safe and comfortable journey.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar",
        description:
          "Airport pickup, hotel check-in, local sightseeing and Dal Lake Shikara ride.",
      },
      {
        day: "Day 2",
        title: "Gulmarg",
        description:
          "Visit Gulmarg and enjoy Gondola ride, snow activities (seasonal) and mountain views.",
      },
      {
        day: "Day 3",
        title: "Pahalgam",
        description:
          "Explore Betaab Valley, Aru Valley and Lidder River.",
      },
      {
        day: "Day 4",
        title: "Departure",
        description:
          "Breakfast followed by airport transfer.",
      },
    ],

    included: [
      "Airport Pickup & Drop",
      "Hotel Accommodation",
      "Breakfast & Dinner",
      "Private Cab",
      "Sightseeing",
      "Driver Charges",
      "Fuel Charges",
      "Parking Charges",
      "24/7 Support",
    ],

    excluded: [
      "Airfare",
      "Lunch",
      "Travel Insurance",
      "Personal Expenses",
      "Adventure Activities",
    ],

    activities: [
      "Photography",
      "Nature Walk",
      "Shikara Ride",
      "Shopping",
      "Local Sightseeing",
    ],

    faqs: [
      {
        question: "Is Kashmir safe for solo travelers?",
        answer:
          "Yes. We provide local assistance and private transport throughout your trip.",
      },
      {
        question: "Can I customize the itinerary?",
        answer:
          "Yes. We can modify the itinerary according to your preferences.",
      },
    ],
  },

  luxury: {
    title: "Luxury Package",
    price: "₹50,000 / Person",
    duration: "6 Days / 5 Nights",
    bestFor: "Luxury Travelers",
    transport: "Premium Private Cab",
    image: "/images/packages/destinations/luxury.jpg",

    overview:
      "Experience Kashmir in luxury with premium hotels, VIP transportation, exclusive experiences, and personalized service throughout your journey.",

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar",
        description:
          "Airport pickup in a premium vehicle, luxury hotel check-in and evening Shikara ride.",
      },
      {
        day: "Day 2",
        title: "Luxury Gulmarg Tour",
        description:
          "Private sightseeing, Gondola ride and premium dining experience.",
      },
      {
        day: "Day 3",
        title: "Pahalgam",
        description:
          "Luxury sightseeing with premium accommodations and leisure time.",
      },
      {
        day: "Day 4",
        title: "Sonamarg",
        description:
          "Explore Sonamarg in comfort with optional premium activities.",
      },
      {
        day: "Day 5",
        title: "Srinagar",
        description:
          "Visit Mughal Gardens, shopping and luxury dining.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Airport transfer after breakfast.",
      },
    ],

    included: [
      "Luxury Hotel",
      "Airport Pickup & Drop",
      "Premium Private Cab",
      "Breakfast & Dinner",
      "Sightseeing",
      "Driver Charges",
      "Fuel Charges",
      "Parking Charges",
      "24/7 VIP Support",
    ],

    excluded: [
      "Airfare",
      "Lunch",
      "Adventure Activities",
      "Travel Insurance",
      "Personal Expenses",
    ],

    activities: [
      "Luxury Shikara Ride",
      "Private Sightseeing",
      "Photography",
      "Shopping",
      "Spa (Optional)",
    ],

    faqs: [
      {
        question: "Which hotels are included?",
        answer:
          "Premium 4-star or 5-star hotels depending on availability.",
      },
      {
        question: "Can I upgrade further?",
        answer:
          "Yes. Custom luxury upgrades are available.",
      },
    ],
  },

  customized: {
    title: "Customized Package",
    price: "Starting from ₹30,000",
    duration: "Flexible",
    bestFor: "Everyone",
    transport: "Customized Transport",
    image: "/images/packages/destinations/customized.jpg",

    overview:
      "Build your own Kashmir itinerary. Choose your destinations, hotels, transportation, activities, and trip duration according to your preferences.",

    itinerary: [
      {
        day: "Flexible",
        title: "Your Plan",
        description:
          "Our travel experts will create a personalized itinerary based on your interests, budget and travel dates.",
      },
    ],

    included: [
      "Custom Itinerary",
      "Hotel Booking",
      "Private Transport",
      "Sightseeing",
      "Travel Assistance",
      "24/7 Support",
    ],

    excluded: [
      "Airfare",
      "Travel Insurance",
      "Personal Expenses",
      "Optional Activities",
    ],

    activities: [
      "Choose Any Destination",
      "Adventure Activities",
      "Shopping",
      "Photography",
      "Nature Tours",
      "Family Tours",
      "Honeymoon Tours",
    ],

    faqs: [
      {
        question: "Can I select my own hotels?",
        answer:
          "Yes. You can choose hotels based on your budget and preferences.",
      },
      {
        question: "Can I change the trip duration?",
        answer:
          "Absolutely. The package is fully customizable.",
      },
      {
        question: "How do I get a quotation?",
        answer:
          "Contact us on WhatsApp with your travel details and we'll prepare a personalized quote.",
      },
    ],
  },
};