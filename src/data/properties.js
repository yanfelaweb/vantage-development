
import vantageHeight from "../images/vantage height.jpg";
import groveResidence from "../images/The Grove Residence.jpg";
import apexBusinessPark from "../images/Apex Business Park.jpg";



const properties = [
  {
    id: 1,
    slug: "vantage-height",
    name: "Vantage Heights",
    location: "Lekki Phase 1, Lagos",
    price: 185000000,
    type: "Residential",
    status: "For Sale",
    description: "A contemporary luxury residence designed for modern family living.",
    bedrooms: 4,
    bathrooms: 5,
    size: 420,
    completionStatus: "Completed",
          features: [
        "24/7 Security",
        "Swimming Pool",
        "Private Parking",
        "Backup Power",
      ],
    image: vantageHeight,
    
   
  },

  {
    id: 2,
    slug: "the-grove-residences",
    name: "The Grove Residences",
    location: "Ikoyi, Lagos",
    price: 320000000,
    type: "Residential",
    status: "For Sale",
    description: "Elegant residences combining privacy, comfort and contemporary design.",
    bedrooms: 3,
    bathrooms: 4,
    size: 310,
    completionStatus: "under Construction",
        features: [
      "24/7 Security",
      "Fitness Centre",
      "Private Parking",
      "Backup Power",
    ],
    image: groveResidence ,
   
  },

  {
    id: 3,
    slug: "apex-business-park",
    name: "Apex Business Park",
    location: "Victoria Island, Lagos",
    price: 250000000,
    type: "Commercial",
    status: "Available",
    description: "A premium commercial development built for ambitious businesses.",
    bedrooms: 0,
    bathrooms: 4,
    size: 600,
    completionStatus: "completed",
          features: [
        "24/7 Security",
        "High-Speed Elevators",
        "Backup Power",
        "Conference Facilities",
      ],
    image: apexBusinessPark,
    
  },
];

export default properties;