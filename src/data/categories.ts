import catSilk from "@/assets/cat-silk.jpg";
import catBanarasi from "@/assets/cat-banarasi.jpg";
import catChanderi from "@/assets/cat-chanderi.jpg";
import catPaithani from "@/assets/cat-paithani.jpg";
import catSarees from "@/assets/cat-sarees.jpg";
import catFestive from "@/assets/cat-festive.jpg";
import catCotton from "@/assets/cat-cotton.jpg";

export type Category = {
  id: string;
  slug: string;
  name: string;
  image: string;
  blurb: string;
  active: boolean;
};

export const categoryImages: Record<string, string> = {
  "dress-materials": catSilk,
  "silk-dress-materials": catSilk,
  "banarasi-silk": catBanarasi,
  "chanderi-cotton": catChanderi,
  paithani: catPaithani,
  sarees: catSarees,
  "cotton-collection": catCotton,
  "festive-collection": catFestive,
};

export const categories: Category[] = [
  {
    id: "c1",
    slug: "dress-materials",
    name: "Dress Materials",
    image: catSilk,
    blurb: "Unstitched suit sets ready to be tailored your way.",
    active: true,
  },
  {
    id: "c2",
    slug: "silk-dress-materials",
    name: "Silk Dress Materials",
    image: catSilk,
    blurb: "Lustrous pure and blended silks with fine finishing.",
    active: true,
  },
  {
    id: "c3",
    slug: "banarasi-silk",
    name: "Banarasi Silk",
    image: catBanarasi,
    blurb: "Zari brocade woven on Varanasi handlooms.",
    active: true,
  },
  {
    id: "c4",
    slug: "chanderi-cotton",
    name: "Chanderi Cotton",
    image: catChanderi,
    blurb: "Feather-light weaves with a subtle sheen.",
    active: true,
  },
  {
    id: "c5",
    slug: "paithani",
    name: "Paithani",
    image: catPaithani,
    blurb: "Maharashtra's heirloom peacock and lotus motifs.",
    active: true,
  },
  {
    id: "c6",
    slug: "sarees",
    name: "Sarees",
    image: catSarees,
    blurb: "Drapes for weddings, festivals and everyday grace.",
    active: true,
  },
  {
    id: "c7",
    slug: "cotton-collection",
    name: "Cotton Collection",
    image: catCotton,
    blurb: "Breathable prints made for Indian summers.",
    active: true,
  },
  {
    id: "c8",
    slug: "festive-collection",
    name: "Festive Collection",
    image: catFestive,
    blurb: "Celebration-ready zari, sequins and rich colour.",
    active: true,
  },
];
