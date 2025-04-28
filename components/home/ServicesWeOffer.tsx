"use client";

import React, { FC, useEffect } from "react";
import ServiceItem from "./molecules/ServiceItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { getServices } from "@/lib/redux/slices/service/serviceThunk";
import { Hearts } from "react-loader-spinner";
import { usePathname } from "next/navigation";
import { updateServicesStateValues } from "@/lib/redux/slices/service/servicesSlice";
import { useTranslation } from "react-i18next";

interface ServicesWeOfferProps {
  filterSelected?: boolean;
}

const ServicesWeOffer: FC<ServicesWeOfferProps> = ({ filterSelected }) => {
  const { allServices, selectedServices } = useSelector(
    (store: RootState) => store.services
  );
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const { t } = useTranslation("home");

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(getServices());
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (allServices) {
      dispatch(
        updateServicesStateValues({
          name: "selectedServices",
          value:
            allServices.find(
              (service) => service.id == pathname.split("/")[1]
            ) || null,
        })
      );
    }
  }, [allServices, dispatch, pathname]);

  return (
    <div className="w__frame -mt-[25rem] grid gap-[4rem]">
      <div className="space-y-4 ">
        <h3 className="font-semibold text-[2.8rem] text-[#CC1815] leading-[4.4rem] lg:text-[4rem]">
          {filterSelected ? t(`other_services`) : t(`offer_services`)}
        </h3>
        <p className="text-[1.4rem] text-[#5B5B5B] leading-[1.6rem]">
        {t('description')}
        </p>
      </div>

      {allServices ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[4rem]">
          {filterSelected && selectedServices
            ? allServices
                .filter((service) => service.id != selectedServices.id)
                .map((service) => (
                  <div key={service.id}>
                    <ServiceItem {...service} />
                  </div>
                ))
            : allServices.map((service) => (
                <div key={service.id}>
                  <ServiceItem {...service} />
                </div>
              ))}
        </div>
      ) : (
        <div className="bg-gray-300 grid place-content-center h-[40rem]">
          <Hearts
            height="150"
            width="150"
            color="#CC1815"
            ariaLabel="hearts-loading"
          />
        </div>
      )}
    </div>
  );
};

export default ServicesWeOffer;
