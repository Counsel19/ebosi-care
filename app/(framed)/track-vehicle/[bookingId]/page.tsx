

import TrackingResult from "@/components/trackBooking/TrackingResult";
import Link from "next/link";
import React, { Suspense } from "react";

const TrackedVechiclePage = () => {
return (
    <div className="w__frame py-[6rem]">
      <Suspense>
        <TrackingResult />
      </Suspense>

      <div className="flex justify-end">
        <Link href="/" className="text-[#CC1815]">
          Return to homepage
        </Link>
      </div>
    </div>
  );
};

export default TrackedVechiclePage;
