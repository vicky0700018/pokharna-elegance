import { categoryImages } from "./categories";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import craftKanchipuram from "@/assets/craft-kanchipuram.jpg";
import craftYeola from "@/assets/craft-yeola.jpg";

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: string; // category slug
  collection: string;
  fabric: string;
  work: string;
  color: string;
  length: string;
  occasion: string;
  description: string;
  care: string;
  price: number;
  originalPrice: number;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
};

const alt: Record<string, string[]> = {
  "banarasi-silk": [gallery2, craftKanchipuram],
  "silk-dress-materials": [gallery2, gallery5],
  "dress-materials": [gallery4, gallery2],
  "chanderi-cotton": [gallery4, gallery5],
  paithani: [craftYeola, gallery5],
  sarees: [gallery5, craftKanchipuram],
  "cotton-collection": [gallery4, gallery5],
  "festive-collection": [gallery2, craftYeola],
};

type Seed = [
  name: string,
  category: string,
  fabric: string,
  work: string,
  color: string,
  occasion: string,
  price: number,
  originalPrice: number,
  stock: number,
  rating: number,
  reviews: number,
  flags: string,
];

const seeds: Seed[] = [
  ["Banarasi Zari Silk Unstitched Suit", "banarasi-silk", "Pure Banarasi Silk", "Handwoven Zari Brocade", "Deep Maroon", "Wedding", 6499, 8999, 12, 4.8, 126, "fbn"],
  ["Handwoven Banarasi Silk Suit Set", "banarasi-silk", "Katan Silk", "Kadhwa Buti Weave", "Royal Plum", "Wedding", 8999, 12499, 6, 4.9, 84, "fb"],
  ["Banarasi Georgette Dress Material", "banarasi-silk", "Banarasi Georgette", "Zari Jaal", "Antique Gold", "Reception", 4899, 6499, 18, 4.6, 58, "n"],
  ["Royal Purple Banarasi Saree", "banarasi-silk", "Banarasi Silk", "Meenakari Zari Border", "Royal Purple", "Wedding", 11999, 15999, 4, 4.9, 41, "fb"],
  ["Banarasi Tissue Silk Suit Piece", "banarasi-silk", "Tissue Silk", "Zari Stripe", "Ivory Gold", "Festive", 5299, 6999, 9, 4.5, 33, ""],
  ["Royal Chanderi Cotton Dress Material", "chanderi-cotton", "Chanderi Cotton Silk", "Woven Butti", "Blush Pink", "Daywear", 2499, 3499, 24, 4.6, 152, "fn"],
  ["Classic Chanderi Floral Suit", "chanderi-cotton", "Chanderi Silk Cotton", "Hand Block Floral", "Mint Ivory", "Casual", 2199, 2999, 30, 4.4, 96, "b"],
  ["Chanderi Gold Border Suit Set", "chanderi-cotton", "Chanderi Cotton", "Gold Zari Border", "Powder Blue", "Office", 2899, 3799, 16, 4.5, 47, ""],
  ["Pastel Chanderi Three Piece Set", "chanderi-cotton", "Chanderi Cotton", "Sequin Highlight", "Peach", "Daywear", 2699, 3499, 21, 4.3, 38, "n"],
  ["Traditional Yeola Paithani", "paithani", "Pure Paithani Silk", "Peacock Motif Pallu", "Bottle Green", "Wedding", 14999, 19999, 3, 5.0, 29, "fb"],
  ["Maharashtrian Paithani Silk Saree", "paithani", "Semi Paithani Silk", "Lotus Zari Border", "Rani Pink", "Festive", 7999, 10999, 7, 4.8, 63, "f"],
  ["Paithani Inspired Dress Material", "paithani", "Paithani Silk Blend", "Zari Weave", "Royal Plum", "Festive", 4299, 5599, 14, 4.4, 25, "n"],
  ["Yeola Paithani Dupatta Suit Set", "paithani", "Paithani Silk", "Handwoven Pallu", "Teal Gold", "Reception", 9499, 12999, 5, 4.7, 19, "b"],
  ["Kanchipuram Pure Silk Saree", "sarees", "Kanchipuram Silk", "Temple Zari Border", "Mustard Red", "Wedding", 12499, 16999, 5, 4.9, 72, "fb"],
  ["Soft Silk Festive Saree", "sarees", "Soft Art Silk", "Zari Buti", "Wine", "Festive", 3499, 4999, 26, 4.4, 88, ""],
  ["Handloom Cotton Silk Saree", "sarees", "Cotton Silk", "Woven Stripe", "Ivory Beige", "Daywear", 2799, 3699, 22, 4.3, 54, "n"],
  ["Bridal Kanjivaram Silk Saree", "sarees", "Pure Kanjivaram Silk", "Heavy Zari Pallu", "Deep Maroon", "Bridal", 14499, 18999, 3, 5.0, 34, "f"],
  ["Georgette Embroidered Saree", "sarees", "Georgette", "Thread Embroidery", "Dusty Rose", "Party", 3299, 4499, 19, 4.2, 41, ""],
  ["Festive Gold Zari Dress Material", "festive-collection", "Silk Blend", "All Over Zari", "Antique Gold", "Festive", 5499, 7499, 11, 4.7, 67, "fbn"],
  ["Diwali Special Silk Suit Set", "festive-collection", "Dola Silk", "Sequin & Zari", "Rani Pink", "Festive", 4599, 6299, 15, 4.5, 52, "b"],
  ["Navratri Bandhani Dress Material", "festive-collection", "Modal Silk", "Bandhani Print", "Marigold", "Festive", 2999, 3999, 28, 4.4, 61, "n"],
  ["Festive Organza Suit with Dupatta", "festive-collection", "Organza", "Embroidered Border", "Ivory Gold", "Party", 4999, 6499, 10, 4.6, 27, ""],
  ["Premium Tussar Silk Suit Set", "silk-dress-materials", "Tussar Silk", "Hand Painted Motif", "Beige Rust", "Occasion", 6299, 8499, 8, 4.7, 44, "f"],
  ["Pure Mysore Silk Dress Material", "silk-dress-materials", "Mysore Silk", "Plain with Zari Border", "Royal Plum", "Occasion", 5799, 7599, 13, 4.6, 36, "b"],
  ["Raw Silk Suit Set with Dupatta", "silk-dress-materials", "Raw Silk", "Resham Embroidery", "Wine", "Reception", 4899, 6499, 17, 4.4, 30, "n"],
  ["Kota Silk Unstitched Suit", "silk-dress-materials", "Kota Silk", "Zari Check", "Sea Green", "Daywear", 3299, 4299, 20, 4.3, 22, ""],
  ["Cotton Jaipuri Print Suit Set", "cotton-collection", "Pure Cotton", "Hand Block Print", "Indigo Ivory", "Daywear", 1499, 2199, 40, 4.3, 118, "b"],
  ["Everyday Cotton Dress Material", "cotton-collection", "Cotton Cambric", "Screen Print", "Mustard", "Casual", 1299, 1899, 45, 4.1, 93, ""],
  ["Ajrakh Cotton Three Piece Suit", "cotton-collection", "Ajrakh Cotton", "Natural Dye Print", "Indigo Madder", "Casual", 1999, 2799, 32, 4.5, 49, "n"],
  ["Malmal Cotton Summer Suit Set", "cotton-collection", "Malmal Cotton", "Floral Print", "Sky Blue", "Summer", 1699, 2299, 36, 4.2, 74, ""],
  ["Designer Silk Suit Set with Zari Dupatta", "dress-materials", "Silk Blend", "Zari Dupatta", "Emerald", "Occasion", 3999, 5499, 18, 4.5, 57, "f"],
  ["Muslin Embroidered Dress Material", "dress-materials", "Muslin Silk", "Chikankari Style", "Ivory", "Daywear", 2899, 3899, 23, 4.4, 45, "n"],
  ["Velvet Touch Winter Suit Set", "dress-materials", "Velvet", "Gota Patti Detail", "Deep Maroon", "Wedding", 6899, 8999, 7, 4.6, 21, "b"],
  ["Satin Silk Party Dress Material", "dress-materials", "Satin Silk", "Mirror Work", "Royal Plum", "Party", 3599, 4899, 19, 4.3, 39, ""],
];

