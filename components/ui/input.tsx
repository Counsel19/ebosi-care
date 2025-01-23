import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  touched?: boolean | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, touched, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-18 w-full rounded-xl border border-input bg-transparent px-6 py-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#395BA6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && touched
            ? "focus-visible:ring-rose-500 outline  outline-1 outline-rose-500 "
            : "focus-visible:ring-[#395BA6] outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
