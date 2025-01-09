import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ForgotPassword = () => {
  return (
    <div className="p-[4rem]">
      <form className="space-y-[2rem]">
        <div className=" space-y-4">
          <h3 className="font-light text-[4rem] lg:text-[5rem] leading-[3rem]">
            Reset Password
          </h3>
          <p className="text-gray-600 text-[1.4rem]">
            Enter your email address below to reset your password.
          </p>
        </div>

        <div className="w-full  space-y-4">
          <label htmlFor="">Email:</label>
          <Input
            type="email"
            className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="name@email.com"
          />
        </div>

        <Button className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white">
          Request Reset
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
