"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ForgotPassword from "./ForgotPassword";

const AuthDialog = ({}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [ openAuthDialog, setOpenAuthDialog ] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <Dialog open={openAuthDialog} onOpenChange={setOpenAuthDialog}>
      <DialogTrigger
        onClick={() => setShowForgotPassword(false)}
        className="text-blue-500"
      >
        Login/Signup here
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[60%]">
        <DialogTitle className="hidden">Auth Form</DialogTitle>
        {showForgotPassword ? (
          <ForgotPassword />
        ) : (
          <>
            <div className="grid grid-cols-2 h-[6rem]">
              <Button
                onClick={() => setSelectedTab(1)}
                className={cn(
                  "w-full h-full rounded-none hover:bg-white",
                  selectedTab == 1
                    ? "bg-white text-black "
                    : "bg-gray-300 text-gray-700"
                )}
              >
                <Image
                  src={"/icons/user-avatar.png"}
                  alt="user-avatar"
                  height={50}
                  width={50}
                  className="w-[3rem]"
                />
                <span>Login</span>
              </Button>
              <Button
                onClick={() => setSelectedTab(2)}
                className={cn(
                  "w-full h-full rounded-none hover:bg-white",
                  selectedTab == 2
                    ? "bg-white text-black "
                    : "bg-gray-300 text-gray-700"
                )}
              >
                <Image
                  src={"/icons/avatar-solid.png"}
                  alt="avatar-solid"
                  height={50}
                  width={50}
                  className="w-[3rem]"
                />
                <span>Sign up</span>
              </Button>
            </div>
            <div className="p-[4rem]">
              {selectedTab == 1 ? (
                <LoginForm setOpenAuthDialog={setOpenAuthDialog} setShowForgotPassword={setShowForgotPassword} />
              ) : (
                <RegisterForm />
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
