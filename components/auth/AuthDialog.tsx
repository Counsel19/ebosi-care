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
import { useTranslation } from "react-i18next";

const AuthDialog = ({}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { t } = useTranslation("home");

  return (
    <Dialog open={openAuthDialog} onOpenChange={setOpenAuthDialog}>
      <DialogTrigger
        onClick={() => setShowForgotPassword(false)}
        className="text-blue-500"
      >
        {t(`login_signup`)}
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[60%]">
        <DialogTitle className="hidden">{t(`auth_form`)}</DialogTitle>
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
                <span> {t(`login`)}</span>
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
                <span> {t(`signup`)}</span>
              </Button>
            </div>
            <div className="p-[4rem]">
              {selectedTab == 1 ? (
                <LoginForm
                  setOpenAuthDialog={setOpenAuthDialog}
                  setShowForgotPassword={setShowForgotPassword}
                />
              ) : (
                <RegisterForm setOpenAuthDialog={setOpenAuthDialog} />
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
