import { map, onMount } from "nanostores";
import type { Product } from "../shared/data.const";

export interface CartItem extends Product {
  quantity: number;
}

const STORAGE_KEY = "mab-cart-items";

// Load initial state from localStorage
const getInitialCart = (): Record<string, CartItem> => {
  if (typeof window === "undefined") return {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return {};
  }
};

export const cartItems = map<Record<string, CartItem>>(getInitialCart());

// Persistent sync
onMount(cartItems, () => {
  cartItems.listen((value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  });
});

export function addCartItem(product: Product) {
  const existingEntry = cartItems.get()[product.id];
  if (existingEntry) {
    cartItems.setKey(product.id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    });
  } else {
    cartItems.setKey(product.id, { ...product, quantity: 1 });
  }
}

export function removeCartItem(itemId: string) {
  const newCart = { ...cartItems.get() };
  delete newCart[itemId];
  cartItems.set(newCart);
}

export function updateCartItemQuantity(itemId: string, quantity: number) {
  const existingEntry = cartItems.get()[itemId];
  if (existingEntry) {
    if (quantity <= 0) {
      removeCartItem(itemId);
    } else {
      cartItems.setKey(itemId, { ...existingEntry, quantity });
    }
  }
}

export function clearCart() {
  cartItems.set({});
}
