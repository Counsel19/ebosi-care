"use client";

import HomeBanner from "@/components/home/HomeBanner";

import ServicesWeOffer from "@/components/home/ServicesWeOffer";

export default function Home() {
  return (
    <div className="grid gap-[8rem] mb-[8rem]">
      <HomeBanner />
      <ServicesWeOffer filterSelected />
    </div>
  );
}
