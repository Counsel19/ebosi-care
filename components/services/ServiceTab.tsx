import { cn } from "@/lib/utils";
import { Dispatch, FC, SetStateAction } from "react";

interface ServiceTabProps {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

const steps = [
  "Choose your Ride",
  "Enter your Details",
  "Payment details",
  "Review and book",
];

const ServiceTab: FC<ServiceTabProps> = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="shadow-md text-[1.2rem] lg:text-base grid grid-cols-4 gap-[3rem]  h-[5rem] border">
      {steps.map((step, index) => (
        <button
        onClick={() => setCurrentIndex(index + 1)}
          className={cn(currentIndex == index + 1 ? "bg-[#395BA6] text-white" : "text-[#B7B7B7]", " px-4flex justify-start ")}
          key={index}
        >
          {index + 1}. {step}
        </button>
      ))}
    </div>
  );
};

export default ServiceTab;
