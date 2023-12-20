"use client";
import Checkout from "@/app/(base)/checkout/page";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import card from "../../assets/images/credit-card.png";
import upi from "../../assets/images/upi.png";
import RightArrowButton from "@/assets/svgs/rightArrowButton";
import Link from "next/link";
import useMethodsStore from "@/stores/useMethods";
import useCartStore from "@/stores/useCartStore";
import useSelectedMethod from "@/stores/useSelectedMethod";
import { useDispatch, useSelector } from "react-redux";
import { setAddCart, setMethod } from "@/redux/Actions/actions";
import useCart from "@/hooks/useCart";

import { useRouter } from "next/navigation";


export function Payment_Drawer(props: any) {
 const router =  useRouter()
  const DISPATCH = useDispatch();
  var Cart = useSelector((state: any) => state.allCarts?.Cart?.Carts);
  const [Meth, setMeth] = useState([])


  const { error, products, paymentMethods, mutate, isLoading } = useCart();




  const MakePayment = () =>{
    router.replace("/confirmed")
  }

 

  

  return (
    <div className=" flex flex-col gap-6 items-center bg-white   h-[500px] w-full rounded-t-[40px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="w-20 h-1 mt-1 rounded-full bg-[#dedede]" onClick={()=>props.setOpen(false)}></div>
      <div className="w-[88%] h-full flex flex-col justify-between ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h1 className=" font-Montserrat italic font-bold text-[24px]">
              Payment
            </h1>
            <p className=" font-Overpass text-[15px} text-[#757575]">
              choose payment method
            </p>
          </div>

          <div className="flex flex-col-reverse items-center gap-2">
           
                  {paymentMethods?.map((e,idx)=>{
            return (
              <div
                key={idx}
                onClick={() => {
                      DISPATCH(setMethod({Method: e || "" }));

                }}
                className={` cursor-pointer ${
                  Meth === e
                    ? "shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                    : " shadow-none"
                } w-full ${
                  e === "CARDS"
                    ? "bg-black text-white"
                    : "bg-white text-black border-2"
                }   rounded-lg py-3 px-4 flex items-center gap-5`}
              >
                <Image
                  src={e === "CARDS" ? card : upi}
                  alt=""
                  width={50}
                  height={50}
                />
                <p className=" font-Overpass text-[13px]  font-bold ">{e}</p>
              </div>
            );
          })}   





            {/* <div className=" w-full border-2 rounded-lg py-4 px-4 flex items-center gap-5">
              <Image src={upi} alt="" width={40} height={40} />
              <p className=" font-Overpass text-[13px] font-bold ">
                UPI (Unified Payments Interface){" "}
              </p>
            </div> */}

          </div>
        </div>
        <div className="flex flex-col gap-3 pb-2">
          <div className="w-full font-Overpass">
            <p className="w-full flex items-center justify-between text-[12px]">
              Transaction charges <span className=" ">0.00</span>
            </p>
            <p className="w-full flex items-center justify-between font-bold">
              TOTAL <span className="">${Cart?.total}</span>
            </p>
          </div>
          {/* <Link className="w-full" href="/confirmed"> */}
            <button className=" bg-[#0EB400] w-full flex items-center justify-between px-2 py-2 pr-5 rounded-full"  onClick={MakePayment}  >
              <RightArrowButton />
              <h1 className=" font-Montserrat italic font-bold text-white text-[24px]">
                Make Payment
              </h1>
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
