import type { Metadata } from "next";
import "../../../styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ConfirmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">
   <Header title="Order Confirmed" /> 
    {children}</div>;

}