"use client";

import { useRouter } from "next/navigation";

import useOrderStore from "@/stores/useOrderStore";

import { useEffect } from "react";
import useCartStore from "@/stores/useCartStore";
import useCart from "@/hooks/useCart";

import { useDispatch, useSelector } from "react-redux";


export default function Footer(props: any) {
  // const { error, products, paymentMethods, mutate, isLoading } = useCart();


  var Cart = useSelector((state: any) => state.allCarts?.Cart?.Carts);



  
  const router = useRouter();

  // console.log(Orders?.length == 0);

  return (
    <div className=" w-full fixed bottom-0 flex items-center justify-center  h-20 border-t-2 bg-white">
      {Cart?.purchase?.length == 0 ? (
        <>
          <button
            onClick={() => location.reload()}
            className=" w-11/12 font-Montserrat font-bold text-[20px] text-white bg-black py-3 rounded-full "
          >
            Refresh
          </button>
        </>
      ) : (
      <div className="w-11/12 flex items-center justify-between">
        <div className="flex flex-col font-Montserrat font-bold">
          <p className=" text-[15px]">TOTAL</p>
          <h1 className=" text-[20px]">${Cart?.total.toFixed(2)} </h1>
          {/* {Cart.address} */}
        </div>
        <button
          disabled={Cart?.total == 0 }
          onClick={() => props.setOpen(true)}
          className=" text-white text-[20px] px-6 py-2 rounded-full bg-black font-Montserrat font-semibold"
        >
          PAYMENT
        </button>
      </div>
       )}
    </div>
  );
}
