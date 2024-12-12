import Image from "next/image";
import { FC } from "react";

interface TestimonialItemProps {
  image: string;
  name: string;
  subname: string;
  note: string;
}
const TestimonialItem: FC<TestimonialItemProps> = ({
  image,
  name,
  subname,
  note,
}) => {
  return (
    <div className="shadow-xl rounded-lg">
      <div className="flex  items-center gap-[1rem] p-[2rem] border-b ">
        <Image
          src={image}
          alt="avatar_"
          width={400}
          height={400}
          className="w-[5.4rem] h-[5.4rem] border rounded-full overflow-hidden"
        />
        <div>
          <h5 className="text-[2.8rem]">{name}</h5>
          <span className="uppercase text-[1.4rem] text-[#3965C4] ">
            {subname}
          </span>
        </div>
      </div>
      <p className="text-gray-500 leading-[3rem] text-[1.8rem]  p-[2rem]">{note}</p>
    </div>
  );
};

export default TestimonialItem;
