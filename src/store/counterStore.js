import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist((set, get) => ({
    count: 1,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: Math.max(1, get().count - 1) })),
    reset: () => set({ count: 1 }),
  })),
  {
    name: "counter-storage",
  },
);

export default useCounterStore;
