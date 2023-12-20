"use client";

import "../styles/globals.css";
import { Provider } from "react-redux";
import store, { Persistor } from "../redux/store";
import useCutome from "@/hooks/useCustom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <Provider store={store}>
      <html lang="en">
        <body >
          <div className="">{children}</div>
        </body>
      </html>
    </Provider>
  );
}
