"use client";


import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import { FC } from "react";
// import useLoadMap from "@/hooks/useLoadMap";

interface layoutProps {
  children: React.ReactNode;
}
const Layout: FC<layoutProps> = ({ children }) => {
  // useLoadMap();
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
