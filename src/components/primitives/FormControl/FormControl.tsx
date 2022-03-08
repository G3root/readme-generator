import * as React from "react";
import { clsx } from "~/utils";

export interface IFormControlProps {
  children: React.ReactNode;
}

export function FormControl({
  className,
  children,
  ...rest
}: IFormControlProps & JSX.IntrinsicElements["div"]) {
  return (
    <div className={clsx("form-control w-full", className)} {...rest}>
      {children}
    </div>
  );
}
