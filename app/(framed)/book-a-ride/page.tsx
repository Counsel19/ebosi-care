import BecomeAPartner from "@/components/bookARide/BecomeAPartner";
import BookARideBanner from "@/components/bookARide/BookARideBanner";
import BookingSteps from "@/components/bookARide/BookingSteps";
import WhyBookARide from "@/components/bookARide/WhyBookARide";
import React from "react";

const BookARide = () => {
  return (
    <div>
      <BookARideBanner />
      <WhyBookARide />
      <BookingSteps />
      <BecomeAPartner />
    </div>
  );
};

export default BookARide;
