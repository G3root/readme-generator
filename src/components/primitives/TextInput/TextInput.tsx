import * as React from "react";
import { TextInputStyleProps, textInputStyles } from "./styles";

export interface ITextInputProps extends TextInputStyleProps {}

export function TextInput({
  variant,
  className,
  size,
  scheme,
  ...rest
}: ITextInputProps) {
  return (
    <input
      className={textInputStyles({
        variant,
        size,
        scheme,
        class: className,
      })}
      {...rest}
    />
  );
}
