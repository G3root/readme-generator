import * as React from "react";
import { SelectInputStyleProps, selectInputStyles } from "./styles";
export interface ISelectProps extends SelectInputStyleProps {
  children: React.ReactNode;
}

export function Select({
  variant,
  className,
  size,
  scheme,
  children,
  ...rest
}: ISelectProps) {
  return (
    <select
      className={selectInputStyles({
        variant,
        size,
        scheme,
        class: className,
      })}
      {...rest}
    >
      {children}
    </select>
  );
}
