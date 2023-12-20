"use client"

import LeftArrow from "@/assets/svgs/leftArrow";

import { useRouter } from "next/navigation";

function Header(props:any) {

 
const router = useRouter()

  return (
    <div className="w-full flex items-center gap-4 py-4 px-5 border-b-2 ">
      <button onClick={()=> router.replace("/checkout")} >
        <LeftArrow />
      </button>

      <h1 className=" font-Montserrat text-[24px] italic font-bold">
        {props.title}
      </h1>
    </div>
  );
}

export default Header;
