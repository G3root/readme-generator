import * as React from "react";
import { ButtonStyleProps, buttonStyles } from "./styles";

export interface IButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

export const Button = ({
  scheme,
  shape,
  size,
  loading,
  outline,
  wide,
  className,
  children,
  ...rest
}: IButtonProps) => (
  <button
    className={buttonStyles({
      scheme,
      shape,
      size,
      loading,
      outline,
      wide,
      class: className,
    })}
    {...rest}
  >
    {children}
  </button>
);
