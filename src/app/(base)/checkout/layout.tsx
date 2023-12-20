"use client";
import "../../../styles/globals.css";
import Footer from "@/components/footer";
import { Payment_Drawer } from "@/components/payment_drawer";
import { useState } from "react";
import Header from "@/components/header";

export default function CheckOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className="">
      <div
        className={`${open ? " filter blur-sm  " : "blur-0 "} transition-all 
          delay-150`}
        onClick={() => setOpen(false)}
      >
        {" "}
        <Header title="Checkout" />
        {children}
      </div>
      <Footer setOpen={setOpen} />
      <div
        className={`fixed ${open ? "bottom-0" : "-bottom-[500px]"
          } transition-all
          delay-150 w-full`}
      >
        <Payment_Drawer setOpen={setOpen} />
      </div>
    </div>
  );
}
