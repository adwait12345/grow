import { create } from "zustand";

const useCartStore = create<{
  Cart: ICart[];
  setCart: (cart: ICart[]) => void;
}>((set) => ({
  Cart:[],
  setCart: (cart) => {set((state)=>({...state, Cart: cart }))
},

}));

export default useCartStore;