const collectionOf = (cat: string) => {
  switch (cat) {
    case "banarasi-silk":
      return "Banarasi Heritage";
    case "chanderi-cotton":
      return "Chanderi Edit";
    case "paithani":
      return "Yeola Paithani";
    case "sarees":
      return "Saree Gallery";
    case "festive-collection":
      return "Festive Collection";
    case "silk-dress-materials":
      return "Silk Studio";
    case "cotton-collection":
      return "Everyday Cotton";
    default:
      return "Signature Dress Materials";
  }
};

export const products: Product[] = seeds.map((s, i) => {
  const [name, category, fabric, work, color, occasion, price, originalPrice, stock, rating, reviews, flags] = s;
  const base = categoryImages[category] ?? "";
  return {
    id: String(i + 1),
    sku: `PKS-${String(1000 + i + 1)}`,
    name,
    category,
    collection: collectionOf(category),
    fabric,
    work,
    color,
    length: category === "sarees" || category === "paithani" ? "5.5 m saree with 0.8 m blouse piece" : "2.5 m top • 2.5 m bottom • 2.25 m dupatta",
    occasion,
    description: `${name} from the Pokharna Silk atelier. Woven in ${fabric.toLowerCase()} with ${work.toLowerCase()}, this piece carries the quiet richness of Indian handloom traditions. Finished with care and checked in-store before it reaches you.`,
    care: "Dry clean recommended for the first wash. Store folded in a cotton wrap, away from direct sunlight. Iron on medium heat over a soft cloth.",
    price,
    originalPrice,
    stock,
    rating,
    reviews,
    image: base,
    gallery: [base, ...(alt[category] ?? [])],
    featured: flags.includes("f"),
    bestseller: flags.includes("b"),
    newArrival: flags.includes("n"),
  };
});

export const discountOf = (p: { price: number; originalPrice: number }) =>
  p.originalPrice > p.price ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
