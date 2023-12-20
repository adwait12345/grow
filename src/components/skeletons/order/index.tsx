import React from 'react'

export default function Order_Skeleton() {
  return (
    <div className="w-full flex animate-pulse  justify-between ">

      <div className="flex items-center gap-5  ">
        <div className=" h-16 w-16 bg-slate-300 rounded-lg "></div>
        <div className="flex flex-col gap-3">
          <h2 className=" h-2 w-64 bg-slate-300 rounded-lg	"></h2>
          <p className=" h-2 w-56 bg-slate-300 rounded-lg "></p>
          <span className=" h-2 w-10 bg-slate-300 rounded-lg "></span>
        </div>
      </div>

      <div className="font-Overpass flex items-center justify-end ">
        <div className="h-3 w-3 bg-slate-300 rounded"></div>
      </div>
    </div>
  );
}
