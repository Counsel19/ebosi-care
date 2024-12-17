import { FC } from "react";
import { Button } from "../ui/button";

const ReachOutCTA: FC = ({}) => {
  return (
    <div className="h-[35rem] text-white bg-[url('/images/man_on_wheelchair.jpg')] bg-cover bg-center relative grid place-content-center ">
      <div className="bg-[rgba(57,100,195,0.8)] absolute top-0 right-0 bottom-0 left-0" />
      <div className="relative h-[80%] w-[80%] grid gap-[3rem] p-[2rem]">
        <div className="grid gap-[1.5rem] ">
          <h4 className=" text-[3.5rem] lg:text-[6rem] leading-[4rem] lg:leading-[6rem]">
            Have any <b className="font-bold">problems or Complaints?</b>
          </h4>
          <p>Our experts will solve them in no time</p>
        </div>
        <Button className="bg-[#CC1815] hover:bg-[#CC1815] w-fit">REACH OUT TO US NOW</Button>
      </div>
    </div>
  );
};

export default ReachOutCTA;
