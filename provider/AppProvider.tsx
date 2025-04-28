"use client";

import { Toaster } from "@/components/ui/toaster";
import { store } from "@/lib/redux/store";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

interface AppProviderProps {
  children: React.ReactNode;
}
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      <Toaster />
    </Provider>
  );
};

export default AppProvider;
