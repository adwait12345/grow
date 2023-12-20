import { useSelector } from "react-redux";

export default function Order_Summary() {
  var Cart = useSelector((state: any) => state.allCarts?.Cart?.Carts);
  // console.log(Cart)

  return (
    <div className="flex flex-col gap-5 font-Overpass">
      <h1 className="w-full font-Montserrat font-bold text-[20px]">
        Order Summary
      </h1>
      <div className="w-full">
        <p className="w-full flex items-center justify-between">
          Order Amount{" "}
          <span className=" font-bold">{Cart?.orderAmt.toFixed(2)}</span>
        </p>
        <p className="w-full flex items-center justify-between">
          Delivery fee <span className=" font-bold">{Cart?.deliveryFee}</span>
        </p>
        <p className="w-full flex items-center justify-between">
          Discount <span className=" font-bold">{Cart?.discount}</span>
        </p>
      </div>
    </div>
  );
}
