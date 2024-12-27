import Image from "next/image";
import React from "react";

const showCase = [
  {
    id: 1,
    image: "/images/app1.png",
    text: "You are Your Own Boss at Your Own Time",
  },
  {
    id: 2,
    image: "/images/app2.png",
    text: "Endless Profit Opportunities",
  },
  {
    id: 3,
    image: "/images/app3.png",
    text: "Maximize Your Income",
  },
  {
    id: 4,
    image: "/images/app4.png",
    text: "Track Your Earnings in Real-Time",
  },
];

const AppShowCase = () => {
  return (
    <div className=" mb-[8rem] w__frame">
      <div className="grid gap-[1rem] mb-[8rem]">
        <h3 className=" text-center text-[2.8rem] lg:text-[3.4rem] font-medium">Our App</h3>
        <h4 className=" text-center text-[2rem] lg:text-[2.4rem] font-medium">
          Designed to make your driving experience easier...
        </h4>
      </div>

      <div className="grid lg:grid-cols-4 gap-[2rem]">
        {showCase.map((item) => (
          <div key={item.id} className="space-y-8">
            <Image
              src={item.image}
              alt={item.text}
              width={500}
              height={500}
              className="h-[26rem] object-contain"
            />
            <h5 className="text-center font-semibold text-2xl">{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppShowCase;
