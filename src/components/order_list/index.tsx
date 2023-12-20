import Image from "next/image";

import shirt from "../../assets/images/shirt.png";

export default function Order_List(props: Array<IProduct>) {
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="w-full font-Montserrat text-[16px]"> Order List</h1>
      <div className="w-full flex  items-center justify-between">
        <div className="flex items-center gap-5">
          <Image src={shirt} alt="" width={56} height={56} />
          <div className="flex flex-col">
            <h2 className=" font-Montserrat italic font-bold text-[13px]">
              T-Shirt
            </h2>
            <p className=" font-Overpass text-[11px]">
              Unisex tshirt for all ...
            </p>
            <span className=" font-Montserrat italic font-bold text-[10px]">
              $100.00
            </span>
          </div>
        </div>

        <div className="font-Overpass">
          <button>-</button> | 2 | <button>+</button>{" "}
        </div>
      </div>
    </div>
  );
}
