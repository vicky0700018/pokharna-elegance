export type OrderStatus =
  | "Pending"
  | "Confirmed"
  | "Processing"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

export type Order = {
  id: string;
  customer: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  items: OrderItem[];
  total: number;
  payment: string;
  status: OrderStatus;
};

export const orderStatuses: OrderStatus[] = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export const orders: Order[] = [
  {
    id: "PKS-24101",
    customer: "Sneha Kulkarni",
    email: "sneha.k@example.com",
    phone: "9822011223",
    address: "Kothrud, Pune 411038",
    date: "2026-08-24",
    items: [{ id: "1", name: "Banarasi Zari Silk Unstitched Suit", price: 6499, qty: 1 }],
    total: 6499,
    payment: "UPI",
    status: "Delivered",
  },
  {
    id: "PKS-24102",
    customer: "Meera Joshi",
    email: "meera.joshi@example.com",
    phone: "9822077889",
    address: "Viman Nagar, Pune 411014",
    date: "2026-08-27",
    items: [
      { id: "6", name: "Royal Chanderi Cotton Dress Material", price: 2499, qty: 2 },
      { id: "27", name: "Cotton Jaipuri Print Suit Set", price: 1499, qty: 1 },
    ],
    total: 6497,
    payment: "Cash on Delivery",
    status: "Shipped",
  },
  {
    id: "PKS-24103",
    customer: "Rutuja Patil",
    email: "rutuja.patil@example.com",
    phone: "9822044556",
    address: "Chandan Nagar, Pune 411014",
    date: "2026-08-29",
    items: [{ id: "10", name: "Traditional Yeola Paithani", price: 14999, qty: 1 }],
    total: 14999,
    payment: "Card",
    status: "Processing",
  },
  {
    id: "PKS-24104",
    customer: "Priya Deshpande",
    email: "priya.d@example.com",
    phone: "9822033445",
    address: "Wagholi, Pune 412207",
    date: "2026-08-31",
    items: [{ id: "19", name: "Festive Gold Zari Dress Material", price: 5499, qty: 1 }],
    total: 5499,
    payment: "UPI",
    status: "Pending",
  },
  {
    id: "PKS-24105",
    customer: "Neha Agarwal",
    email: "neha.agarwal@example.com",
    phone: "9822012390",
    address: "Kalyani Nagar, Pune 411006",
    date: "2026-09-01",
    items: [
      { id: "14", name: "Kanchipuram Pure Silk Saree", price: 12499, qty: 1 },
      { id: "23", name: "Premium Tussar Silk Suit Set", price: 6299, qty: 1 },
    ],
    total: 18798,
    payment: "Card",
    status: "Confirmed",
  },
  {
    id: "PKS-24106",
    customer: "Kavita Rane",
    email: "kavita.rane@example.com",
    phone: "9822066778",
    address: "Kharadi, Pune 411014",
    date: "2026-09-02",
    items: [{ id: "28", name: "Everyday Cotton Dress Material", price: 1299, qty: 1 }],
    total: 1299,
    payment: "Cash on Delivery",
    status: "Pending",
  },
];
