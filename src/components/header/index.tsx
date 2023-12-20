"use client";

import LeftArrow from "@/assets/svgs/leftArrow";
import useCutome from "@/hooks/useCustom";
import { useRouter } from "next/navigation";

function Header(props: any) {
  const { theme, merchantLogo, merchantName, isLoading } = useCutome();

  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-between py-4 px-5 border-b-2 ">
      <div className="flex items-center gap-4">
        <button onClick={() => router.replace("/checkout")}>
          <LeftArrow />
        </button>

        <h1 className=" font-Montserrat text-[24px] italic font-bold">
          {props.title}
        </h1>
      </div>
      {!isLoading ? (
        <div className=" font-Montserrat italic font-bold flex items-center gap-2">
          <img src={merchantLogo} alt="" width={40} height={40} />
          {merchantName}
        </div>
      ) : (
        <>
          <div className=" flex items-center gap-3">
            <div className=" h-10 w-10 rounded-full bg-slate-300 	"></div>
            <h2 className=" h-4 w-16 bg-slate-300 rounded-lg	"></h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
