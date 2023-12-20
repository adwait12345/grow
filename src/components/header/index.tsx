"use client";

import LeftArrow from "@/assets/svgs/leftArrow";

function Header(props: any) {
  return (
    <div className="w-full flex items-center gap-4 py-4 px-5 border-b-2 ">
      <button>
        <LeftArrow />
      </button>

      <h1 className=" font-Montserrat text-[24px] italic font-bold">
        {props.title}
      </h1>
    </div>
  );
}

export default Header;
