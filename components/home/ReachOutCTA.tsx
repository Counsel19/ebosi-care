"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const ReachOutCTA: FC = ({}) => {
  const { t } = useTranslation("home");

  return (
    <div className="h-[35rem] text-white bg-[url('/images/man_on_wheelchair.jpg')] bg-cover bg-center relative grid place-content-center ">
      <div className="bg-[rgba(57,100,195,0.8)] absolute top-0 right-0 bottom-0 left-0" />
      <div className="relative h-[80%] w-[80%] grid gap-[3rem] p-[2rem]">
        <div className="grid gap-[1.5rem] ">
          <h4 className=" text-[3.5rem] lg:text-[6rem] leading-[4rem] lg:leading-[6rem]">
            {t("have_any")}{" "}
            <b className="font-bold"> {t("problems_complait")}</b>
          </h4>
          <p> {t("reachout_desc")}</p>
        </div>
        <Button className="bg-[#CC1815] hover:bg-[#CC1815] w-fit">
          {t("reachout")}
        </Button>
      </div>
    </div>
  );
};

export default ReachOutCTA;
