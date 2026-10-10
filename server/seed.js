const mongoose = require("mongoose");
require("dotenv").config();

const Property = require("./models/Property");

const properties = [
  {
    name: "Vantage Heights",
    slug: "vantage-heights",
    location: "Lekki Phase 1, Lagos",
    price: 185000000,
    type: "Residential",
    status: "For Sale",
    completionStatus: "Completed",
    description:
      "A contemporary luxury residence designed for modern family living.",
    bedrooms: 4,
    bathrooms: 5,
    size: 420,
    features: [
      "24/7 Security",
      "Swimming Pool",
      "Private Parking",
      "Backup Power",
    ],
    image: "/src/images/vantage height.jpg",
  },

  {
  name: "The Grove Residences",
  slug: "the-grove-residences",
  location: "Ikoyi, Lagos",
  price: 320000000,
  type: "Residential",
  status: "For Sale",
  completionStatus: "Under Construction",
  description:
    "Elegant residences combining privacy, comfort and contemporary design.",
  bedrooms: 3,
  bathrooms: 4,
  size: 310,
  features: [
    "24/7 Security",
    "Fitness Centre",
    "Private Parking",
    "Backup Power",
  ],
  image: "/src/images/The Grove Residence.jpg",
},

{
  name: "Apex Business Park",
  slug: "apex-business-park",
  location: "Victoria Island, Lagos",
  price: 250000000,
  type: "Commercial",
  status: "Available",
  completionStatus: "Completed",
  description:
    "A premium commercial development built for ambitious businesses.",
  bedrooms: 0,
  bathrooms: 4,
  size: 600,
  features: [
    "24/7 Security",
    "High-Speed Elevators",
    "Backup Power",
    "Conference Facilities",
  ],
  image: "/src/images/Apex Business Park.jpg",
},
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB for seeding");

    await Property.deleteMany({});
    await Property.insertMany(properties);

    console.log("Properties seeded successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding error:", error.message);
    await mongoose.connection.close();
  }
};

seedDatabase();