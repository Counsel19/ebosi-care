import { Briefcase, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import AddressBox from "../home/molecules/AddressBox";
import { Textarea } from "../ui/textarea";

const BookingSummary = () => {
  return (
    <div className=" shadow-lg">
      <div className="p-[1rem] lg:p-[4rem] grid lg:grid-cols-2 gap-4 items-center ">
        <div className="space-y-8">
          <div className="text-gray-500">
            <span className="text-[1.4rem]">Service Type</span>
            <h6 className="font-bold">Wheelchair</h6>
          </div>
          <div className="text-gray-500">
            <span className="text-[1.4rem]">Pickup Date</span>
            <h6 className="font-bold">Dec 13, 2024 01:47PM</h6>
          </div>
          <div className="flex gap-[4rem]">
            <span className="flex gap-4 font-semibold">
              <User size={20} /> {1}
            </span>
            <span className="flex gap-4 font-semibold">
              <Briefcase size={20} /> {1}
            </span>
          </div>
        </div>

        <Image
          alt="wheelchair_into_car"
          width={300}
          height={300}
          src={"/images/wheelchair_into_car.png"}
        />
      </div>

      <div className="p-[1rem] lg:p-[4rem] bg-[#F3F3F3] text-[1.4rem] space-y-[2rem]">
        <div className="grid grid-cols-2  items-center">
          <span className="font-semibold">Fare:</span>
          <div className="flex">
            <span className="text-gray-400 line-through">$62.47 </span>{" "}
            <span>$56.22</span>
          </div>
        </div>
        <div className="grid grid-cols-2  items-center">
          <span className="font-semibold">Rider Fee:</span>
          <span>$4.68</span>
        </div>
        <div className="grid grid-cols-2  items-center">
          <span className="font-semibold">Fuel Surcharge:</span>
          <span>$3.12</span>
        </div>
        <div className="grid grid-cols-2  items-center">
          <span className="font-semibold">Tip:</span>
          <span>$0.00</span>
        </div>

        <hr className="my-[2rem]" />

        <div className="grid grid-cols-2 text-[3rem] font-light items-center">
          <b className="">Total: </b>
          <b>$65.20</b>
        </div>
      </div>

      <div className="p-[1rem] lg:p-[4rem] space-y-[2rem]">
        <AddressBox
          address="1313 Disneyland Dr, Anaheim, CA 92802, USA Apt/Gate: juuyttrree"
          boxTitle="Pick Up"
          dateTime="Dec 13, 2024 01:47PM"
        />
        <AddressBox
          address="1313 Disneyland Dr, Anaheim, CA 92802, USA Apt/Gate: juuyttrree"
          boxTitle="Drop Off"
          dateTime="Dec 13, 2024 01:47PM"
        />
      </div>

      <div className="p-[1rem] lg:p-[4rem] space-y-[2rem]">
        <h4 className="text-gray-500 font-light text-[2rem]">Driver Notes</h4>
        <Textarea className="h-[18.8rem]" />
      </div>
    </div>
  );
};

export default BookingSummary;
