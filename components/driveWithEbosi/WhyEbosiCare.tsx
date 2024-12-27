import Image from "next/image";
import React, { FC } from "react";

const whyEbosicareItemList = [
  {
    id: 1,
    title: "Safety",
    image: "/icons/safety.svg",
    description: "Have the peace of mind knowing who's riding in your car.",
  },
  {
    id: 2,
    title: "Certainty",
    image: "/icons/certainty.svg",
    description:
      "Earn up to $75,000 annually by utilizing your car or a van you own.",
  },
  {
    id: 3,
    title: "Freedom",
    image: "/icons/freedom.svg",
    description:
      "Own your time, be your own boss. You can drive with us anytime. You decide when to drive and where to drive.",
  },
  {
    id: 4,
    title: "Earn More",
    image: "/icons/earn_more.svg",
    description:
      "Fare increase with time and distance. When demand increase, pricing during peak hours, you make more with Opoli.",
  },
];

const WhyEbosiCare = () => {
  return (
    <div className="my-[8rem] w__frame">
      <h3 className="text-center mb-[3rem] text-[3.4rem] font-medium">Why EBOSICARE?</h3>

      <div className="grid lg:grid-cols-4 gap-[3rem]">
        {whyEbosicareItemList.map((item) => (
          <WyEbosiCareItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WhyEbosiCare;

interface WyEbosiCareItemProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const WyEbosiCareItem: FC<WyEbosiCareItemProps> = ({
  description,
  title,
  image,
}) => {
  return (
    <div className="flex flex-col  items-center gap-4">
      <Image className="w-[6rem] h-[6rem]" src={image} alt={title} width={100} height={100} />
      <h6 className="font-semibold text-xl ">{title}</h6>
      <p className="text-[1.4rem] text-center">{description}</p>
    </div>
  );
};
