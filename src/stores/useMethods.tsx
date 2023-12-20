import { create } from "zustand";

const useMethodsStore = create<{
  Methods: [] | null;
  setMethods: (methods: []) => void;
}>((set) => ({
  Methods: [],
  setMethods: (methods) => {
    set((state) => ({ ...state, Methods: methods }));
  },
}));

export default useMethodsStore;
