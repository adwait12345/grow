"use client";
import Location from "@/assets/svgs/location";
import Timeline from "@/assets/svgs/timeline";
import Order_List from "@/components/order_list";
import Order_Summary from "@/components/order_summary";
import Promo_code from "@/components/promo_code";
import Order_Skeleton from "@/components/skeletons/order";
import useCart from "@/hooks/useCart";
import useMethodsStore from "@/stores/useMethods";
import useOrderStore from "@/stores/useOrderStore";
import Image from "next/image";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import EmptyCart from "../../../assets/images/cart.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import Address_Skeleton from "@/components/skeletons/address";
import Promo_Skeleton from "@/components/skeletons/promo";
import Summary_Skeleton from "@/components/skeletons/summary";
import useCartStore from "@/stores/useCartStore";
import useSelectedMethod from "@/stores/useSelectedMethod";
import { Payment_Drawer } from "@/components/payment_drawer";

import { useDispatch, useSelector } from "react-redux";
import { setAddCart, setOrder } from "../../../redux/Actions/actions";

export default function Checkout() {
  const DISPATCH = useDispatch();

  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState<Boolean>(false);
  const [Orderss, setOrderss] = useState<Array<IProduct>>();

  const { error, products, paymentMethods, mutate, isLoading } = useCart();
  const [cart, setCart] = useState<ICart>({
    address: "",
    phone: phone,
    purchase: [],
    orderAmt: 0,
    deliveryFee: 0,
    discount: 0,
    total: 0,
    method:[]
  });

  var Order = useSelector((state: any) => state.allOrders);


  // #######################################################################


    var Cart = useSelector((state: any) => state.allCarts?.Cart?.Carts);


  const callbackFunction = useCallback(() => {
    setOrderss(Order?.Orders.Orders);



  }, []);

  useEffect(() => {
    // console.log(products)
    const OrderAmt =
      Orderss?.reduce((accumulator, order) => {
        return accumulator + (order.price * order.quantity || 0);
      }, 0) || 0;
    console.log(OrderAmt);
    if(OrderAmt){
               setCart((prevForm) => ({
            ...prevForm,
            purchase: Orderss || [],
            deliveryFee: 10.0,
            discount: 20.0,
            orderAmt: OrderAmt,
            total: OrderAmt + cart.deliveryFee - cart.discount,
            method:paymentMethods
          })); 
    }


    DISPATCH(setOrder({ Orders: products || [] }));
    DISPATCH(setAddCart({ Carts: cart || [] }));

    callbackFunction();
  }, [products,Orderss]);

  console.log(cart);

  return isLoading ? (
    <div
      onClick={() => setOpen(false)}
      className=" flex flex-col w-full items-center overflow-hidden"
    >
      <div className="flex w-11/12 flex-col gap-4 mt-5">
        <Address_Skeleton />
        <Order_Skeleton />
        <Order_Skeleton />
        <Promo_Skeleton />
        <Summary_Skeleton />
      </div>
    </div>
  ) : Orderss?.length === 0 ? (
    <div className="flex flex-col w-full h-[55vh] items-center justify-center">
      <Image src={EmptyCart} alt="" width={300} height={300} />
      <h2 className=" font-Overpass">Your Cart is Empty :(</h2>
    </div>
  ) : (
    <div className="w-full flex flex-col items-center  mt-4 gap-8">
      <div className="w-11/12 flex flex-col gap-3">
        <h1 className=" font-Montserrat text-[16px] font-bold">
          Delivery address
        </h1>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center w-full py-3 rounded-full gap-4 px-4 bg-[#F6F5F5]">
              <Location />
              <input
                name="address"
                onChange={(e) =>
                  setCart((prevCart) => ({
                    ...prevCart,
                    address: e.target.value,
                  }))
                }
                type="text"
                className=" w-full font-Overpass mt-1 text-black bg-transparent text-[13px] font-black placeholder-black-200 focus:outline-none "
                placeholder="add delivery location"
              />
            </div>
            <PhoneInput
              placeholder="9307108192"
              country={"in"}
              onChange={(e) =>
                setCart((prevCart) => ({
                  ...prevCart,
                  phone: e,
                }))
              }
            />{" "}
          </div>
          <div className="">
            <Timeline />
          </div>
        </div>
      </div>
      <div className="w-11/12">
        {/* <Order_List /> */}

        <div className="w-full flex flex-col gap-5">
          <h1 className="w-full font-Montserrat text-[16px]"> Order List</h1>

          {Orderss?.map((e, idx) => {
            return (
              <div
                key={idx}
                className="w-full flex  items-center justify-between "
              >
                <div className="flex items-center gap-5  max-w-[300px]">
                  <img src={e.image} alt="" width={56} height={56} />
                  <div className="flex flex-col">
                    <h2 className=" font-Montserrat italic font-bold text-[13px] text-ellipsis overflow-hidden whitespace-wrap w-[250px]	">
                      {e.title}
                    </h2>
                    <p className=" font-Overpass text-[11px]">
                      Short description for all ...
                    </p>
                    <span className=" font-Montserrat italic font-bold text-[10px]">
                      $ {e.price}
                    </span>
                  </div>
                </div>

                <div className="font-Overpass flex items-center justify-end ">
                  <div className="flex flex-col items-center justify-center">
                    <button>
                      <IoIosArrowUp />
                    </button>
                    <span>{e.quantity}</span>
                    <button>
                      <IoIosArrowDown />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-11/12">
        <Promo_code />
      </div>
      <div className="w-11/12">
        <Order_Summary />
      </div>
      <div className=" mb-32"></div>
      {/* Footer */}
    </div>
  );
}
