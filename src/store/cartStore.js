import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i,
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },
      clearCart: () => set({ items: [] }),
      itemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: () =>
        get().items.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0,
        ),
      isEmpty: () => get().items.length === 0,
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useCartStore;
