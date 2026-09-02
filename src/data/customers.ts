export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  joined: string;
  status: "Active" | "Inactive";
};

export const customers: Customer[] = [
  { id: "CU-101", name: "Sneha Kulkarni", email: "sneha.k@example.com", phone: "9822011223", orders: 6, totalSpent: 42890, joined: "2024-03-11", status: "Active" },
  { id: "CU-102", name: "Rutuja Patil", email: "rutuja.patil@example.com", phone: "9822044556", orders: 3, totalSpent: 28450, joined: "2024-06-02", status: "Active" },
  { id: "CU-103", name: "Meera Joshi", email: "meera.joshi@example.com", phone: "9822077889", orders: 9, totalSpent: 67120, joined: "2023-11-19", status: "Active" },
  { id: "CU-104", name: "Anjali Shetty", email: "anjali.shetty@example.com", phone: "9822090011", orders: 2, totalSpent: 9980, joined: "2025-01-08", status: "Active" },
  { id: "CU-105", name: "Priya Deshpande", email: "priya.d@example.com", phone: "9822033445", orders: 5, totalSpent: 35600, joined: "2024-08-27", status: "Active" },
  { id: "CU-106", name: "Kavita Rane", email: "kavita.rane@example.com", phone: "9822066778", orders: 1, totalSpent: 2499, joined: "2025-04-14", status: "Inactive" },
  { id: "CU-107", name: "Shweta Bhosale", email: "shweta.b@example.com", phone: "9822099001", orders: 4, totalSpent: 21340, joined: "2024-12-01", status: "Active" },
  { id: "CU-108", name: "Neha Agarwal", email: "neha.agarwal@example.com", phone: "9822012390", orders: 7, totalSpent: 51870, joined: "2023-09-05", status: "Active" },
];
