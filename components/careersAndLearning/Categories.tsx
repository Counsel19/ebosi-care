"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    text: "My Learning",
    iconPath: "/icons/book.svg",
    link: "my-learning",
  },
  {
    id: 2,
    text: "Assessments & Documents",
    iconPath: "/icons/doc_list.svg",
    link: "access-documents",
  },
  {
    id: 3,
    text: "Download Report",
    iconPath: "/icons/mail_download.svg",
    link: "download-report",
  },
  {
    id: 4,
    text: "Support",
    iconPath: "/icons/person_support.svg",
    link: "support",
  },
  {
    id: 5,
    text: "Book Coaching Session",
    iconPath: "/icons/order_approve.svg",
    link: "book-coaching-session",
  },
];

const Categories = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);

  useEffect(() => {
    if (currentSlide > categories.length % 4) {
      setShowNext(false);
      setShowPrev(true);
    } else {
      setShowNext(true);
      setShowPrev(false);
    }
  }, [currentSlide]);

  return (
    <div className="bg-[#F8F8F8] py-[6rem]">
      <div className="w__frame">
        <h3 className="mb-[3rem] text-center text-[3.4rem] font-medium">
          Categories
        </h3>

        <div className="grid lg:grid-cols-4 gap-8 relative">
          <Button
            onClick={() => setCurrentSlide(currentSlide - 1)}
            className={cn(
              "rounded-full h-[4.3rem] w-[4.3rem] p-0 bg-primary text-white hover:bg-white border border-transparent hover:text-primary hover:border-primary absolute top-[50%] -translate-y-[50%] left-0",
              showPrev ? "flex" : "hidden"
            )}
          >
            <ChevronLeft />
          </Button>
          {categories
            .slice((currentSlide - 1) * 4, currentSlide * 4)
            .map((category, index) => (
              <CategoryItem
                btnDisabled={index !== 0}
                key={category.id}
                {...category}
              />
            ))}
          <Button
            onClick={() => setCurrentSlide(currentSlide + 1)}
            className={cn(
              "rounded-full h-[4.3rem] w-[4.3rem] p-0 bg-primary text-white hover:bg-white border border-transparent hover:text-primary hover:border-primary absolute top-[50%] -translate-y-[50%] right-0",
              showNext ? "flex" : "hidden"
            )}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

interface CategoryItemProps {
  text: string;
  iconPath: string;
  link: string;
  btnDisabled?: boolean;
}

const CategoryItem: FC<CategoryItemProps> = ({
  text,
  btnDisabled,
  link,
  iconPath,
}) => {
  const router = useRouter();
  return (
    <div className="grid  items-center p-[2rem] lg:px-[3rem] gap-[2rem] border-2 rounded-lg bg-white">
      <Image
        width={200}
        height={200}
        alt={text}
        src={iconPath}
        className="w-[8rem] h-[8rem] mx-auto"
      />
      <h6 className="font-semibold text-xl text-center">{text}</h6>

      <Button
        onClick={() => {
          router.push(`/${link}`);
        }}
        // disabled={btnDisabled}
        className={cn(
          " lg:min-w-[70%] uppercase  disabled:bg-gray-600",
          btnDisabled ? "bg-gray-500 hover:bg-gray-400" : "bg-[#E74337] hover:bg-rose-700"
        )}
      >
        Start
      </Button>
    </div>
  );
};
