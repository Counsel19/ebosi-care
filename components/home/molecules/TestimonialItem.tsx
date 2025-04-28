"use client";

import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface TestimonialItemProps {
  image: string;
  name: string;
  subname: string;
  note: { [key: string]: string };
}
const TestimonialItem: FC<TestimonialItemProps> = ({
  image,
  name,
  subname,
  note,
}) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language || "en";

  const translatedNote = note[currentLang];

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
      <p className="text-gray-500 leading-[3rem] text-[1.8rem]  p-[2rem]">
        {translatedNote}
      </p>
    </div>
  );
};

export default TestimonialItem;
