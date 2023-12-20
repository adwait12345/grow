import React from "react";

export default function Address_Skeleton() {
  return (
    <div className="w-full flex flex-col animate-pulse items-center  ">
      <div className="flex flex-col w-full gap-5   ">
        <h2 className=" h-3 w-36 bg-slate-300 rounded-lg	"></h2>
        <div className="flex w-full flex-col gap-1">
          <p className=" h-14 w-full bg-slate-300 rounded "></p>
          <span className=" h-14 w-full bg-slate-300 rounded "></span>
        </div>
            <h2 className=" h-3 w-20 bg-slate-300 rounded-lg	"></h2>
  
      </div>
    </div>
  );
}
