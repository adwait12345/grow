"use client";
import useSWR from "swr";
import { fetcher } from "../lib/axios";

interface Response {
  success: boolean;
  merchantName: string;
  merchantLogo: string;
  theme: {
    "--background": string;
    "--forground": string;
    "--primary": string;
    "--primary_forground": string;
  };
  error: {
    message: string;
  };
}

export default function useCutome() {
  const { data, isLoading, error, mutate } = useSWR<Response>(
    "/merchant-metadata",
    fetcher
  );
  return {
    merchantName: data?.merchantName,
    merchantLogo: data?.merchantLogo,
    theme:data?.theme,
    error,
    isLoading,
    mutate,
  };
}
