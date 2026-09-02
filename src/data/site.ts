import heroImg from "@/assets/hero.jpg";
import festiveImg from "@/assets/festive-banner.jpg";
import aboutImg from "@/assets/about-store.jpg";

export type SiteSettings = {
  storeName: string;
  phone: string;
  email: string;
  address: string;
  currency: string;
  shippingCharge: number;
  freeShippingThreshold: number;
  gstPercent: number;
  footerNote: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
};

export const defaultSettings: SiteSettings = {
  storeName: "Pokharna Silk",
  phone: "09822216629",
  email: "support.Pokharna211@gmail.com",
  address:
    "Shop No. 1 & 2, Sr. 49, Near Maruti Mandir, Chandan Nagar, Pune, Maharashtra 411014",
  currency: "INR",
  shippingCharge: 99,
  freeShippingThreshold: 2999,
  gstPercent: 5,
  footerNote:
    "Pokharna Silk Dress Material Shop — authentic unstitched suit sets and sarees, curated in Pune since our very first loom.",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  whatsapp: "https://wa.me/919822216629",
};

export type HomeContent = {
  announcement: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  ctaPrimary: string;
  ctaSecondary: string;
  festiveTitle: string;
  festiveSubtitle: string;
  festiveCta: string;
  festiveImage: string;
  aboutTitle: string;
  aboutText: string;
  aboutImage: string;
};

export const defaultHome: HomeContent = {
  announcement:
    "Authentic Indian Ethnic Wear • Curated with Love from India's Finest Weaving Hubs",
  heroTitle: "Heritage Woven Into Every Thread",
  heroSubtitle:
    "Discover authentic silk, elegant dress materials and timeless Indian craftsmanship, thoughtfully curated for every occasion.",
  heroImage: heroImg,
  ctaPrimary: "Shop Collection",
  ctaSecondary: "Explore Sarees",
  festiveTitle: "Celebrate Every Occasion in Timeless Elegance",
  festiveSubtitle:
    "Zari, silk and colour for weddings, Diwali, Ganesh Utsav and every celebration in between.",
  festiveCta: "Shop Festive Collection",
  festiveImage: festiveImg,
  aboutTitle: "An Indian suit is never just clothing",
  aboutText:
    "At Pokharna Silk, we believe that an Indian suit is more than just clothing — it is a canvas of heritage, texture, and personal expression. We offer genuine unstitched suit sets and sarees, sourced directly from weaving families in Varanasi, Kanchipuram, Yeola and Jaipur, and have earned the trust of families across Pune.",
  aboutImage: aboutImg,
};
