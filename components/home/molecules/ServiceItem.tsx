import { Briefcase, User } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ServiceItemProps {
  image: string;
  title: string;
  description: string;
  numOfPassangers: number;
  numOfLuggages: number;
}
const ServiceItem: FC<ServiceItemProps> = ({
  description,
  image,
  numOfLuggages,
  numOfPassangers,
  title,
}) => {
  return (
    <div className="">
      <Image
        alt={title}
        src={image}
        height={500}
        width={500}
        className="w-full h-[25rem] object-contain"
      />

      <div className="flex gap-[4rem]">
        <span className="flex gap-4 font-semibold">
          <User size={20} /> {numOfPassangers}
        </span>
        <span className="flex gap-4 font-semibold">
          <Briefcase size={20} /> {numOfLuggages}
        </span>
      </div>
      <h4 className="text-[3.2rem] font-bold">{title}</h4>
      <p className="text-[1.4rem] text-gray-500 leading-[2.2rem]">{description}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default ServiceItem;
