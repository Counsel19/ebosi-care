import React from "react";
import BecomeAPartnerStep from "./molecules/BecomeAPartnerStep";
import { CreditCard } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const BecomeAPartner = () => {
  return (
    <div className="">
      <div className="bg-[20rem] bg-primary lg:h-[30rem] py-[6rem]">
        <div className=" w__frame space-y-[6rem]">
          <div className="lg:w-[40%] mx-auto gap-2 text-white flex flex-col justify-center items-center">
            <h3 className="font-bold text-[1.8rem]">Become a Partner</h3>
            <p className="text-center">
              Come aboard Nigeria No. 1 travel company & unfold infinite
              possibilities of growth.
            </p>
          </div>

          <div className="w-[80%] p-[4rem] lg:p-[6rem bg-white relative  mx-auto">
            <div className=" ] grid gap-[4rem] lg:grid-cols-3">
              <BecomeAPartnerStep
                icon={<CreditCard className="text-white" />}
                description="Set your own prices and enjoy real-time payments on confirmed bookings. It's that easy."
                title="Prices & Payment"
              />
              <BecomeAPartnerStep
                icon={<CreditCard className="text-white" />}
                description="Set your own prices and enjoy real-time payments on confirmed bookings. It's that easy."
                title="Prices & Payment"
              />
              <BecomeAPartnerStep
                icon={<CreditCard className="text-white" />}
                description="Set your own prices and enjoy real-time payments on confirmed bookings. It's that easy."
                title="Prices & Payment"
              />
            </div>
            <div className="grid place-content-center mt-[4rem]">
              <Link
                href={"/become-a-partner"}
                className={cn(
                  buttonVariants({
                    className: "bg-[#CC1815] text-white",
                  })
                )}
              >
                Become a Partner now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-[url('/images/map_bg.png')] h-[30rem]" />
    </div>
  );
};

export default BecomeAPartner;
