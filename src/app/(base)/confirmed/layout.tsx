"use client";

import "../../../styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useSelector } from "react-redux";

export default function ConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  var Tx = useSelector((state: any) => state.allTrx?.Transaction?.Transaction);

  return (
    <div className="">
      <Header title={`${Tx ? "Order Confirmed" : "Transaction Failed"}`} />
      {children}
      <Footer />
    </div>
  );
}
