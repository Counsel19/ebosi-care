import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import ResultPage from "@/components/verifyPayment/ResultPage";
import { Loader2 } from "lucide-react";

import React, { Suspense } from "react";

const PaymentVerification = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <ResultPage />
      </Suspense>
      <Footer />
    </>
  );
};

export default PaymentVerification;

function PageLoader() {
  return (
    <div className="bg-gray-400 min-h-[500px] w-full grid place-content-center">
      <Loader2 width={100} height={100} />
    </div>
  );
}
