import { Briefcase, User } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface ServiceItemProps {
  image: string;
  name: string;
  description: string;
  passengers: number;
  luggage: number;
}
const ServiceItem: FC<ServiceItemProps> = ({
  description,
  image,
  passengers,
  luggage,
  name,
}) => {
  return (
    <div className="">
      <Image
        alt={name}
        src={image}
        height={500}
        width={500}
        className="w-full h-[25rem] object-contain"
      />

      <div className="flex gap-[4rem]">
        <span className="flex gap-4 font-semibold">
          <User size={20} /> {passengers}
        </span>
        <span className="flex gap-4 font-semibold">
          <Briefcase size={20} /> {luggage}
        </span>
      </div>
      <h4 className="text-[2.8rem] text-[#0037AD] font-bold">{name}</h4>
      <p className="text-[1.4rem] text-gray-500 leading-[2.2rem]">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
