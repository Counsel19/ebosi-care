import Image from "next/image";
import { FC } from "react";

interface AddressBoxProps {
  boxTitle: string;
  address: string;
  dateTime: string;
}
const AddressBox: FC<AddressBoxProps> = ({ address, boxTitle, dateTime }) => {
  return (
    <div className="border ">
      <div className="bg-[#F3F3F3] py-[1rem] text-center text-primary text-[1.4rem]">
        {boxTitle}
      </div>

      <div className="p-[1rem] space-y-4 text-gray-500">
        <div className="flex gap-4">
          <Image
            src={"/icons/location_black.svg"}
            alt="location_black"
            width={30}
            height={30}
            className="w-[2rem] h-[2rem]"
          />
          <p>{address}</p>
        </div>
        <div className="flex gap-4">
          <Image
            src={"/icons/calender.svg"}
            alt="calender"
            width={30}
            height={30}
            className="w-[2rem] h-[2rem]"
          />
          <p>{dateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressBox;
