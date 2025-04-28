"use client"

import { testimonials } from "@/lib/data";
import React from "react";
import TestimonialItem from "./molecules/TestimonialItem";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const {t} = useTranslation("home")
  return (
    <div className="bg-[#F8F8F8] w__frame py-[5rem] px-[2rem]">
      <div className="grid gap-[5rem] ">
        <h4 className="text-[5.5rem] font-bold text-center">{t('testimonials')}</h4>
        <div className="grid lg:grid-cols-3 gap-[4rem]">
          {testimonials.map((testimonials) => (
            <TestimonialItem key={testimonials.id} {...testimonials} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
