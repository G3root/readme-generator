import * as React from "react";
import { ButtonStyleProps, buttonStyles } from "./styles";

export interface IIconButtonProps extends ButtonStyleProps {
  Icon: JSX.Element;
  "aria-label": string;
}

export const IconButton = ({
  scheme,
  shape,
  size,
  outline,
  className,
  Icon,
  ...rest
}: IIconButtonProps) => {
  const iconComponent = React.cloneElement(Icon, {
    "aria-hidden": true,
  });

  return (
    <button
      className={buttonStyles({
        scheme,
        shape,
        size,
        outline,
        class: className,
      })}
      {...rest}
    >
      {iconComponent}
    </button>
  );
};
