import React from "react";

export default function Promo_code() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="w-full font-Montserrat text-[16px]"> Promo Code</h1>
      <div className=" border-2 flex items-center justify-between px-3.5 py-1.5 pr-1.5  rounded-full">
        <input
          type="text"
          placeholder="Enter Promo code"
          className=" font-Overpass  placeholder:font-Overpass text-[16px] focus:outline-none mt-1 tracking-widest "
        />
        <button className=" tracking-widest font-Montserrat px-3 py-2 bg-black rounded-full text-white font-bold text-[11px]">
          APPLY
        </button>
      </div>
    </div>
  );
}
