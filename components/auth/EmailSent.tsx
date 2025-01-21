import Image from "next/image";
import React from "react";

const EmailSent = () => {
  return (
    <div className="p-[2rem] flex flex-col items-center justify-center space-y-8">
      <Image
        className=""
        height={100}
        width={100}
        alt="success"
        src={"/icons/success.png"}
      />
      <h4 className="font-bold text-[2.5rem]">Congratulations</h4>
      <p className="text-slate-500">
        A Reset link has been sent to your email!
      </p>
    </div>
  );
};

export default EmailSent;
