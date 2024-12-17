import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}
const layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
