"use client"

import { store } from "@/lib/redux/store";
import React, { FC } from "react";
import { Provider } from "react-redux";

interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
