import * as React from "react";
import { TextInputStyleProps, textInputStyles } from "./styles";

export interface ITextInputProps extends TextInputStyleProps {}

function TextInputInner(
  { variant, className, size, scheme, ...rest }: ITextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      className={textInputStyles({
        variant,
        size,
        scheme,
        class: className,
      })}
      ref={ref}
      {...rest}
    />
  );
}

export const TextInput = React.forwardRef(TextInputInner);
