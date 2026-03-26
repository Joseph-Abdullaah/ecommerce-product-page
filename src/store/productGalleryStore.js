import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist((set) => ({
    currentImage: 0,
    isLightboxOpen: false,
    setCurrentImage: (index) => set({ currentImage: index }),
    openLightbox: () => set({ isLightboxOpen: true }),
    closeLightbox: () => set({ isLightboxOpen: false }),
  })),
);

export default useProductStore;
