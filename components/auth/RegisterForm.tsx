"use client";

import React, { FC, useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import { userSignupValidation } from "@/lib/validators";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { IRegister } from "@/types/users";
import { register } from "@/lib/redux/slices/auth/authThunk";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface RegisterFormProps {
  setOpenAuthDialog?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm: FC<RegisterFormProps> = ({ setOpenAuthDialog }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { t } = useTranslation("form");

  const { handleChange, setFieldValue, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        agreeToTerms: false,
        password: "",
        confirm_password: "",
      },
      validationSchema: userSignupValidation,
      onSubmit(values: {
        first_name: string;
        last_name: string;
        email: string;
        mobile_number: string;
        agreeToTerms: boolean;
        password: string;
        confirm_password: string;
      }) {
        handleRegisterUser(values);
      },
    });

  const handleRegisterUser = async (userInfo: IRegister) => {
    try {
      setIsLoading(true);
      const res = await dispatch(register(userInfo));

      if (res.type.includes("rejected"))
        return toast({
          title: "An Error Occurred",
          description: res.payload as string,
          variant: "destructive",
        });

      if (setOpenAuthDialog) {
        setOpenAuthDialog(false);
      }

      return toast({
        title: "Account Creation Successful",
        description: "You account has been created",
        variant: "success",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          toast({
            title: "Error in Registration",
            description: error.response?.data,
            variant: "destructive",
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-[2rem]">
      <div className="grid lg:grid-cols-2 gap-[4rem]">
        <div>
          <Input
            type="text"
            className="w-full shadow-inner rounded-sm outline-none "
            placeholder={t(`firstname`)}
            name="first_name"
            value={values.first_name}
            error={errors["first_name"]}
            touched={touched["first_name"]}
            onChange={handleChange}
          />
          <p
            className={cn(
              "text-[1.2rem] mt-1 text-rose-500",
              !(errors["first_name"] && touched["first_name"]) && "hidden"
            )}
          >
            {errors["first_name"]}
          </p>
        </div>

        <div>
          <Input
            type="text"
            className="w-full shadow-inner rounded-sm outline-none "
            placeholder={t(`lastname`)}
            name="last_name"
            value={values.last_name}
            error={errors["last_name"]}
            touched={touched["last_name"]}
            onChange={handleChange}
          />
          <p
            className={cn(
              "text-[1.2rem] mt-1 text-rose-500",
              !(errors["last_name"] && touched["last_name"]) && "hidden"
            )}
          >
            {errors["last_name"]}
          </p>
        </div>
      </div>

      <div>
        <Input
          type="email"
          className="w-full shadow-inner rounded-sm outline-none "
          placeholder={t(`email`)}
          name="email"
          value={values.email}
          error={errors["email"]}
          touched={touched["email"]}
          onChange={handleChange}
        />
        <p
          className={cn(
            "text-[1.2rem] mt-1 text-rose-500",
            !(errors["email"] && touched["email"]) && "hidden"
          )}
        >
          {errors["email"]}
        </p>
      </div>

      <div className="space-y-2 text-gray-500">
        <div className="flex items-center">
          <div
            className={cn(
              "flex gap-2 items-center px-2 h-[4.5rem]  w-full rounded-none border",
              errors.mobile_number && touched.mobile_number
                ? " border-rose-500"
                : "border-input"
            )}
          >
            <PhoneInput
              defaultCountry="us"
              className="w-full"
              onChange={(phone) => {
                setFieldValue("mobile_number", phone);
              }}
              value={values.mobile_number}
            />
          </div>
        </div>
        <p
          className={cn(
            "text-[1.2rem] mt-1 text-rose-500",
            !(errors.mobile_number && touched.mobile_number) && "hidden"
          )}
        >
          {errors.mobile_number}
        </p>
      </div>

      <div>
        <Input
          type="password"
          className="w-full shadow-inner rounded-sm outline-none "
          placeholder={t(`password`)}
          value={values.password}
          error={errors["password"]}
          touched={touched["password"]}
          name="password"
          onChange={handleChange}
        />
        <p
          className={cn(
            "text-[1.2rem] mt-1 text-rose-500",
            !(errors["password"] && touched["password"]) && "hidden"
          )}
        >
          {errors["password"]}
        </p>
      </div>

      <div className="w-full  space-y-4">
        <div>
          <Input
            type="password"
            className="w-full shadow-inner rounded-sm outline-none "
            placeholder={t(`confirm_password`)}
            name="confirm_password"
            value={values.confirm_password}
            error={errors["confirm_password"]}
            touched={touched["confirm_password"]}
            onChange={handleChange}
          />
          <p
            className={cn(
              "text-[1.2rem] mt-1 text-rose-500",
              !(errors["confirm_password"] && touched["confirm_password"]) &&
                "hidden"
            )}
          >
            {errors["confirm_password"]}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <Checkbox
            className={cn(
              "h-[1.3rem] w-[1.3rem]",
              errors.agreeToTerms && touched.agreeToTerms
                ? "border-rose-500"
                : "border-gray-500"
            )}
            id="agreeToTerms"
            checked={values.agreeToTerms}
            name="agreeToTerms"
            onChange={handleChange}
            onCheckedChange={(value) => {
              setFieldValue("agreeToTerms", value);
            }}
          />
          <p className="text-[1.2rem]">
            {t(`agree_text`)}{" "}
            <Link href={"/"} className="text-primary">
              {t(`terms_and_condition`)}
            </Link>
          </p>
        </div>
      </div>

      <Button
        isLoading={isLoading}
        className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white"
      >
        {t(`register`)}
      </Button>
    </form>
  );
};

export default React.memo(RegisterForm);
