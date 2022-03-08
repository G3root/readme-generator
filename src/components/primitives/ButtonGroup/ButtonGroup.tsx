import * as React from "react";
import { clsx } from "~/utils";

export interface IButtonGroupProps {
  children: React.ReactNode;
}

export function ButtonGroup({
  children,
  className,
  ...rest
}: IButtonGroupProps & JSX.IntrinsicElements["div"]) {
  return (
    <div className={clsx("btn-group", className)} {...rest}>
      {children}
    </div>
  );
}
