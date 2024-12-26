"use client"

import { FC } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BackContinueBtnsProps {
  backFunc: () => void;
  continueFunc: () => void;
}
const BackContinueBtns: FC<BackContinueBtnsProps> = ({
  backFunc,
  continueFunc,
}) => {
  return (
    <div className="flex gap-8 justify-between items-center">
      <Button onClick={backFunc} variant={"outline"} className="border-primary text-primary">
        <ChevronLeft />
        Back
      </Button>
      <Button onClick={continueFunc} >
        Continue
        <ChevronRight />
      </Button>
    </div>
  );
};

export default BackContinueBtns;
