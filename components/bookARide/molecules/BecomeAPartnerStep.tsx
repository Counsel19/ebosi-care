import React, { FC } from "react";

interface BecomeAPartnerStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const BecomeAPartnerStep: FC<BecomeAPartnerStepProps> = ({
  description,
  title,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-[2rem] justify-center items-center">
      <div className="w-[8rem] h-[8rem] bg-primary rounded-full grid place-content-center">
        {icon}
      </div>

      <h4 className="font-semibold">{title}</h4>
      <p className="leading-[1.9rem] text-center text-gray-700 text-[1.4rem]"> {description}</p>
    </div>
  );
};

export default BecomeAPartnerStep;
