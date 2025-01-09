import React, { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

interface LoginFormProps {
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: FC<LoginFormProps> = ({ setShowForgotPassword }) => {
  return (
    <form className="space-y-[2rem]">
      <div className="w-full  space-y-4">
        <label htmlFor="">Email:</label>
        <Input
          type="email"
          className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="name@email.com"
        />
      </div>
      <div className="w-full  space-y-4">
        <label htmlFor="">Password:</label>
        <Input
          type="password"
          className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="*********"
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Checkbox
              className="h-[1.3rem] w-[1.3rem] border-gray-500"
              id="bookingForSomeone"
            />
            <p className="text-[1.4rem]">
              I Agree with all the{" "}
              <Link href={"/"} className="text-primary">
                Terms & Conditions
              </Link>
            </p>
          </div>
          <span
            onClick={() => setShowForgotPassword(true)}
            className="cursor-pointer "
          >
            Forgot Password?
          </span>
        </div>
      </div>

      <Button className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
