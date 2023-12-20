import {create} from "zustand"


const useOrderStore = create<{
  Orders: Array<IProduct> | null;
  setOrders: (orders: Array<IProduct>) => void;
}>((set) => ({
  Orders:[],
  setOrders: (orders) => {set((state)=>({...state, Orders: orders }))
},

}));


export default useOrderStore