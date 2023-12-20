import { create } from "zustand";

const useSelectedMethod = create<{
  Selected: string | null;
  setMethods: (methods: string) => void;
}>((set) => ({
  Selected: "",
  setMethods: (methods) => {
    set((state) => ({ ...state, Selected: methods }));
  },
}));

export default useSelectedMethod;
