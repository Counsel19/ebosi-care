import { Button } from "@/components/ui/button";
import { Briefcase, User } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface SelectServiceItemProps {
  image: string;
  title: string;
  description: string;
  numOfPassangers: number;
  numOfLuggages: number;
}

const SelectServiceItem: FC<SelectServiceItemProps> = ({
  description,
  image,
  numOfLuggages,
  numOfPassangers,
  title,
}) => {
  return (
    <div className="grid grid-cols-[1fr_3fr] rounded-lg border border-[#395BA6] cursor-pointer  ">
      <div className="bg-[#D9D9D987] grid place-content-center">
        <Image
          src={image}
          alt={title}
          height={400}
          width={400}
          className="w-fit object-contain"
        />
      </div>
      <div className="grid gap-[2rem] grid-cols-[2fr_1fr] p-[2rem]">
        <div className="grid gap-[3rem]">
          <div className="flex gap-[4rem]">
            <span className="flex gap-4 font-semibold">
              <User size={20} /> {numOfPassangers}
            </span>
            <span className="flex gap-4 font-semibold">
              <Briefcase size={20} /> {numOfLuggages}
            </span>
          </div>

          <div>
            <h4 className="text-[2.5rem] font-bold">{title}</h4>
            <p className="text-[1.4rem] text-gray-500 leading-[1.6rem]">
              {description}
            </p>
          </div>

          <Button
            className="text-[#395BA6] w-fit p-0 m-0 font-semibold"
            variant={"ghost"}
          >
            More Info
          </Button>
        </div>
        <div className="text-[1.2rem] text-gray-500  grid gap-[0.6rem] justify-end">
          <h5 className="text-[#395BA6] text-[3rem]">$56.22</h5>
          <div>
            <span className="text-gray-600 flex italic">
              Plus applicable fees
            </span>
            <span className="flex font-semibold">One-way Fare</span>
          </div>
          <div className="flex gap-4 items-center">
            <h5 className="text-[1.8rem] line-through">$62.47</h5>
            <div className="bg-[#CC1815] rounded-md text-[1rem] text-white p-[0.5rem]">
              Save $6.54
            </div>
          </div>

          <Image
            alt=""
            src="/images/sales_badge.png"
            width={100}
            height={100}
            className="w-[9rem]"
          />

          <div>
            <p>Discount</p>
            <p>4 days left</p>
          </div>
          <div>
            <p>*Drop Off: 02:55AM</p>
            <p>Book in advance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectServiceItem;
