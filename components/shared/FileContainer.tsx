"use client"

import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";

interface FileContainerProps {
  fileIcon: string;
  fileName: string;
  link: string;
}
const FileContainer: FC<FileContainerProps> = ({
  fileIcon,
  fileName,
  link,
}) => {
  return (
    <div className="space-y-[3rem]">
      <div className="bg-[#EBEBEB] py-4 px-[2rem] flex items-center rounded-lg  gap-4">
        <Image className="h-[3rem] w-[3rem]" src={fileIcon} alt="fileIcon" height={50} width={50} />
        <p className="font-semibold">{fileName}</p>
      </div>

      <Button
        className="bg-[#E33629] w-full hover:bg-[#e335296f]"
        onClick={() => console.log(link)}
      >
        Download
      </Button>
    </div>
  );
};

export default FileContainer;
