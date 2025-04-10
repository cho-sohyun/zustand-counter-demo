import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  increaseBy: (value) => set((state) => ({ count: state.count + value })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  decreaseBy: (value) => set((state) => ({ count: state.count - value })),
}));
