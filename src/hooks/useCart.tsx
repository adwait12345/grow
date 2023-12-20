"use client";
import useSWR from "swr";
import { fetcher } from "../lib/axios";


interface Response {
  success: boolean;
    products: IProduct[];
    paymentMethods:[];
  error: {
    message: string;
  };
}

export default function useCart() {
  const { data, isLoading, error, mutate } = useSWR<Response>(
  "/order-details",
    fetcher
  );
  return {
    products: data?.products,
    paymentMethods:data?.paymentMethods,
    error,
    isLoading,
    mutate,
  };
}
