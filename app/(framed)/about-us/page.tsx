import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="grid gap-[6rem]">
      <div className="bg-[url('/images/female_helping_aman.jpg')] bg-no-repeat bg-cover bg-center h-[55rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative flex flex-col gap-[4rem] items-center justify-center max-w-[80%] mx-auto">
          <h3 className="font-medium  text-white text-[5.4rem] leading-[6rem] text-center">
            Welcome to Ebosicare
          </h3>
          <p className="text-center font-light text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
          <Link
            href={"/book-a-ride"}
            className={cn(
              buttonVariants({
                className: "bg-[#CC1815]",
              })
            )}
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="space-y-[4rem] w__frame">
        <h4 className="font-medium  text-[5.4rem] leading-[6rem] text-center">
          About Us
        </h4>
        <div className="grid gap-[2rem] text-gray-600  md:text-[1.4rem] leading-[1.8rem]">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur
          </p>
        </div>
      </div>

      <div className="bg-[url('/images/female_helping_aman.jpg')] bg-no-repeat bg-cover h-[35rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />
      </div>

      <div className="space-y-[4rem] w__frame mb-[6rem]">
        <h4 className="font-medium  text-[5.4rem] leading-[6rem] text-center">
          Mission and Vision
        </h4>
        <div className="grid gap-[2rem] text-gray-600 text-[1.4rem] leading-[1.8rem]">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
