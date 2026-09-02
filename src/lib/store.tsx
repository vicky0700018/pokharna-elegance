import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products as seedProducts, type Product } from "@/data/products";
import { categories as seedCategories, type Category } from "@/data/categories";
import { orders as seedOrders, type Order, type OrderStatus } from "@/data/orders";
import { customers as seedCustomers, type Customer } from "@/data/customers";
import {
  defaultHome,
  defaultSettings,
  type HomeContent,
  type SiteSettings,
} from "@/data/site";

const KEY = (k: string) => `pokharna:${k}`;

function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY(key));
      if (raw) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(KEY(key), JSON.stringify(value));
    } catch {
      /* ignore quota errors */
    }
  }, [key, value, ready]);

  return [value, setValue, ready] as const;
}

export type CartLine = { id: string; qty: number };

type StoreValue = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  addProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (id: string, patch: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  categories: Category[];
  addCategory: (c: Omit<Category, "id">) => void;
  updateCategory: (id: string, patch: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  orders: Order[];
  addOrder: (o: Order) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;

  customers: Customer[];

  cart: CartLine[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;

  wishlist: string[];
  toggleWishlist: (id: string) => void;
  inWishlist: (id: string) => boolean;

  settings: SiteSettings;
  setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>;
  home: HomeContent;
  setHome: React.Dispatch<React.SetStateAction<HomeContent>>;

  user: string | null;
  loginUser: (email: string) => void;
  logoutUser: () => void;

  admin: boolean;
  loginAdmin: (email: string, password: string) => boolean;
  logoutAdmin: () => void;

  toast: string | null;
  notify: (msg: string) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

export const ADMIN_EMAIL = "admin@pokharnasilk.com";
export const ADMIN_PASSWORD = "admin123";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = usePersistentState<Product[]>("products", seedProducts);
  const [categories, setCategories] = usePersistentState<Category[]>("categories", seedCategories);
  const [orders, setOrders] = usePersistentState<Order[]>("orders", seedOrders);
  const [cart, setCart] = usePersistentState<CartLine[]>("cart", []);
  const [wishlist, setWishlist] = usePersistentState<string[]>("wishlist", []);
  const [settings, setSettings] = usePersistentState<SiteSettings>("settings", defaultSettings);
  const [home, setHome] = usePersistentState<HomeContent>("home", defaultHome);
  const [user, setUser] = usePersistentState<string | null>("user", null);
  const [admin, setAdmin] = usePersistentState<boolean>("admin", false);
  const [toast, setToast] = useState<string | null>(null);

  const notify = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast((t) => (t === msg ? null : t)), 2400);
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      products,
      setProducts,
      addProduct: (p) =>
        setProducts((list) => [{ ...p, id: `p${Date.now()}` }, ...list]),
      updateProduct: (id, patch) =>
        setProducts((list) => list.map((p) => (p.id === id ? { ...p, ...patch } : p))),
      deleteProduct: (id) => setProducts((list) => list.filter((p) => p.id !== id)),

      categories,
      addCategory: (c) =>
        setCategories((list) => [...list, { ...c, id: `c${Date.now()}` }]),
      updateCategory: (id, patch) =>
        setCategories((list) => list.map((c) => (c.id === id ? { ...c, ...patch } : c))),
      deleteCategory: (id) => setCategories((list) => list.filter((c) => c.id !== id)),

      orders,
      addOrder: (o) => setOrders((list) => [o, ...list]),
      updateOrderStatus: (id, status) =>
        setOrders((list) => list.map((o) => (o.id === id ? { ...o, status } : o))),

      customers: seedCustomers,

      cart,
      addToCart: (id, qty = 1) =>
        setCart((list) => {
          const found = list.find((l) => l.id === id);
          if (found) return list.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
          return [...list, { id, qty }];
        }),
      removeFromCart: (id) => setCart((list) => list.filter((l) => l.id !== id)),
      setQty: (id, qty) =>
        setCart((list) =>
          qty <= 0
            ? list.filter((l) => l.id !== id)
            : list.map((l) => (l.id === id ? { ...l, qty } : l)),
        ),
      clearCart: () => setCart([]),
      cartCount: cart.reduce((n, l) => n + l.qty, 0),

      wishlist,
      toggleWishlist: (id) =>
        setWishlist((list) => (list.includes(id) ? list.filter((w) => w !== id) : [...list, id])),
      inWishlist: (id) => wishlist.includes(id),

      settings,
      setSettings,
      home,
      setHome,

      user,
      loginUser: (email) => setUser(email),
      logoutUser: () => setUser(null),

      admin,
      loginAdmin: (email, password) => {
        const ok = email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
        if (ok) setAdmin(true);
        return ok;
      },
      logoutAdmin: () => setAdmin(false),

      toast,
      notify,
    }),
    [
      products,
      setProducts,
      categories,
      setCategories,
      orders,
      setOrders,
      cart,
      setCart,
      wishlist,
      setWishlist,
      settings,
      setSettings,
      home,
      setHome,
      user,
      setUser,
      admin,
      setAdmin,
      toast,
      notify,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export const inr = (n: number) =>
  `₹${Math.round(n).toLocaleString("en-IN")}`;

export const discountPercent = (price: number, original: number) =>
  original > price ? Math.round(((original - price) / original) * 100) : 0;
