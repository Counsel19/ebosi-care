import { cn } from "@/lib/utils";
import { FC } from "react";

interface CustomBadgeProps {
  status: string;
}
const CustomBadge: FC<CustomBadgeProps> = ({ status }) => {
  return (
    <div
      className={cn(
        "grid place-content-center p-4 font-semibold capitalize h-fit rounded-[2rem] text-[1.4rem]",
        status == "active"
          ? "bg-emerald-50 text-emerald-500"
          : "bg-rose-50 text-rose-500"
      )}
    >
      {status}
    </div>
  );
};

export default CustomBadge;
