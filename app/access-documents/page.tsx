"use client";

import BackContinueBtns from "@/components/shared/BackContinueBtns";
import FileContainer from "@/components/shared/FileContainer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const learningDocs = [
  {
    id: 1,
    filename: "Accessments",
    link: "",
  },
  {
    id: 2,
    filename: "Acknowledgment",
    link: "",
  },
];

const MyLearning = () => {
  const router = useRouter();
  return (
    <div className="py-[6rem] w__frame ">
      <div className="mb-[4rem]">
        <div className="flex justify-end ">
          <div className="flex gap-[1rem] w-fit">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid place-content-center">
          <Link href={"/"}>
            <Image
              alt="ebosi_logo"
              src={"/images/ebosi_logo.svg"}
              className="w-[20.4rem] h-[9.3rem]"
              width={234}
              height={93}
            />
          </Link>
        </div>
      </div>

      <div className=" w-[60%] mx-auto space-y-[4rem]">
        <h3 className="  text-[3.4rem] font-medium">
          Assessments & Acknowledgements
        </h3>

        <div className="space-y-[5rem]">
          {learningDocs.map((doc) => (
            <FileContainer
              key={doc.id}
              fileIcon="/icons/bussiness_doc_ blue.svg"
              fileName={doc.filename}
              link={doc.link}
            />
          ))}
        </div>

        <BackContinueBtns
          backFunc={() => {
            router.back();
          }}
          continueFunc={() => {
            router.push("/download-report");
          }}
        />
      </div>
    </div>
  );
};

export default MyLearning;
