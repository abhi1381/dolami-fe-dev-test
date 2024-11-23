export type Product = {
  id: string;
  name: string;
  creator: string;
  rating: number;
  price: number;
  image: string;
  category: string;
  subcategory: string;
};

export type Category = {
  name: string;
  subcategories: string[];
};

export const categories: Category[] = [
  {
    name: "Avatars",
    subcategories: ["Human-like", "Anthro & Furry", "Robot & Cyborgs"],
  },
  {
    name: "Fashion",
    subcategories: ["Clothes", "Accessories"],
  },
  {
    name: "Animations",
    subcategories: ["Dance", "Emotes", "Actions"],
  },
  {
    name: "Environment",
    subcategories: ["Indoor", "Outdoor", "Sci-fi"],
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Cyber Punk Avatar",
    creator: "Digital Dreams",
    rating: 5.0,
    price: 10.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Avatars",
    subcategory: "Human-like",
  },
  {
    id: "2",
    name: "Fox Character",
    creator: "Furry Designs",
    rating: 5.0,
    price: 10.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Avatars",
    subcategory: "Anthro & Furry",
  },
  {
    id: "3",
    name: "Android X-1000",
    creator: "Robot Labs",
    rating: 5.0,
    price: 10.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Avatars",
    subcategory: "Robot & Cyborgs",
  },
  {
    id: "4",
    name: "Urban Streetwear",
    creator: "Fashion Forward",
    rating: 5.0,
    price: 10.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    subcategory: "Clothes",
  },
  {
    id: "5",
    name: "Cyber Goggles",
    creator: "Tech Wear",
    rating: 5.0,
    price: 10.5,
    image: "/placeholder.svg?height=400&width=400",
    category: "Fashion",
    subcategory: "Accessories",
  },
  {
    id: "6",
    name: "Moonwalk Dance",
    creator: "Move Masters",
    rating: 4.8,
    price: 8.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Animations",
    subcategory: "Dance",
  },
  {
    id: "7",
    name: "Victory Emote",
    creator: "Emote Express",
    rating: 4.9,
    price: 5.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Animations",
    subcategory: "Emotes",
  },
  {
    id: "8",
    name: "Parkour Set",
    creator: "Action Animators",
    rating: 4.7,
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Animations",
    subcategory: "Actions",
  },
  {
    id: "9",
    name: "Cozy Living Room",
    creator: "Interior Innovators",
    rating: 4.8,
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Environment",
    subcategory: "Indoor",
  },
  {
    id: "10",
    name: "Enchanted Forest",
    creator: "Nature Crafters",
    rating: 4.9,
    price: 18.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Environment",
    subcategory: "Outdoor",
  },
  {
    id: "11",
    name: "Space Station Interior",
    creator: "Cosmic Creators",
    rating: 4.7,
    price: 20.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Environment",
    subcategory: "Sci-fi",
  },
];
