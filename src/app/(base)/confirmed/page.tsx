"use client"

import Image from "next/image";
import React from "react";

import time from "../../../assets/images/timeline.png";
import success from "../../../assets/images/success.png";




import card from "../../../assets/images/credit-card.png";
import upi from "../../../assets/images/upi.png";
import { useSelector } from "react-redux";

export default function Confirmed() {

    var Cart = useSelector((state: any) => state.allCarts?.Cart?.Carts);
    var Method = useSelector((state:any)=>state.allMethod)
    


   const Selected = Method?.Method.Method;

console.log(Cart)


  return (
    <div className=" w-full flex flex-col items-center ">
      <div className="w-11/12 flex flex-col gap-5 mt-5 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className=" flex items-center justify-center">
              <Image
                src={time}
                alt=""
                style={{ width: "10px", height: "40px", objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col gap-1 text-[13px]">
              <p className=" font-Overpass">
                <span className=" font-bold text-[15px]">Address:</span>
                {Cart?.address}
              </p>
              <p className=" font-Overpass">
                <span className=" font-bold text-[15px]">Phone Number:</span>{" "}
                {Cart?.phone}
              </p>
            </div>
          </div>
          <div className="">
            <Image src={success} alt="" width={50} height={50} />
          </div>
        </div>
        <div className="">
          <div
            className={` cursor-pointer w-full ${
              Selected === "CARDS"
                ? "bg-black text-white"
                : "bg-white text-black border-2"
            }   rounded-lg py-3 px-4 flex items-center gap-5`}
          >
            <Image
              src={Selected === "CARDS" ? card : upi}
              alt=""
              width={50}
              height={50}
            />
            <p className=" font-Overpass text-[13px]  font-bold ">{Selected}</p>
          </div>
        </div>
        {/* <Order_List /> */}

        <div className="flex flex-col gap-5 font-Overpass ">
          <h1 className="w-full font-Montserrat font-bold text-[20px]">
            Order Summary
          </h1>
          <div className="w-full">
            <p className="w-full flex items-center justify-between">
              Order Amount{" "}
              <span className=" font-bold">{Cart?.orderAmt.toFixed(2)}</span>
            </p>{" "}
            <p className="w-full flex items-center justify-between">
              Delivery fee{" "}
              <span className=" font-bold">{Cart?.deliveryFee}</span>
            </p>
            <p className="w-full flex items-center justify-between">
              Discount{" "}
              <span className=" font-bold">{Cart?.discount}</span>
            </p>
            <p className="w-full text-[20px] font-Montserrat flex items-center justify-between font-black">
              TOTAL <span className="">$ {Cart?.total.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <div className="h-24"></div>
      </div>
    </div>
  );
}
